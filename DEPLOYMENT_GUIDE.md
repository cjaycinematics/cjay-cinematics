# Cjay Cinematics - Deployment Guide

## 🚀 Deploy to Netlify (2 Options)

---

## **Option 1: Manual Deploy (Easiest - No GitHub Needed)**

### Step 1: Build Your Site
```bash
cd /app/frontend
yarn build
```

This creates a `build` folder with your production-ready website.

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://www.netlify.com) and sign up/login
2. Click "Add new site" → "Deploy manually"
3. Drag and drop your `/app/frontend/build` folder
4. Done! Your site is live! ✅

**Pros:**
- Super simple
- No GitHub account needed
- Perfect for quick updates

**Cons:**
- Must manually redeploy after every change
- No version history

---

## **Option 2: GitHub + Netlify Auto-Deploy (Recommended)**

### Step 1: Push to GitHub

1. **Create a GitHub repository:**
   ```bash
   cd /app
   git init
   git add .
   git commit -m "Initial commit - Cjay Cinematics website"
   ```

2. **Create repo on GitHub.com:**
   - Go to github.com
   - Click "New repository"
   - Name it: `cjay-cinematics`
   - Don't initialize with README
   - Click "Create repository"

3. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/cjay-cinematics.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect Netlify to GitHub

1. Go to [netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Authorize Netlify to access your repos
5. Select your `cjay-cinematics` repository

### Step 3: Configure Build Settings

**Build command:**
```
cd frontend && yarn install && yarn build
```

**Publish directory:**
```
frontend/build
```

**Base directory:**
```
/
```

Click "Deploy site" ✅

### Step 4: Protect Your Main Branch (Important!)

1. Go to your GitHub repo
2. Settings → Branches
3. Click "Add branch protection rule"
4. Branch name pattern: `main`
5. Check these boxes:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (set to 1)
   - ✅ Require status checks to pass
6. Save changes

**Now:**
- Only YOU can approve changes to the main branch
- Anyone you give access must submit a Pull Request
- You review and approve before it goes live

---

## 🔒 Access Control Setup

### **For Cjay (Owner) - Full Access**
You have full access to:
- Edit code directly
- Merge pull requests
- Deploy to production
- Manage collaborators

### **For Developers - Contributor Access**
1. Go to GitHub repo → Settings → Collaborators
2. Add their GitHub username
3. Set permission to "Write"
4. They can:
   - View code
   - Submit pull requests
   - Cannot merge without your approval

### **For Viewers - Read-Only**
1. Share the live website URL (e.g., `cjaycinematics.netlify.app`)
2. No GitHub access needed
3. They can only view the live site

---

## 📝 Making Updates (GitHub Method)

### When YOU Make Changes:
```bash
# 1. Edit content.js or any file
# 2. Save changes
# 3. Commit and push:
git add .
git commit -m "Updated 3-minute package price to $150"
git push origin main

# 4. Netlify auto-deploys (2-3 minutes)
# 5. Check your live site!
```

### When Someone Else Makes Changes:
1. They create a new branch: `git checkout -b update-pricing`
2. Make changes and commit
3. Push branch: `git push origin update-pricing`
4. Create Pull Request on GitHub
5. **YOU review and approve**
6. Merge to main
7. Netlify auto-deploys

---

## 🌐 Custom Domain Setup (Optional)

### If You Own a Domain (e.g., cjaycinematics.com):

1. Go to Netlify → Domain settings
2. Click "Add custom domain"
3. Enter your domain: `cjaycinematics.com`
4. Netlify provides DNS records
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add DNS records:
   ```
   A Record: @ → 75.2.60.5
   CNAME: www → YOUR_SITE.netlify.app
   ```
7. Wait 24-48 hours for DNS propagation
8. Enable HTTPS (free SSL certificate)

---

## 🔐 Environment Variables (If Needed Later)

If you add backend features or API keys:

1. Netlify dashboard → Site settings → Environment variables
2. Add variables (e.g., `REACT_APP_API_KEY`)
3. Never commit API keys to GitHub
4. Access in code: `process.env.REACT_APP_API_KEY`

---

## 🛠️ Useful Netlify Features

### **Deploy Previews**
- Every pull request gets a preview URL
- Test changes before going live
- Automatically enabled

### **Rollbacks**
- If something breaks, instantly rollback
- Netlify → Deploys → Click previous deploy → "Publish deploy"

### **Forms** (Built-in)
Your contact form can work with Netlify Forms:
1. Add `netlify` attribute to form tag
2. Submissions appear in Netlify dashboard
3. Get email notifications

---

## 📊 Analytics (Optional)

### Netlify Analytics ($9/month):
- Real visitor stats
- No tracking scripts
- GDPR compliant

### Google Analytics (Free):
1. Create Google Analytics account
2. Get tracking ID
3. Add to `public/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

---

## 🆘 Troubleshooting

### **Build Failed on Netlify:**
- Check build logs in Netlify dashboard
- Common issues:
  - Missing dependencies: Run `yarn install` locally first
  - Syntax errors: Check console for errors
  - Wrong build command: Should be `cd frontend && yarn build`

### **Site Not Updating:**
- Clear cache: Netlify → Deploys → Clear cache
- Check deploy status: Should say "Published"
- Wait 2-3 minutes for CDN to update

### **Images Not Loading:**
- Verify image URLs in `content.js`
- Check browser console for 404 errors
- Make sure images are publicly accessible

---

## 📞 Support Resources

- **Netlify Docs:** https://docs.netlify.com
- **GitHub Guides:** https://guides.github.com
- **React Docs:** https://react.dev

---

**Last Updated:** January 27, 2025  
**Ready to deploy!** 🚀
