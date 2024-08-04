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
npm start
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
        <meta property="og:url" content="https://next.fesp.shop" />
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

### 게시물 목록 조회 페이지
* src/app/[type]/page.tsx 작성
  ```tsx
  export default function Page() {
    return (
      ...
    );
  }
  ```

* src/app/[type]/index.html 복사해서 return 영역 작성
  - ```<main>``` 영역 복사
  - JSX 문법에 맞춰서 수정
    + class -> className

```tsx
export default function Page() {
  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">정보 공유</h2>
      </div>
      <div className="flex justify-end mr-4">
        
        <form action="#">
          <input
            className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
            type="text"
            name="keyword"
          />
          <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">검색</button>
        </form>

        <a href="/info/new" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">글작성</a>
      </div>
      <section className="pt-10">
        <table className="border-collapse w-full table-fixed">
          <colgroup>
            <col className="w-[10%] sm:w-[10%]" />
            <col className="w-[60%] sm:w-[30%]" />
            <col className="w-[30%] sm:w-[15%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[25%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-solid border-gray-600">
              <th className="p-2 whitespace-nowrap font-semibold">번호</th>
              <th className="p-2 whitespace-nowrap font-semibold">제목</th>
              <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">조회수</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">댓글수</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">작성일</th>
            </tr>
          </thead>
          <tbody>

            <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
              <td className="p-2 text-center">2</td>
              <td className="p-2 truncate indent-4"><a href="/info/2" className="cursor-pointer">안녕하세요.</a></td>
              <td className="p-2 text-center truncate">용쌤</td>
              <td className="p-2 text-center hidden sm:table-cell">29</td>
              <td className="p-2 text-center hidden sm:table-cell">2</td>
              <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.05 13:39:23</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
              <td className="p-2 text-center">1</td>
              <td className="p-2 truncate indent-4"><a href="/info/1" className="cursor-pointer">좋은 소식이 있습니다.</a></td>
              <td className="p-2 text-center truncate">제이지</td>
              <td className="p-2 text-center hidden sm:table-cell">22</td>
              <td className="p-2 text-center hidden sm:table-cell">5</td>
              <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.03 17:59:13</td>
            </tr>
          </tbody>
        </table>
        <hr />

        <div>
          <ul className="flex justify-center gap-3 m-4">
            <li className="font-bold text-blue-700">
              <a href="/info?page=1">1</a>
            </li>
            <li>
              <a href="/info?page=2">2</a>
            </li>
          </ul>
        </div>

      </section>
    </main>
  );
}
```

### 게시물 상세 조회 페이지
* src/app/[type]/[id]/page.tsx 작성
  ```tsx
  export default function Page() {
    return (
      ...
    );
  }
  ```

* src/app/[type]/[id]/index.html 복사해서 return 영역 작성
  - ```<main>``` 영역 복사
  - JSX 문법에 맞춰서 수정
    + class -> className
    + rows, cols -> number 타입에 맟춰서 작성

```tsx
export default function Page() {
  return (
    <main className="container mx-auto mt-4 px-4">

      <section className="mb-8 p-4">
        <form action="/info">
        <div className="font-semibold text-xl">제목 : 좋은 소식이 있습니다.</div>
          <div className="text-right text-gray-400">작성자 : 제이지</div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">좋은 소식을 가지고 왔습니다.<br />오늘 드디어 최종 면접을 합니다.<br />많이 응원해 주세요^^</pre>
            </div>
            <hr/>
          </div>
          <div className="flex justify-end my-4">
            <a href="/info" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">목록</a>
            <a href="/info/1/edit" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</a>
            <button type="submit" className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
          </div>
        </form>
      </section>

      <section className="mb-8">
        <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

        <div className="shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <img
              className="w-8 mr-2 rounded-full"
              src="https://api.fesp.shop/files/00-sample/user-apeach.webp"
              alt="어피치 프로필 이미지"
            />
            <a href="" className="text-orange-400">어피치</a>
            <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">2024.07.02 14:11:22</time>
          </div>
          <div className="flex justify-between items-center mb-2">
            <form action="#">
              <pre className="whitespace-pre-wrap text-sm">화이팅!</pre>
              <button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
            </form>
          </div>
        </div>

        <div className="shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <img
              className="w-8 mr-2 rounded-full"
              src="https://api.fesp.shop/files/00-sample/user-muzi.webp"
              alt="무지 프로필 이미지"
            />
            <a href="" className="text-orange-400">무지</a>
            <time className="ml-auto text-gray-500" dateTime="2024.07.07 12:34:56">2024.07.07 12:34:56</time>
          </div>
          <div className="flex justify-between items-center mb-2">
            <form action="#">
              <pre className="whitespace-pre-wrap text-sm">축하해요~~~</pre>
              <button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
            </form>
          </div>  
        </div>

        <div className="p-4 border border-gray-200 rounded-lg">
          <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
          <form action="#">
            <div className="mb-4">
              <textarea
                rows={3}
                cols={40}
                className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="내용을 입력하세요."
                name="comment"></textarea>
    
              <p className="ml-2 mt-1 text-sm text-red-500">
                내용은 필수입니다.
              </p>
              
            </div>
            <button type="submit" className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
          </form>
        </div>

      </section>
    </main>
  );
}
```

### 게시물 등록 페이지
* src/app/[type]/new/page.tsx 작성
  ```tsx
  export default function Page() {
    return (
      ...
    );
  }
  ```

* src/app/[type]/new/index.html 복사해서 return 영역 작성
  - ```<main>``` 영역 복사
  - JSX 문법에 맞춰서 수정
    + class -> className
    + for -> htmlFor
    + rows, cols -> number 타입에 맟춰서 작성

```tsx
export default function Page() {
  return (
    <main className="min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">게시글 등록</h2>
      </div>
      <section className="mb-8 p-4">
        <form action="/info/1">
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요." 
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              name="title"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">제목은 필수입니다.</p>
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">내용</label>
            <textarea 
              id="content"
              rows={15} 
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="content"
            ></textarea>
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">내용은 필수입니다.</p>
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">등록</button>
            <a href="/info" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</a>
          </div>
        </form>
      </section>
    </main>
  );
}
```

### 게시물 수정 페이지
* src/app/[type]/[id]/edit/page.tsx 작성
  ```tsx
  export default function Page() {
    return (
      ...
    );
  }
  ```

* src/app/[type]/[id]/edit/index.html 복사해서 return 영역 작성
  - ```<main>``` 영역 복사
  - JSX 문법에 맞춰서 수정
    + class -> className
    + for -> htmlFor
    + rows, cols -> number 타입에 맟춰서 작성
    + value -> defaultValue
    + ```<textarea>...</textarea>``` -> ```<textarea defaultValue={`...`}></textarea>```

```tsx
export default function Page() {
  return (
    <main className="min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">게시글 수정</h2>
      </div>
      <section className="mb-8 p-4">
        <form action="/info/1">
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요." 
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              name="title"
              defaultValue="좋은 소식이 있습니다."
            />

            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">제목은 필수 입니다.</p>
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">내용</label>
            <textarea 
              id="content"
              rows={15} 
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="content"
              defaultValue={`좋은 소식을 가지고 왔습니다.
오늘 드디어 최종 면접을 합니다.
많이 응원해 주세요^^`}
            ></textarea>

            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">내용은 필수입니다.</p>
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</button>
            <a href="/info/1" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</a>
          </div>
        </form>
      </section>
    </main>
  );
}
```

### 회원가입 페이지
* src/app/user/signup/page.tsx 작성
  ```tsx
  export default function Page() {
    return (
      ...
    );
  }
  ```

* src/app/user/signup/index.html 복사해서 return 영역 작성
  - ```<main>``` 영역 복사
  - JSX 문법에 맞춰서 수정
    + class -> className
    + for -> htmlFor

```tsx
export default function Page() {
  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">회원 가입</h2>
        </div>

        <form action="/">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="name"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">이름은 필수입니다.</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="email"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">이메일은 필수입니다.</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="password"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">비밀번호는 필수입니다.</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="attach">프로필 이미지</label>
            <input
              type="file"
              id="attach"
              accept="image/*"
              placeholder="이미지를 선택하세요"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              name="attach"
            />
          </div>

          <div className="mt-10 flex justify-center items-center">
            <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</button>
            <a href="/" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</a>
          </div>
        </form>
      </div>
    </main>
  );
}
```

### 로그인 페이지
* src/app/user/login/page.tsx 작성
  ```tsx
  export default function Page() {
    return (
      ...
    );
  }
  ```

* src/app/login/index.html 복사해서 return 영역 작성
  - ```<main>``` 영역 복사
  - JSX 문법에 맞춰서 수정
    + class -> className
    + for -> htmlFor

```tsx
export default function Page() {
  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">로그인</h2>
        </div>

        <form action="/">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="email"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">이메일은 필수입니다.</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="password"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">비밀번호는 필수입니다.</p>
            <a href="#" className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline">비밀번호를 잊으셨나요?</a>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</button>
            <a href="/user/signup" className="ml-8 text-gray-800 hover:underline">회원가입</a>
          </div>
        </form>
      </div>
    </main>
  );
}
```

### 테스트
* http://localhost:3000 접속 테스트

## ```<a>``` 태그 ```<Link>```로 수정
### Root Layout 
* app/layout.tsx
  ```tsx
  import Link from 'next/link';
  ...
  <Link href="/" className="flex items-center gap-2">
    <img className="mr-3 h-6 sm:h-9" src="/images/favicon.svg" width="40" height="40" alt="로고 이미지" />
    <span className="text-lg font-bold">멋사컴</span>
  </Link>
  ...
  <li className="hover:text-amber-500 hover:font-semibold"><Link href="/info">정보공유</Link></li>
  <li className="hover:text-amber-500 hover:font-semibold"><Link href="/free">자유게시판</Link></li>
  <li className="hover:text-amber-500 a:font-semibold"><Link href="/qna">질문게시판</Link></li>
  ...
  <div className="flex justify-end">
    <Link href="/user/login" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</Link>
    <Link href="/user/signup" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</Link>
  </div>
  ...
  ```

### Root Page
* app/page.tsx
  ```tsx
  import Link from 'next/link';
  ...
  <Link href="/" className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">커뮤니티 참여하기</Link>
  ...
  <Link href="/info" className="text-orange-500 hover:underline">바로가기</Link>
  ...
  <Link href="/free" className="text-orange-500 hover:underline">바로가기</Link>
  ...
  <Link href="/qna" className="text-orange-500 hover:underline">바로가기</Link>
  ...
  ```

### 게시물 목록 조회 페이지
* app/[type]/page.tsx
  ```tsx
  import Link from 'next/link';
  export default function Page({ params }: { params: { type: string } }) {
    return (
      ...
      <Link href={`/${params.type}/new`} className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">글작성</Link>
      ...
      <td className="p-2 truncate indent-4"><Link href={`/${params.type}/2`} className="cursor-pointer">안녕하세요.</Link></td>
      ...
      <td className="p-2 truncate indent-4"><Link href={`/${params.type}/1`} className="cursor-pointer">좋은 소식이 있습니다.</Link></td>
      ...
      <Link href={`/${params.type}?page=1`}>1</Link>
      ...
      <Link href={`/${params.type}?page=2`}>2</Link>
      ...
    );
  }
  ```

### 게시물 상세 조회 페이지
* app/[type]/[id]/page.tsx
  ```tsx
  import Link from "next/link";
  export default function Page({ params }: { params: { type: string, id: string } }) {
    return (
      ...
      <form action={`/${params.type}`}>
      ...
      ...
      <Link href={`/${params.type}`} className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">목록</Link>
      <Link href={`/${params.type}/${params.id}/edit`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</Link>
      ...
      <Link href="" className="text-orange-400">어피치</Link>
      ...
      <Link href="" className="text-orange-400">무지</Link>
      ...
    );
  }
  ```

### 게시물 등록 페이지
* app/[type]/new/page.tsx
  ```tsx
  import Link from "next/link";
  export default function Page({ params }: { params: { type: string } }) {
    return (
      ...
      <form action={`/${params.type}/1`}>
      ...
      <Link href={`/${params.type}`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</Link>
      ...
    );
  }
  ```

### 게시물 수정 페이지
* app/[type]/[id]/edit/page.tsx
  ```tsx
  import Link from "next/link";
  export default function Page({ params }: { params: { type: string, id: string } }) {
    return (
      ...
      <form action={`/${params.type}/${params.id}`}>
      ...
      <Link href={`/${params.type}/${params.id}`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</Link>
      ...
    );
  }
  ```

### 회원가입 페이지
* app/user/signup/page.tsx
  ```tsx
  import Link from "next/link";
  ...
  <Link href="/" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</Link>
  ...
  ```

### 로그인 페이지
* app/user/login/page.tsx
  ```tsx
  import Link from "next/link";
  ...
  <Link href="#" className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline">비밀번호를 잊으셨나요?</Link>
  ...
  <Link href="/user/signup" className="ml-8 text-gray-800 hover:underline">회원가입</Link>
  ...
  ```

## page에 메타데이터 추가
### Root Layout
* app/layout.tsx 수정

  ```tsx
  export const metadata: Metadata = {
    // url 관련 metadata 설정시 사용될 기본 경로 지정
    metadataBase: new URL('https://next.fesp.shop'),
  };
  ```

### 게시물 목록 조회 페이지
* src/app/[type]/index.html 참고해서 src/app/[type]/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";

  export function generateMetadata({ params }: { params: { type: string } }): Metadata{
    const boardName = params.type;
    return {
      title: `${boardName} - 멋사컴`,
      description: `${boardName} 게시판입니다.`,
      openGraph: {
        title: `${boardName} - 멋사컴`,
        description: `${boardName} 게시판입니다.`,
        url: `/${params.type}`,
        images: {
          url: '/images/fesp.webp'
        }
      }
    };
  }
  ...
  ```

### 게시물 상세 조회 페이지
* src/app/[type]/[id]/index.html 참고해서 src/app/[type]/[id]/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export function generateMetadata({ params }: { params: { type: string, id: string } }): Metadata {
    const boardName = params.type;
    return {
      title: `${boardName} - 좋은 소식이 있습니다.`,
      description: `${boardName} - 좋은 소식을 가지고 왔습니다. 오늘 드디어...`,
      openGraph: {
        title: `${boardName} - 좋은 소식이 있습니다.`,
        description: `${boardName} - 좋은 소식을 가지고 왔습니다. 오늘 드디어...`,
        url: `/${params.type}/${params.id}`
      }
    };
  }
  ...
  ```

### 게시물 등록 페이지
* src/app/[type]/new/index.html 참고해서 src/app/[type]/new/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export function generateMetadata({ params }: { params: { type: string } }): Metadata {
    const boardName = params.type;
    return {
      title: `${boardName} - 게시글 등록`,
      description: `${boardName} - 게시글을 등록하세요.`,
      openGraph: {
        title: `${boardName} - 게시글 등록`,
        description: `${boardName} - 게시글을 등록하세요.`,
        url: `/${params.type}/new`
      }
    };
  }
  ...
  ```

### 게시물 수정 페이지
* src/app/[type]/[id]/edit/index.html 참고해서 src/app/[type]/[id]/edit/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export function generateMetadata({ params }: { params: { type: string, id: string } }): Metadata {
    const boardName = params.type;
    return {
      title: `${boardName} - 게시글 수정`,
      description: `${boardName} - 게시글을 수정하세요.`,
      openGraph: {
        title: `${boardName} - 게시글 수정`,
        description: `${boardName} - 게시글을 수정하세요.`,
        url: `/${params.type}/${params.id}/edit`
      }
    };
  }
  ...
  ```

### 회원가입 페이지
* src/app/user/signup/index.html 참고해서 src/app/user/signup/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export const metadata: Metadata = {
    title: '회원 가입 - 멋사컴',
    openGraph: {
      title: '회원 가입 - 멋사컴',
      description: '무료 회원 가입후 멋사컴의 모든 서비스를 이용하세요.',
      url: '/user/signup'
    }
  }
  ...
  ```

### 로그인 페이지
* src/app/user/login/index.html 참고해서 src/app/user/login/page.tsx에 추가
  ```tsx
  import { Metadata } from "next";
  export const metadata: Metadata = {
    title: '로그인 - 멋사컴',
    openGraph: {
      title: '로그인 - 멋사컴',
      description: '로그인 페이지',
      url: '/user/login'
    }
  }
  ...
  ```

## 파일 정리
* app 하위의 모든 index.html 삭제

## 컴포넌트 분리
### 전체 구조
```
src/
├── app/
│   ├── (community)/
│   │   ├── (user)/
│   │   │   │── login/
│   │   │   │   └── page.tsx
│   │   │   └── signup/
│   │   │       └── page.tsx
│   │   └── [type]/
│   │       │── [id]/
│   │       │   │── edit/
│   │       │   │   └── page.tsx
│   │       │   ├── CommentItem.tsx
│   │       │   ├── CommentList.tsx
│   │       │   ├── CommentNew.tsx
│   │       │   └── page.tsx
│   │       ├── new/
│   │       │   └── page.tsx
│   │       ├── ListItem.tsx
│   │       └── page.tsx
│   │── error.tsx
│   │── layout.tsx
│   │── loading.tsx
│   │── not-found.tsx
│   └── page.tsx
│
└── components/
    ├── layout/
    │   ├── Footer.tsx
    │   └── Header.tsx
    ├── Button.tsx
    ├── Pagination.tsx
    ├── Search.tsx
    ├── Spinner.tsx
    ├── Submit.tsx
    └── Theme.tsx
```

### 루트 레이아웃 분리
#### app/layout.tsx 파일에서 header, footer 분리
* components/layout/Header.tsx
```tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
        <div className="w-1/2 order-1 md:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <img className="mr-3 h-6 sm:h-9" src="/images/favicon.svg" width="40" height="40" alt="로고 이미지" />
            <span className="text-lg font-bold">멋사컴</span>
          </Link>
        </div>
        <div className="w-auto order-2 text-base mt-4 md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            <li className="hover:text-amber-500 hover:font-semibold"><Link href="/info">정보공유</Link></li>
            <li className="hover:text-amber-500 hover:font-semibold"><Link href="/free">자유게시판</Link></li>
            <li className="hover:text-amber-500 a:font-semibold"><Link href="/qna">질문게시판</Link></li>
          </ul>
        </div>

        <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">

          <div className="flex justify-end">
            <Link href="/login" className="bg-orange-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</Link>
            <Link href="/signup" className="bg-gray-900 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</Link>
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
  );
}
```

* components/layout/Footer.tsx
```tsx
export default function Footer() {
  return (
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
  );
}
```

* app/layout.tsx
```tsx
import './globals.css';

import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  // url 관련 설정시 metadata 사용될 기본 경로 지정
  metadataBase: new URL('https://next.fesp.shop'),
};

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
            <Header />
            { children }            
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
```

### 공통 컴포넌트 작성
#### Button
* components/Button.tsx
```tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  bgColor?: 'gray' | 'orange' | 'red',
  size?: 'sm' | 'md' | 'lg',
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', bgColor = 'orange', size = 'md', ...rest }) => {
  let btnColor = {
    gray: `bg-gray-900`,
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };
  let btnSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-1 px-4 text-base',
    lg: 'py-2 px-6 text-lg',
  };

  return (
    <button
      type={ type }
      className={`${ btnColor[bgColor] } ${ btnSize[size] } text-white font-semibold ml-2 text-base hover:bg-amber-400 rounded`}
      { ...rest }
    >
      { children }
    </button>
  );
}

export default Button;
```

#### Submit
* components/Submit.tsx
```tsx
import Button, { ButtonProps } from '@/components/Button';

const Submit: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button type="submit" { ...rest }>{ children }</Button>
  );
};

export default Submit;
```

#### Button, Submit 적용

##### app/(community)/[type]/[id]/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
<button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
<button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
<button type="submit" className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
```

* 적용후
```tsx
<Submit bgColor="red">삭제</Submit>
<Submit bgColor="red" size="sm">삭제</Submit>
<Submit bgColor="red" size="sm">삭제</Submit>
<Submit size="sm">댓글 등록</Submit>
```

##### app/(community)/[type]/[id]/edit/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</button>
```

* 적용후
```tsx
<Submit>수정</Submit>
```

##### app/(community)/[type]/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">검색</button>
```

* 적용후
```tsx
<Submit>검색</Submit>
```

##### app/(community)/[type]/new/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">등록</button>
```

* 적용후
```tsx
<Submit>등록</Submit>
```

##### app/(community)/(user)/login/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">로그인</button>
```

* 적용후
```tsx
<Submit>로그인</Submit>
```

##### app/(community)/(user)/signup/page.tsx
* 적용전
```tsx
<button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">회원가입</button>
```

* 적용후
```tsx
<Submit>회원가입</Submit>
```

### 복잡한 컴포넌트 분리
#### 페이지네이션
* compoments/Pagination.tsx
```tsx
'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Pagination() {
  const params = useParams();
  return (
    <div>
      <ul className="flex justify-center gap-3 m-4">
        <li className="font-bold text-blue-700">
          <Link href={`/${params.type}?page=1`}>1</Link>
        </li>
        <li>
          <Link href={`/${params.type}?page=2`}>2</Link>
        </li>
      </ul>
    </div>
  );
}
```

#### 검색
* Search.tsx
```tsx
import Submit from './Submit';

export default function Search() {
  return (
    <form action="#">
      <input
        className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
        type="text"
        name="keyword"
      />
      <Submit>검색</Submit>
    </form>
  );
};
```

#### 스피너
* Spinner.tsx
```sh
npm i react-spinners
```

```tsx
'use client';

import { HashLoader, ScaleLoader } from "react-spinners";

export function FullScreen(){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60">
      <div className="flex flex-col items-center">
        <h3 className="mb-4 text-lg font-semibold">잠시만 기다려주세요.</h3>
        <HashLoader
          color="#f58714"
          size={60}
        />
      </div>
    </div>
  );
}

export function TargetArea(){
  return (
    <div className="flex justify-center">
      <ScaleLoader color="#F97316"/>
    </div>
  );
}
```

#### 라이트/다크 테마
* Theme.tsx
```tsx
export default function Theme() {
  return (
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
  );
}
```

### 자식 컴포넌트 분리
#### 댓글 입력 화면
* CommentNew.tsx
```tsx
import Submit from "@/components/Submit";

export default function CommentNew() {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form action="#">
        <div className="mb-4">
          <textarea
            rows={3}
            cols={40}
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            name="comment"></textarea>

          <p className="ml-2 mt-1 text-sm text-red-500">
            내용은 필수입니다.
          </p>
          
        </div>
        <Submit size="sm">댓글 등록</Submit>
      </form>
    </div>
  );
}
```

#### 댓글 목록
* CommentList.tsx
```tsx
import CommentNew from "./CommentNew";
import CommentItem from "./CommentItem";

export default function CommentList() {
  const list = [<CommentItem key={1} />, <CommentItem key={2} />];
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>
      { list }
      <CommentNew />
    </section>
  );
}
```

* CommentItem.tsx
```tsx
import Submit from "@/components/Submit";
import Link from "next/link";

export default function CommentItem() {
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img
          className="w-8 mr-2 rounded-full"
          src="https://api.fesp.shop/files/00-sample/user-apeach.webp"
          alt="어피치 프로필 이미지"
        />
        <Link href="" className="text-orange-400">어피치</Link>
        <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">2024.07.02 14:11:22</time>
      </div>
      <div className="flex justify-between items-center mb-2">
        <form action="#">
          <pre className="whitespace-pre-wrap text-sm">화이팅!</pre>
          <Submit bgColor="red" size="sm">삭제</Submit>
        </form>
      </div>
    </div>
  );
}
```

#### 게시물 목록의 아이템
* ListItem.tsx
```tsx
import Link from "next/link";

export default function ListItem() {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">2</td>
      <td className="p-2 truncate indent-4"><Link href={`/info/1`} className="cursor-pointer">안녕하세요.</Link></td>
      <td className="p-2 text-center truncate">용쌤</td>
      <td className="p-2 text-center hidden sm:table-cell">29</td>
      <td className="p-2 text-center hidden sm:table-cell">2</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.05 13:39:23</td>
    </tr>
  );
}
```

## 활성 링크에 스타일 적용
* app/globals.css 파일에 스타일 추가
  ```css
  ...
  @layer components {
    .cs-active {
      @apply font-bold;
    }
  }
  ```

* app/layout.tsx에 추가
``` tsx
...
const pathname = usePathname();
const isActive = (path: string) => pathname === path ? 'cs-active' : '';
...

```
## loading 추가
* app/loading.tsx
```tsx
import { FullScreen } from "@/components/Spinner";

export default function Loading() {
  return <FullScreen />;
}
```

## error 추가
* app/error.tsx
```tsx
'use client';

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
      <h2 className="text-xl font-semibold mb-2 text-center">🚧 앗, 무언가 잘못됐네요!</h2>
      <h3 className="text-md font-semibold mb-2 text-center">{ error.message }</h3>
      <p className="pt-12 text-center">이 오류는 더 나은 서비스를 위한 첫걸음이에요. 조금만 기다려 주세요!</p>
      <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
        ⚙️ 문제 해결하기
      </button>
    </div>
  );
}
```

## not-found 추가
* app/not-fount.tsx
```tsx
'use client';

import Link from "next/link";

export default function Error() {
  return (
    <div className="py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
      <h2 className="text-xl font-semibold mb-2 text-center">🚧 앗, 무언가 잘못됐네요!</h2>
      <h3 className="text-md font-semibold mb-2 text-center">요청하신 페이지를 찾을 수 없습니다.</h3>
      <Link href="/" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
        ⚙️ 홈으로 돌아가기
      </Link>
    </div>
  );
}
```

## 공지 게시판 추가
* app/layout.tsx에 추가
```tsx
<li className={`hover:text-amber-500 a:font-semibold ${isActive('/notice')}`}><Link href="/notice">공지게시판</Link></li>
```

### 공지사항 미리 렌더링
* app/(community)/[type]/[id]/page.tsx에 추가
```tsx
export async function generateStaticParams(){
  return [
    { type: 'notice', id: '4' },
    { type: 'notice', id: '5' },
  ];
}
```
