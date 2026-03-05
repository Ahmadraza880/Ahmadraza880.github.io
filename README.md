# Ahmad Raza — AI & ML Engineer Portfolio

## 📁 Folder Structure (same as Nasir's)


<p><span class="t-key">target</span> = <span class="t-str">"KAUST MS 2027"</span></p>

```
ahmad_portfolio/
├── index.html          ← Main file (open this in browser)
├── style.css           ← All styles
├── script.js           ← Animations, typed effect, interactions
├── images/             ← PUT ALL YOUR PHOTOS HERE
│   ├── profile.jpg           ← Your main photo (about section)
│   ├── project-physiotherapy.jpg
│   ├── project-leadgen.jpg
│   ├── project-betting.jpg
│   ├── project-pbs.jpg
│   ├── project-chatbot.jpg
│   ├── project-crowd.jpg
│   ├── project-gold.jpg
│   ├── project-ocr.jpg
│   └── project-aqi.jpg
└── resume/
    └── Ahmad_Raza_CV.pdf     ← PUT YOUR CV HERE
```

---

## ✏️ Things You MUST Change Before Sharing

Open `index.html` and find these lines:

1. **Your email** (search: `your.email@gmail.com`) — replace 2 times
2. **Your phone** (search: `+92 XXX XXXXXXX`) — replace
3. **Your GitHub URL** (search: `github.com/yourusername`) — replace
4. **Your LinkedIn URL** (search: `linkedin.com/in/yourusername`) — replace

---

## 🖼️ How to Add Your Photos

### Profile Photo
- Put your photo in the `images/` folder
- Name it exactly: `profile.jpg`
- Best size: 400×530px (portrait)

### Project Images
- Put project screenshots in `images/` folder
- Name them exactly as listed above
- If you don't have a screenshot yet, the site shows a nice icon placeholder automatically

### Tips for good project images
- Take a screenshot of your code/output
- Or use a relevant stock photo from unsplash.com (free)
- Resize to 600×400px for best look

---

## 🚀 How to Put it Online (Free — 5 Minutes)

### GitHub Pages (Recommended)
1. Create a free account at github.com
2. Create a new repository named: `yourusername.github.io`
3. Upload all files (index.html, style.css, script.js, images/, resume/)
4. Go to Settings → Pages → Source: main branch
5. Your site is live at: `https://yourusername.github.io`

### Alternative: Netlify (Even Easier)
1. Go to netlify.com
2. Drag and drop the entire `ahmad_portfolio` folder
3. Done — get a live URL instantly

---

## 📧 Making the Contact Form Work

Currently the form shows a success message but doesn't actually send emails.
To make it send real emails, sign up at **formspree.io** (free):
1. Go to formspree.io and create an account
2. Create a new form — get your form ID
3. In index.html, change:
   ```html
   <form id="contactForm" onsubmit="handleSubmit(event)">
   ```
   to:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the `onsubmit` attribute

---

Built by Ahmad Raza | AI & ML Engineer | KAUST Target 2027
