# React 커뮤니티 App Next.js 버전 개발

## 프로젝트 생성
```sh
cd workspace
npx create-next-app@latest
```

* What is your project named? community
* Would you like to use TypeScript? No / __Yes__
* Would you like to use ESLint? No / __Yes__
* Would you like to use Tailwind CSS? No / __Yes__
* Would you like to use 'src/' directory? No / __Yes__
* Would you like to use App Router? (recommended) No / __Yes__
* Would you like to customize the default import alias (@/*)? __No__ / Yes

## 개발 서버 구동
```sh
cd workspace/community
npm run dev
```

### 테스트
* http://localhost:3000 접속

## 운영 서버 구동
### 빌드
```sh
cd workspace/community
npm run build
```

### 서버 구동
```sh
npm run start
```

### 테스트
* http://localhost:3000 접속

## 샘플 복사
* sample/community/src/app 하위 파일과 폴더를 workspace/community/src/app으로 복사
* sample/community/public 하위 파일과 폴더를 workspace/community/public으로 복사

## 설정
### Tailwindcss 적용
* src/app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
