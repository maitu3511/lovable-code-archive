Netlify Build Fix — What's in this zip
=======================================

Problem: Netlify build "Installing dependencies" step pe hi ruk/crash ho
raha tha, aur logs kuch bhi clear error nahi dikha rahe the.

Root cause: Ye project Vite 8 use karta hai, jisko Node.js 20.19+ ya
22.12+ chahiye. Netlify default (older) Node version use kar raha tha,
isliye install/build silently fail ho raha tha.

Fix: 2 nayi files add ki hain jo Node version ko pin karti hain (root
folder mein):

1. netlify.toml
   [build.environment]
     NODE_VERSION = "22"

2. .nvmrc
   22

Kaise apply karein
-------------------
1. In dono files ("netlify.toml" aur ".nvmrc") ko apni repo ke ROOT
   folder mein paste karein (root mein, "src" ke andar nahi).
2. Commit + push karein:
     git add .
     git commit -m "Fix Netlify build: pin Node.js version to 22"
     git push
3. Netlify par naya deploy trigger karein (ya auto-trigger ho jayega
   push ke baad) — build ab clean pass ho jana chahiye.

Verified locally: `npm install` + `npx vite build` Node v22.22.2 ke sath
successfully pass hue hain.
