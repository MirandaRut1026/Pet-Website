# 🐾 Rutledge Pet Sitting Website

A cute, pastel-themed website for Rutledge Pet Sitting.

## Project Structure

```
rutledge-pet-sitting/
├── index.html       ← The entire website (single file)
├── package.json     ← Dev server config
└── README.md        ← This file
```

## Running Locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## What to Customize

### Pricing
Search for `"Pricing coming soon"` in `index.html` — there are 5 instances, one per service card.

### Phone Number
Search for `(555) 123-4567` and replace with the real number.

### Stats (Hero section)
Look for `50+`, `200+`, `5★` — update these to reflect real numbers.

### Pet Gallery
Find the `const pets = [...]` array in the `<script>` tag at the bottom. Each pet looks like:
```js
{ name: "Biscuit", breed: "Golden Retriever", emoji: "🐕", bg: "#FDEBD0", type: "dogs", tags: ["Boarding"], tagColors: ["tag-peach"] }
```
Add, remove, or edit entries. Valid `type` values: `"dogs"`, `"cats"`, `"other"`.

### Testimonials
Search for the `.testimonial-card` sections and swap in real client quotes, names, and pet names.

### Form → Real Notifications
Right now the form shows a success message but doesn't send anything. To wire it up:
- **Email**: Use [Formspree](https://formspree.io) — free, just swap the form action
- **Text/SMS**: Use [Twilio](https://twilio.com) or a simple backend

### Hosting (Free Options)
- **Netlify**: Drag and drop the folder at netlify.com/drop — live in 30 seconds
- **GitHub Pages**: Push to a GitHub repo and enable Pages in settings
- **Vercel**: `npx vercel` in this folder
