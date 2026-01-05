# InternLK - Recruiting Website

A modern, professional recruiting website for intern positions built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with professional color palette
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Fast and optimized with Next.js 15
- 📝 Formspree integration for form-to-email submissions
- 💼 4 Intern positions: QA, Frontend Dev, Backend Dev, UI/UX Design
- ✨ Smooth user experience with position pre-selection

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Handling**: Formspree (free tier)
- **Deployment**: Vercel (recommended)

## Color Palette

- Primary: `#2563EB` (Vibrant Blue)
- Secondary: `#7C3AED` (Purple)
- Background: `#F8FAFC` (Light Gray)
- Text: `#1E293B` (Dark Slate)
- Success: `#10B981` (Green)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Formspree

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your Form ID (it looks like: `mxxxxxxx`)
4. Open `app/apply/page.tsx`
5. Replace `YOUR_FORM_ID` in line 32 with your actual Form ID:
   ```tsx
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## Custom Domain Setup (internLK.com)

1. Buy domain from Namecheap or GoDaddy (~$10-15/year)
2. In Vercel dashboard, go to your project settings
3. Navigate to "Domains"
4. Add your custom domain: `internlk.com` and `www.internlk.com`
5. Update DNS records at your domain registrar (Vercel will provide instructions)

## Project Structure

```
/internships
├── app/
│   ├── apply/
│   │   └── page.tsx          # Application form page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── components/
│   └── PositionCard.tsx       # Position card component
├── lib/
│   ├── positions.ts           # Position data
│   └── types.ts               # TypeScript types
├── public/                    # Static assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## Customization

### Adding/Editing Positions

Edit `lib/positions.ts` to add, remove, or modify intern positions.

### Changing Colors

Edit `tailwind.config.ts` to update the color palette.

### Email Configuration

By default, applications are sent to the email associated with your Formspree account.
To send to a different email, configure it in your Formspree dashboard.

## Form Submissions

With Formspree free tier, you get:
- 50 submissions per month
- Email notifications
- File uploads (up to 10MB)
- Dashboard access for 30 days

## Cost Breakdown

- Domain (internLK.com): ~3,500 LKR/year
- Hosting (Vercel): FREE
- Form handling (Formspree): FREE (50 submissions/month)
- **Total: ~3,500 LKR/year**

## Support

For issues or questions:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Formspree Documentation](https://help.formspree.io/)
- Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT License - feel free to use this for your recruiting needs!
