# Cjay Cinematics - Content Editing Guide

## 🎬 How to Edit Your Website Content

All website content can be edited in **ONE SIMPLE FILE**: `/app/frontend/src/config/content.js`

No coding knowledge required! Just edit the text between quotes.

---

## 📝 What You Can Edit

### 1. **Business Information**
```javascript
businessName: 'Cjay Cinematics',  // Change business name here
email: 'cjaycinematics@outlook.com',  // Update email
```

### 2. **Social Media Links**
```javascript
instagram: 'https://www.instagram.com/cjaycinematics...',  // Your IG link
facebook: 'https://www.facebook.com/share/187chw8RpE...',  // Your FB link
```

### 3. **Pricing** (Most Common Edit)
Find the `pricingPackages` section and update:
- Package names
- Prices (e.g., `'$125'` → `'$150'`)
- Features listed

Example:
```javascript
{
  name: '3-Minute Cinematic',  // Edit package name
  price: '$125',  // Change price
  features: [
    'Professional cinematic editing',  // Edit or add features
    'High-quality audio mix',
  ],
}
```

### 4. **Testimonials**
Add new testimonials or edit existing ones:
```javascript
{
  quote: "Your testimonial text here",
  author: 'Client Name',
  role: 'Service Type',
}
```

### 5. **Founder Bio**
Update Cjay's bio in the `founderInfo` section:
```javascript
bio: [
  'First paragraph...',
  'Second paragraph...',
  // Add more paragraphs as needed
],
```

### 6. **Add Portfolio Videos**
Uncomment the portfolio section at the bottom and add your videos:
```javascript
export const portfolioItems = [
  {
    id: 1,
    type: 'video',
    category: 'memorial',  // or 'celebration' or 'events'
    title: 'Memorial Service Film',
    embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
  },
];
```

---

## 🚀 How to Deploy Changes

### Option A: Using Netlify (Drag & Drop)
1. Edit `content.js` file
2. Save changes
3. Build the project: `cd /app/frontend && yarn build`
4. Drag the `/app/frontend/build` folder to Netlify
5. Done! ✅

### Option B: Using GitHub + Netlify (Auto-Deploy)
1. Push code to GitHub
2. Connect Netlify to your GitHub repo
3. Every time you push changes, Netlify auto-deploys
4. **Recommended**: Set up branch protection so only you can approve changes

---

## 🔒 Access Control Options

### **Developer Access** (Full Edit Rights)
Give access to your GitHub repository:
- They can edit code and content
- You approve all changes via Pull Requests

### **Viewer Access** (Read-Only)
Share the live website link:
- No editing capabilities
- Just view the finished site

### **Limited Editor Access**
Set up Netlify CMS (requires additional setup):
- Web-based editor
- No code access needed
- You control who gets login credentials

---

## 📁 File Structure

```
/app/frontend/src/
├── config/
│   └── content.js          ← EDIT THIS FILE
├── components/
│   ├── Hero.jsx            (Uses content.js)
│   ├── Pricing.jsx         (Uses content.js)
│   ├── About.jsx           (Uses content.js)
│   └── ...
```

---

## 💡 Quick Tips

1. **Always test locally** before deploying:
   ```bash
   cd /app/frontend
   yarn start
   ```

2. **Keep backups** of your `content.js` file

3. **Use meaningful commit messages** when pushing to GitHub:
   ```bash
   git commit -m "Updated pricing: 3-min package now $150"
   ```

4. **Protect your main branch** on GitHub:
   - Settings → Branches → Add rule
   - Require pull request reviews before merging

---

## 🆘 Need Help?

**Common Tasks:**
- Update prices → Edit `pricingPackages` in `content.js`
- Add testimonial → Add object to `testimonials` array
- Change social links → Edit `socialMedia` section
- Update bio → Edit `founderInfo.bio` array

**Deployment Issues:**
- Make sure you run `yarn build` before deploying
- Check that all quotes are properly closed
- Verify image URLs are correct

---

**Last Updated:** January 27, 2025  
**Maintained by:** Cjay Cinematics
