# Firebase Troubleshooting Guide

## ❌ Common Issues When Form Gets Stuck

### Issue: Form stuck at "Sending..." phase

**Possible Causes:**

1. **Firestore Database Not Enabled** ⚠️
   - Go to Firebase Console → Firestore Database
   - Click "Create database" if not already created
   - Choose location: `asia-south1 (Mumbai)`
   - Select "Start in production mode"

2. **Security Rules Not Set** 🔒
   - After creating database, go to "Rules" tab
   - Replace default rules with:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /contacts/{document=**} {
         allow create: if true;
         allow read: if false;
       }
     }
   }
   ```
   - Click "Publish"

3. **Internet/Network Issue** 🌐
   - Check your internet connection
   - Try disabling VPN if using one
   - Check browser console (F12) for errors

4. **Firebase SDK Issue** 📦
   - Clear browser cache
   - Restart dev server: Ctrl+C, then `npm run dev`

---

## ✅ Quick Fix Steps

1. **Open Firebase Console**: https://console.firebase.google.com/project/my-portfolio-cvk

2. **Check Firestore Status**:
   - Left menu → Firestore Database
   - Should show "Cloud Firestore" with collections
   - If it says "Create database" → You need to create it first!

3. **Set Security Rules**:
   - In Firestore → Rules tab
   - Paste the rules shown above
   - Publish the rules

4. **Test Again**:
   - Open browser console (F12)
   - Go to contact page
   - Submit form
   - Check console for specific error messages
   - Should now either succeed or show specific error

---

## 🐛 Debugging

Open browser console (F12) and look for:
- `Permission denied` → Rules not set correctly
- `Firestore is not enabled` → Need to create database
- `Request timeout` → Network/connection issue
- Any other error will now display in the error message

---

## 📧 Fallback

If issues persist, users can contact you directly at:
**chethanvkotian@gmail.com**
