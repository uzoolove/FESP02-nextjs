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

## page 개발
### Root Layout
* src/app/layout.tsx
  ```tsx
  import './globals.css';

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      ...
    );
  }
  ```

* src/app/index.html 복사해서 return 영역 작성
  - ```<html>``` 영역 복사
  - ```<script>``` 태그 제거
  - ```<main>...</main>``` 자리를 { children } 으로 대체
  - JSX 문법에 맞춰서 수정
    + charset -> charSet
    + class -> className
    
```tsx
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>멋쟁이 사자처럼 커뮤니티 - 멋사컴</title>

        <meta name="description" content="다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에 따라 참여하고, 의견을 나누세요." />
        <meta name="keywords" content="커뮤니티, 소통, 포럼, 관심사, 온라인 모임, 커뮤니티 서비스" />
        <meta name="author" content="FESP 2기" />

        <meta property="og:title" content="멋사컴에 오신걸 환영합니다." />
        <meta property="og:description" content="유용한 정보를 나누고 공유하세요." />
        <meta property="og:image" content="/images/fesp.webp" />
        <meta property="og:url" content="https://community.fesp.shop" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="멋사컴" />
      </head>
      <body>
        <div id="root">

          <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">

            <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
              <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
                <div className="w-1/2 order-1 md:w-auto">
                  <a href="/" className="flex items-center gap-2">
                    <img className="mr-3 h-6 sm:h-9" src="/images/favicon.svg" width="40" height="40" alt="로고 이미지" />
                    <span className="text-lg font-bold">멋사컴</span>
                  </a>
                </div>
                <div className="w-auto order-2 text-base mt-4 md:mt-0">
                  <ul className="flex items-center gap-6 uppercase">
                    <li className="hover:text-amber-500 hover:font-semibold"><a href="/info">정보공유</a></li>
                    <li className="hover:text-amber-500 hover:font-semibold"><a href="/free">자유게시판</a></li>
                    <li className="hover:text-amber-500 a:font-semibold"><a href="/qna">질문게시판</a></li>
                  </ul>
                </div>

                <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">

                  <div className="flex justify-end">
                    <a href="/user/login" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</a>
                    <a href="/user/signup" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</a>
                  </div>

                  <button
                    type="button"
                    data-toggle-dark="dark"
                    className="ml-4 flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      data-toggle-icon="moon"
                      className="w-3.5 h-3.5 hidden"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                    </svg>
                    <svg
                      data-toggle-icon="sun"
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
                    </svg>
                    <span className="sr-only">Toggle dark/light mode</span>
                  </button>

                </div>
              </nav>
            </header>

            { children }
            
            <footer className="p-4 pb-12 w-full border-t border-t-slate-200  dark:border-t-slate-500 dark:bg-gray-600 text-gray-600 dark:text-white transition-color duration-500 ease-in-out">
              <div className="min-w-[320px] flex flex-wrap gap-4 justify-center items-center text-sm text-slate-400">
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">약관</a>
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">게시판 정책</a>
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">회사소개</a>
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">광고</a>
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">마이비즈니스</a>
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">제휴 제안</a>
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">이용약관</a>
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">개인정보취급방침</a>
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">청소년보호 정책</a>
                <a href="#" className="hover:font-semibold dark:hover:text-gray-200">고객센터</a>
              </div>
            </footer>

          </div>

        </div>
      </body>
    </html>

  );
}
```

### Root Page
* src/app/page.tsx
  ```tsx
  export default function RootPage() {
    return (
      ...
    );
  }
  ```

* src/app/index.html 복사해서 return 영역 작성
  - ```<main>``` 영역 복사
  - JSX 문법에 맞춰서 수정
    + class -> className

```tsx
export default function RootPage() {
  return (
    <main className="container mx-auto mt-10 p-4 transition-color">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">멋사컴에 오신 것을 환영합니다!</h1>
        <p className="text-xl mb-6">다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에 따라 참여하고, 의견을 나누세요.</p>
        <a href="/" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">커뮤니티 참여하기</a>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-center">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">정보 공유</h3>
            <p className="mb-4">다양한 정보와 지식을 공유하세요.</p>
            <a href="/info" className="text-orange-500 hover:underline">바로가기</a>
          </div>
          <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">자유 게시판</h3>
            <p className="mb-4">자유롭게 이야기를 나누세요.</p>
            <a href="/free" className="text-orange-500 hover:underline">바로가기</a>
          </div>
          <div className="bg-white p-6 rounded shadow dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-2">질문 게시판</h3>
            <p className="mb-4">궁금한 점을 질문하고 답변을 받아보세요.</p>
            <a href="/qna" className="text-orange-500 hover:underline">바로가기</a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

### 테스트
* http://localhost:3000 접속 테스트
