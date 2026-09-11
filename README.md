DigiBasera - Founder Photo + Certificate Image Update
========================================================

Ye 5 files change/add hui hain:

1. src/assets/founder-photo-new.png  (NAYI FILE)
   -> Aapki di hui founder photo.

2. src/assets/certificate-photo-new.webp  (NAYI FILE)
   -> Aapki di hui certificate image.

3. src/pages/AboutPage.tsx
   -> About page ke "Leadership & Core Team" section mein founder
      ki photo ab nayi image use karti hai.

4. src/components/IsBusinessReadySection.tsx
   -> Home page ke "Is Your Business Ready" section mein founder
      ki photo (right side laptop wali) bhi ab nayi image use karti hai.

      NOTE: Ye section originally ek "cutout" (transparent background)
      style image ke liye design kiya gaya tha (jisme sirf person
      dikhta hai, background nahi, jaise floating cutout). Aapki di
      hui photo ek normal office photo hai (background ke saath),
      isliye ye ab ek chhoti rectangular photo ki tarah dikhegi,
      floating cutout jaisi nahi. Agar aapko wahi transparent
      "cutout" wala look chahiye, to photo ka background hataake
      (transparent PNG banake) bhejna hoga, main use update kar dunga.

5. src/components/TrainingPage.tsx
   -> Training/Education page ke "Certification" section mein
      sample certificate ki image ab aapki di hui certificate
      image use karti hai.

Kaise apply karein
-------------------
1. Apne repo ko clone/pull karein.
2. Is zip ke "src" folder ko apni repo ke "src" folder ke upar paste
   kar dein (overwrite karne do jab pucha jaye).
3. Commit + push karein:
   git add .
   git commit -m "Update founder photo and certificate sample image"
   git push

Verified: npm install + npm run build successfully pass with these changes.

