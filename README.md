# Sachin Cinematography

A Next.js App Router portfolio for Sachin Cinematography.

## Run locally
```bash
npm install
npm run dev
```

## Pages
- `/` Home
- `/portfolio` Portfolio categories (add approved project media before launch)
- `/about` About Sachin
- `/services` Services
- `/contact` Enquiry form (currently front-end demo only)
- `/admin` Admin workspace placeholder (Supabase auth/database/storage not connected yet)

## Before production
1. Add the supplied Sachin portrait as `public/sachin-photo.jpg` and replace the temporary portrait panel on `app/about/page.js`.
2. Add the supplied Three.js background as an optimized client-side component; the current hero uses a lightweight animated CSS atmosphere until that file is integrated.
3. Configure Supabase project URL/anon key, authentication, tables, row-level security and storage. Do not expose service-role keys in client code.
4. Connect the contact form to a server action or Supabase Edge Function and add spam protection.
5. Add real portfolio projects, approved images/videos, booking contact details and confirmed biography details.
6. Run `npm run build` before deployment.

The About copy is intentionally limited to information supplied so far; no unverified awards, years of experience or client claims are included.
