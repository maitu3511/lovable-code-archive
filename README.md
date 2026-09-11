DigiBasera - Hero Background Video Fix
========================================

Sirf 2 files change hue hain (poori repo nahi):

1. src/components/HeroBackgroundVideo.tsx
   -> Yahi component Home page aur About page dono ke hero section
      ka background video render karta hai, isliye issi ek file ko
      fix karne se dono jagah theek ho jayega.

   Kya bug tha:
   a) Component "Save-Data" connection check ki wajah se bohot saare
      mobile users (jinke Chrome mein Data Saver / Lite mode on hota
      hai — India mein bahut common hai) ke liye video ko completely
      disable kar deta tha, sirf poster image dikhta tha. Ye check
      hata diya hai, ab sirf accessibility "reduce motion" setting
      respect hoti hai.
   b) Video ka "muted" sirf React/HTML attribute se set ho raha tha.
      SSR (server-side rendered) app mein hydration se pehle browser
      autoplay ko block kar sakta hai kyunki us time tak video
      "muted" property JS mein set nahi hoti. Ab ye imperatively
      (ref ke through) set kiya ja raha hai, jisse autoplay reliably
      chalu ho.
   c) Video element ko explicit z-index (z-[1]) diya hai taaki wo
      hamesha fallback poster image ke upar hi render ho.

2. netlify.toml
   -> Static assets (videos/images/fonts) ke liye explicit pass-through
      redirect rules add ki hain, jo catch-all SPA fallback
      ("/*" -> "/index.html") se PEHLE aati hain. Pehle sirf ek hi
      blanket "/*" redirect tha jo kuch hosting setups (jaise Cloudflare
      Workers/nitro build) par video/image files ko bhi index.html
      par redirect kar sakta tha, jisse video load hi nahi hota tha.

Kaise apply karein
-------------------
1. Apne repo ko clone/pull karein.
2. Is zip ke "src" folder ko apni repo ke "src" folder ke upar paste
   kar dein (overwrite karne do jab pucha jaye), aur "netlify.toml"
   ko bhi apni repo ke root mein overwrite kar dein.
3. Commit + push karein:
   git add .
   git commit -m "Fix hero background video not showing on Home/About pages"
   git push

Verified: npm install + npm run build (npx vite build) successfully
pass with these changes.

