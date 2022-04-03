# Project Stack

- React
- Next.js
- Typescript
- Material UI
- koa
- firebase

# Versions

- node.js : v16.14.2
- react : v18.0.0
- next.js : v.12.1.4
- MUI : v5.5.3
- MUI icons : v5.5.1
- koa : v2.13.4
- firebase : v9.6.10

# Add Settings

- `/src/pages/_documents.tsx`
- `/src/pages/_error.tsx`
- `/src/pages/404.tsx`
- `/src/server/index.ts`
- `/src/shared/firebase.ts`
- Directory paths
  - `/components`
  - `/pages`
  - `/utils`
  - `/services`
  - `/styles`
  - `/types`
  - `/server`
  - `/shared`
  - `/constants/secret`

# Getting Started

- `/src/constants/secret` 경로에 `firebaseConfig.ts` 파일 생성 후 firebase 연결에 필요한 API Key를 설정한다.
- example)
```
export const firebaseConfigProd = {
  apiKey: "",
  authDomain: "unknown-project.firebaseapp.com",
  projectId: "unknown-project",
  storageBucket: "unknown-project.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}
```


- `npm run dev` or `yarn dev`, Open http://localhost:3000 with your browser to see the result.

- `npm run server:dev` or `yarn server:dev`, Open [http://localhost:3001](http://localhost:3001) with your browser to see the web server result.