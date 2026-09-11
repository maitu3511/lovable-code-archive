DigiBasera Logo Fix — What's in this zip
=========================================

Sirf 2 files change hue hain (poori repo nahi):

1. src/assets/digibasera-logo-full.png
   -> Aapka naya official logo (transparent background, optimized for web).

2. src/components/DigiBaseraLogo.tsx
   -> Ab ye component seedha naya full logo image render karta hai
   (monogram + "Digi Basera" text + tagline sab ek hi image mein
   baked-in hain), isliye Header aur Footer dono jagah automatically
   naya logo aa jayega — kyunki dono jagah yahi component use hota hai.

Kaise apply karein
-------------------

1. Apne repo ko clone/pull karein.
2. Is zip ke "src" folder ko apni repo ke "src" folder ke upar paste kar dein
   (overwrite karne do jab pucha jaye).
3. Purani file "src/assets/digibasera-monogram.png" ab use nahi ho rahi,
   use delete kar sakte hain (optional, code error nahi dega agar rehne bhi de).
4. Commit + push karein:
   git add .
   git commit -m "Update DigiBasera logo in header and footer"
   git push

Verified: `npm install` + `npx vite build` successfully pass with these changes.
