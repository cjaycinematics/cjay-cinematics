# Background Music Setup

## 📁 Where to Add Music Files

**Upload your MP3 files to:**
```
/app/frontend/public/music/
```

**Default file name:** `background-music.mp3`

---

## 🎛️ How to Control Music (Admin Panel)

Once you deploy and enable the admin panel:

### **Go to:** `yoursite.com/admin`

### **Find:** Site Settings → Background Music Settings

### **You'll see these controls:**

```
┌──────────────────────────────────────┐
│ Background Music Settings            │
├──────────────────────────────────────┤
│                                      │
│ Enable Background Music              │
│ [ ] OFF  (Toggle to turn ON)        │
│                                      │
│ Autoplay                             │
│ [ ] OFF  (Start music automatically) │
│                                      │
│ Volume                               │
│ [===|-----] 0.3 (30%)               │
│                                      │
│ Loop Music                           │
│ [✓] ON  (Repeat continuously)        │
│                                      │
│ Music File Path                      │
│ [/music/background-music.mp3]       │
│                                      │
│ Show Player Controls                 │
│ [✓] ON  (Let visitors control)      │
│                                      │
│ Fade In Effect                       │
│ [✓] ON  (Gradual volume increase)   │
│                                      │
│ [Save]                               │
└──────────────────────────────────────┘
```

---

## 🎵 How to Add Your Music

### **Step 1: Prepare Your Music File**
- Save as MP3 format
- Recommended: Keep file under 5MB for fast loading
- Name it: `background-music.mp3`

### **Step 2: Upload to Site**

**Option A - Via File System:**
1. Place file in `/app/frontend/public/music/background-music.mp3`
2. Rebuild and redeploy

**Option B - Via Admin Panel (After Deployment):**
1. Go to admin panel
2. Upload file to `/public/music/` folder
3. Update "Music File Path" to match your filename

### **Step 3: Enable in Admin**
1. Go to admin panel
2. Site Settings → Background Music Settings
3. Toggle "Enable Background Music" to **ON**
4. Adjust other settings as needed
5. Click **Save**
6. Refresh your website → Music starts! 🎉

---

## 🎹 What Visitors Will See

When music is enabled, visitors see a **floating music player** in the bottom-right:

```
┌────────────────────┐
│ ▶️  🔊  ━━━━━  🎵 │
└────────────────────┘
```

**Controls:**
- ▶️ Play/Pause button
- 🔊 Mute/Unmute button  
- ━━━━━ Volume slider
- 🎵 Music indicator

**It's elegant, non-intrusive, and visitors can control it!**

---

## ⚙️ Music Settings Explained

### **Enable Background Music**
- **OFF** (default): No music plays, player doesn't show
- **ON**: Music is available and player appears

### **Autoplay**
- **OFF** (recommended): Visitors must click play
- **ON**: Music starts automatically when page loads

### **Volume**
- Range: 0.0 (silent) to 1.0 (full volume)
- Default: 0.3 (30%)
- Recommended: 0.2-0.4 for subtle background

### **Loop Music**
- **ON**: Music repeats continuously
- **OFF**: Music stops after playing once

### **Music File Path**
- Default: `/music/background-music.mp3`
- Change if you use a different filename
- Examples:
  - `/music/piano-ambient.mp3`
  - `/music/calm-strings.mp3`

### **Show Player Controls**
- **ON** (recommended): Visitors can control music
- **OFF**: Music plays with no controls (not recommended)

### **Fade In Effect**
- **ON**: Volume gradually increases over 2 seconds
- **OFF**: Starts at full volume immediately

---

## 🎼 Recommended Music Types

For a professional memorial/cinematic site:

✅ **Good Choices:**
- Soft piano instrumentals
- Ambient string compositions
- Gentle acoustic guitar
- Classical pieces (peaceful)
- Nature sounds + light music

❌ **Avoid:**
- Songs with lyrics (distracting)
- Loud or upbeat music
- Anything too attention-grabbing

**Goal:** Subtle, elegant background that enhances the mood without overwhelming.

---

## 💡 Pro Tips

1. **Keep it subtle** - Set volume to 0.2-0.3
2. **Don't autoplay** - Let visitors choose to turn it on
3. **Use royalty-free music** - Avoid copyright issues
4. **Test on mobile** - Make sure it works everywhere
5. **Keep file small** - Under 5MB for fast loading

---

## 📦 Free Music Resources

**Royalty-free music sites:**
- Incompetech.com (free with attribution)
- Bensound.com (free with attribution)
- YouTube Audio Library (totally free)
- FreeMusicArchive.org
- Pixabay Music

---

## 🔧 Troubleshooting

**Music not playing?**
- Check "Enable Background Music" is ON in admin
- Verify file path is correct
- Make sure file exists in `/public/music/`
- Check browser console for errors

**Music too loud/quiet?**
- Adjust volume slider in admin settings
- Visitors can also adjust with player controls

**Autoplay not working?**
- Browsers often block autoplay
- Recommend keeping autoplay OFF
- Let visitors click play button

---

**Music is ready to go!** Just turn it ON in the admin panel when you want to use it! 🎵✨
