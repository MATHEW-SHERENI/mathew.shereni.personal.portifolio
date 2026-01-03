# Firebase Hosting Deployment Guide

## Step-by-Step Instructions to Deploy Your Portfolio to Firebase

### Prerequisites
1. **Firebase Account**: You need a Google account to use Firebase
2. **Node.js**: Make sure Node.js is installed on your computer
3. **Firebase CLI**: We'll install this in the steps below

---

## Step 1: Install Firebase CLI

Open your terminal/command prompt and run:

```bash
npm install -g firebase-tools
```

This installs Firebase CLI globally on your computer.

---

## Step 2: Login to Firebase

Run this command to log in to your Firebase account:

```bash
firebase login
```

This will:
- Open a browser window
- Ask you to log in with your Google account
- Request permission to access Firebase on your behalf
- Click "Allow" to authorize

---

## Step 3: Initialize Firebase in Your Project

Navigate to your project folder (if not already there):

```bash
cd M:\SECodingProjects\Frontend\portfolio
```

Then initialize Firebase:

```bash
firebase init hosting
```

When prompted:
1. **"What do you want to use as your public directory?"**
   - Type: `public` (press Enter)

2. **"Configure as a single-page app (rewrite all urls to /index.html)?"**
   - Type: `Yes` (or `Y` and press Enter)

3. **"Set up automatic builds and deploys with GitHub?"**
   - Type: `No` (or `N` and press Enter) - We'll deploy manually

4. **"File public/index.html already exists. Overwrite?"**
   - Type: `No` (or `N` and press Enter) - Keep your existing file

---

## Step 4: Verify Your Firebase Project

If you haven't created a Firebase project yet:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard
4. Make sure to enable Firebase Hosting (it's usually enabled by default)

If you already have a project, make sure it's selected during `firebase init hosting`.

---

## Step 5: Deploy to Firebase

Once everything is set up, deploy your site:

```bash
firebase deploy --only hosting
```

This will:
- Upload all files from the `public` folder
- Show you a deployment URL when complete
- Your site will be live at: `https://YOUR-PROJECT-ID.web.app` or `https://YOUR-PROJECT-ID.firebaseapp.com`

---

## Step 6: View Your Live Site

After deployment, Firebase will display your hosting URLs:
- **Hosting URL**: `https://YOUR-PROJECT-ID.web.app`
- **Firebase URL**: `https://YOUR-PROJECT-ID.firebaseapp.com`

Copy and paste the URL into your browser to see your live portfolio!

---

## Future Deployments

Whenever you make changes to your portfolio:

1. Save your changes
2. Run: `firebase deploy --only hosting`
3. Your changes will be live in seconds!

---

## Additional Tips

### Custom Domain (Optional)
If you want to use your own domain:
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the instructions to connect your domain

### Preview Your Site Locally
Before deploying, you can preview your site locally:
```bash
firebase serve
```
Then open `http://localhost:5000` in your browser

---

## Troubleshooting

**Issue: "Firebase command not found"**
- Solution: Make sure Firebase CLI is installed: `npm install -g firebase-tools`

**Issue: "Permission denied"**
- Solution: Run `firebase login` again

**Issue: Files not appearing correctly**
- Solution: Make sure all assets (images, CSS, JS) are in the `public` folder
- Check that file paths in `index.html` are relative (start with `assets/` not `/assets/`)

**Issue: "Error: hosting public directory does not exist"**
- Solution: Make sure the `public` folder exists in your project root

---

## Your Portfolio is Ready!

Your portfolio is now configured and ready to deploy. The `public/index.html` file contains your complete portfolio and all assets are properly linked.

Good luck with your deployment! 🚀







