-- Sachin Cinematography CMS foundation.
-- Create the first admin user in Supabase Auth, then insert that user's UUID
-- into public.profiles with is_admin=true using the Supabase SQL editor.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and is_admin = true
  );
$$;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null,
  summary text,
  cover_url text,
  video_url text,
  is_published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  quote text not null,
  is_published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  project_type text,
  message text,
  status text not null default 'new' check (status in ('new','contacted','closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.services enable row level security;
alter table public.testimonials enable row level security;
alter table public.enquiries enable row level security;
alter table public.site_settings enable row level security;

drop policy if exists "Admins can read profiles" on public.profiles;
create policy "Admins can read profiles" on public.profiles
for select to authenticated using (public.is_admin() or id = auth.uid());

drop policy if exists "Public can read published projects" on public.projects;
create policy "Public can read published projects" on public.projects
for select to anon, authenticated using (is_published = true or public.is_admin());
drop policy if exists "Admins manage projects" on public.projects;
create policy "Admins manage projects" on public.projects
for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Public can read published services" on public.services;
create policy "Public can read published services" on public.services
for select to anon, authenticated using (is_published = true or public.is_admin());
drop policy if exists "Admins manage services" on public.services;
create policy "Admins manage services" on public.services
for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Public can read published testimonials" on public.testimonials;
create policy "Public can read published testimonials" on public.testimonials
for select to anon, authenticated using (is_published = true or public.is_admin());
drop policy if exists "Admins manage testimonials" on public.testimonials;
create policy "Admins manage testimonials" on public.testimonials
for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Public can submit enquiries" on public.enquiries;
create policy "Public can submit enquiries" on public.enquiries
for insert to anon, authenticated with check (status = 'new');
drop policy if exists "Admins manage enquiries" on public.enquiries;
create policy "Admins manage enquiries" on public.enquiries
for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Public can read public site settings" on public.site_settings;
create policy "Public can read public site settings" on public.site_settings
for select to anon, authenticated using (key like 'public.%' or public.is_admin());
drop policy if exists "Admins manage site settings" on public.site_settings;
create policy "Admins manage site settings" on public.site_settings
for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Storage bucket creation is intentionally left to the Supabase dashboard.
-- Create a private 'portfolio' bucket and add policies restricted to admins.
