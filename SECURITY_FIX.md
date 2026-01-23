# 🔐 Fix Exposed Firebase Credentials

## ⚠️ CRITICAL: Your Firebase API key was exposed in Git history

Even though we moved credentials to environment variables, the old commit (f34e03a0) still contains the hardcoded keys in Git history.

---

## 🔒 RECOMMENDED SOLUTION: Rotate Firebase Keys

### **Step 1: Restrict Current API Key**

1. Go to **Google Cloud Console**: https://console.cloud.google.com/
2. Select project: **my-portfolio-cvk**
3. Go to **APIs & Services** → **Credentials**
4. Find your **API Key** (starts with AIzaSy...)
5. Click **Edit**
6. Add **Application restrictions**:
   - Choose **HTTP referrers (web sites)**
   - Add your domains:
     ```
     https://my-portfolio-*.vercel.app/*
     https://*.vercel.app/*
     https://yourdomain.com/*
     localhost:3000/*
     localhost:3001/*
     ```
7. Click **Save**

**Note:** This restricts the key to only work from your domains, making it safer even if exposed.

---

### **Step 2: (Optional) Create New Firebase Web App**

If you want completely fresh credentials:

1. **Firebase Console** → Your Project
2. **Project Settings** (⚙️) → **General**
3. Scroll to **Your apps**
4. Click **Add app** → **Web** `</>`
5. Register new app with a different name
6. Copy the NEW credentials
7. Update `.env.local` with new values
8. Update **Vercel Environment Variables**
9. **Delete the OLD web app** from Firebase

---

## 🧹 ADVANCED: Clean Git History (Use with Caution!)

⚠️ **Warning:** This rewrites Git history. Only do this if you understand the consequences.

### **Using BFG Repo-Cleaner:**

1. **Install BFG** (easier than git-filter-branch)
   - Download from: https://rtyley.github.io/bfg-repo-cleaner/
   - Or use: `choco install bfg-repo-cleaner` (Windows)

2. **Create a backup** of your repo first!
   ```bash
   cd ..
   cp -r "MY PORTFOLIO" "MY PORTFOLIO BACKUP"
   ```

3. **Create a file with secrets to remove:**
   ```bash
   # Create passwords.txt with your exposed secrets
   echo "AIzaSyB0_nLfK96nIMpIXnG3asjxTTXhVsGTaYU" > passwords.txt
   echo "459701648063" >> passwords.txt
   echo "1:459701648063:web:6d7df6ca326ef087e4e40a" >> passwords.txt
   ```

4. **Run BFG to clean history:**
   ```bash
   cd "MY PORTFOLIO"
   bfg --replace-text passwords.txt
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   ```

5. **Force push to GitHub:**
   ```bash
   git push origin main --force
   ```

6. **Important:** Tell Vercel to re-deploy from the cleaned history

---

## ✅ SIMPLE SOLUTION: Just Restrict the API Key

**If you don't want to deal with Git history cleaning:**

1. **Restrict your Firebase API key** (Step 1 above)
2. **Monitor Firebase usage** for suspicious activity
3. **Accept GitHub's alert** and document that key is restricted
4. Future commits will be clean (we already fixed that!)

Firebase API keys are designed to be somewhat public (they're in client-side code), but should be restricted by:
- HTTP referrers
- Application restrictions
- Firestore security rules (already done!)

---

## 📊 What to Monitor:

1. **Firebase Console** → **Usage**
   - Watch for unusual spikes in reads/writes
   - Check for unexpected authentication

2. **GitHub Security Alerts**
   - Check: https://github.com/chethankotian2005/My-Portfolio/security

3. **Firestore Security Rules**
   - Ensure rules only allow contact form creation
   - Already configured correctly ✅

---

## 🎯 Recommended Action Plan:

**Immediate (Next 10 minutes):**
1. ✅ Restrict Firebase API key to your domains
2. ✅ Verify Firestore rules are strict
3. ✅ Check Firebase usage for anomalies

**Soon (Today):**
4. ✅ Consider creating new Firebase web app with fresh keys
5. ✅ Update environment variables everywhere

**Optional (If paranoid):**
6. Clean Git history with BFG
7. Rotate all credentials

---

## 🔐 Best Practices Going Forward:

✅ **Never commit:**
- API keys
- Passwords
- Private keys
- OAuth secrets
- Database credentials

✅ **Always use:**
- Environment variables (.env.local)
- .gitignore for sensitive files
- Key restrictions in cloud platforms
- Proper security rules

✅ **Good to have:**
- Secret scanning enabled (GitHub has this)
- Pre-commit hooks to catch secrets
- Regular security audits

---

## 📞 Need Help?

If you see suspicious activity in Firebase:
1. **Immediately disable the API key** in Google Cloud Console
2. Create new credentials
3. Update everywhere (local, Vercel, etc.)

---

**Bottom Line:**
Your Firebase API key is somewhat safe because:
1. It's client-side by design (meant to be in browsers)
2. Protected by Firestore security rules
3. Only allows contact form submissions

**But you should still restrict it to your domains for extra safety!**
