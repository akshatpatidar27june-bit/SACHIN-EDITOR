# Sachin Cinematography

A Next.js App Router portfolio for Sachin Cinematography.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Routes

- `/` Home — cinematic hero, introduction and featured categories.
- `/portfolio` Portfolio categories (real approved project media still needs to be added).
- `/about` About Sachin — uses `/sachin-photo.png`.
- `/services` Services.
- `/contact` Enquiry form wired to the Supabase `enquiries` table when configured.
- `/admin` Supabase email/password sign-in and administrator-role gate.

## Required public assets

The homepage expects `public/cine-rig-background-clean.html`. The About page expects `public/sachin-photo.png`.

The supplied files are prepared in the companion asset package:
- `public/cine-rig-background-clean.html` — Three.js cinema-rig scene with the demo section copy and visible HUD removed.
- `public/sachin-photo.png` — supplied Sachin portrait.

Add both files to the repository's `public/` folder before expecting the 3D background and portrait to appear. The HTML animation file is self-contained and runs inside a background iframe; it should not contain portfolio text or demo labels.

## Supabase setup

1. Create a Supabase project.
2. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local` and your Vercel project environment variables.
3. Apply `supabase/migrations/202611120001_initial_cms.sql` in the Supabase SQL editor.
4. Create the first admin user in Supabase Auth.
5. Insert that user's Auth UUID into `public.profiles` with `is_admin = true` using the SQL editor.
6. Keep public sign-ups disabled. Never put a service-role key in browser code or a `NEXT_PUBLIC_` variable.
7. Create a private Storage bucket named `portfolio` and configure upload/read policies for admins before enabling media management.

The contact form is implemented against the migration's `enquiries` table, but it will not accept submissions until Supabase is configured and the migration has been applied. The admin route currently provides authentication and role verification only; CRUD screens and media management are not implemented yet.

## Verification and launch

Run `npm run build` locally and deploy to Vercel only after the public assets and Supabase setup are in place. No production build or live deployment has been verified in this work session.

Biography copy is limited to the facts provided so far. Add specific years, milestones, equipment, awards, client credits and testimonials only after Sachin confirms them.
