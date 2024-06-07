# 12장 Next.js
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch12-nextjs>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#12>

## Next.js 개요
### Next.js란?
* 풀스택 웹 애플리케이션을 구축하기 위한 React 프레임워크(Vercel에서 개발)

### 주요 특징
* 라우팅: 레이아웃, 중첩 라우팅, 로딩 상태, 오류 처리 등을 지원하는 파일 시스템 기반 라우터 제공
  - 페이지 라우터: 예전 방식의 라우터
  - 앱 라우터: 서버 컴포넌트, 스트리밍 같은 최신 React 기능을 사용할 수 있으므로 페이지 라우터 대신 사용을 권장(Next.js 13에서 정식 도입) 
* 렌더링: 클라이언트 사이드 렌더링(CSR), 서버 사이드 렌더링(SSR) 지원
* 데이터 패칭: 데이터 캐싱, 재검증 등의 기능이 추가된 fetch API를 사용해서 데이터 가져오기 제공
* 스타일링: CSS Module, Tailwind CSS, CSS-in-JS 등 여러 스타일 지정 방법 지원
* 최적화: 이미지, 글꼴, 스크립트 등을 최적화 기능 지원
* 타입스크립트: 타입스크립트 우선 개발 경을 제공하며 필요한 패키지를 자동으로 설치하고 적절한 설정을 자동으로 구성. 사용자 정의 플러그인, 타입 검사기 등을 통한 타입스크립트에 대한 지원

## 개발환경 구성
### 수동 구성
#### package.json 파일 작성
* 생성
  ```sh
  npm init -y
  ```

* 실행 스크립트 작성
  ```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
  ```
  - dev: 개발 서버 실행
  - build: 프로덕션 빌드
  - start: 프로덕션 서버 실행
  - lint: ESLint를 이용한 코드 스타일 검사

#### Node 패키지 설치
```sh
npm install next@latest react@latest react-dom@latest
```

#### app 디렉토리 생성
* app 라우터를 사용할 경우 app 디렉토리 생성(권장)
* pages 라우터를 사용할 경우 pages 디렉토리 생성

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/app-getting-started.avif">

#### app/layout.tsx 파일 생성
* 루트 레이아웃
  ```tsx
  import React from 'react';
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ko">
        <img src="/nextjs.png" alt="logo" />
        <body>{children}</body>
      </html>
    )
  }
  ```

#### app/page.tsx 파일 생성
* 루트 페이지
  ```tsx
  export default function Page() {
    return <h1>Hello, Next.js!</h1>
  }
  ```

#### 개발 서버 실행
```sh
npm run dev
```

#### 테스트
* http://localhost:3000

### 자동 구성
#### create-next-app
```sh
npx create-next-app@latest
```

* What is your project named? my-app
* Would you like to use TypeScript? No / __Yes__
* Would you like to use ESLint? No / __Yes__
* Would you like to use Tailwind CSS? No / __Yes__
* Would you like to use `src/` directory? No / __Yes__
* Would you like to use App Router? (recommended) No / __Yes__
* Would you like to customize the default import alias (@/*)? __No__ / Yes

#### 개발 서버 실행
```sh
npm run dev
```

#### 테스트
* http://localhost:3000

## 프로젝트 구조
### 루트 폴더
<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/top-level-folders.avif">

* app: 앱 라우터
* pages: 페이지 라우터
* public: 정적 컨텐츠
* src: 소스 폴더를 따로 관리할 때 사용

### 루트 파일
* next-env.d.ts: Next.js용 타입스크립트 선언 파일
* next.config.js: Next.js 설정 파일
* package.json: 프로젝트 종속성 및 스크립트
* tsconfig.json: 타입스크립트 설정 파일

### app 라우팅 규칙
#### 라우팅용 특수 파일
* layout.js: 모든 페이지에 공통적으로 적용되는 루트 레이아웃을 정의
* page.js: 루트 페이지 UI
* loading.js: 페이지 로딩 중에 표시되는 UI
* not-found.js: 404 오류 페이지
* error.js: 일반 오류를 보여주는 페이지
* global-error.js: 전역 오류를 보여주는 페이지
* route.js: API 엔드포인트
* template.js: 페이지 템플릿을 정의
* default.js: 대체 UI

#### 중첩된 경로

#### 동적 경로

#### 경로 그룹 및 개인 폴더

#### 평행 및 차단 경로

#### 메타데이터 파일



## 라우팅
### app 라우터
* 파일 시스템 기반 라우터
  - app 폴더 하위의 폴더명이 URL의 경로가 됨

### 경로 정의
* 경로에 해당하는 폴더 생성
* 생성한 폴더 하위에 라우팅 규칙과 관련된 특수 파일, CSS, 이미지 등의 파일 작성
  - page.js: 해당 경로로 접근했을 때 보여줄 페이지 정의
  - layout.js: 해당 경로와 하위 경로의 page를 보여줄때 사용하는 공통의 UI 정의

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/route-segments-to-path-segments.avif">

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/defining-routes.avif">


### 페이지와 레이아웃
#### 페이지
* 클라이언트가 요청한 URL과 매칭되는 폴더 하위에 정의
* 클라이언트에 보여줄 화면 정의
* page.js, page.jsx, page.tsx로 작성
* app/page.tsx
  ```tsx
  export default function Page() {
    return <h1>Home</h1>
  }
  ```

* app/posts/page.tsx
  ```tsx
  export default function Page() {
    return <h1>목록 조회</h1>
  }
  ```

* app/posts/[id]/page.tsx
  ```tsx
  export default function Page() {
    return <h1>상세 조회</h1>
  }
  ```

* app/posts/new/page.tsx
  ```tsx
  export default function Page() {
    return <h1>글쓰기</h1>
  }
  ```

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/page-special-file.avif">

#### 레이아웃
* page 파일을 래핑할 레이아웃 UI 작성
* 하위 폴더의 layout과 중첩됨
* 생략 가능
* layout.js, layout.jsx, layout.tsx로 작성
* app/layout.tsx
  ```tsx
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ko">
        <body>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/posts">게시판</a></li>
            </ul>
          </nav>
          { children }
        </body>
      </html>
    )
  }
  ```
  - children은 현재 폴더부터 URL 경로와 일치하는 폴더까지 내려가면서 찾은 layout이 중첩되고 마지막엔 URL 경로에 존재하는 page가 된다.

* app/posts/layout.tsx
  ```tsx
  export default function PostLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <ul>
          <li><a href="/posts">목록 조회</a></li>
          <li><a href="/posts/new">글쓰기</a></li>
        </ul>
        { children }
      </>
    )
  }
  ```

##### 루트 레이아웃
* app 폴더 하위에 만들어야 하는 필수 layout 파일
* 모든 경로에 적용할 공통 UI 작성
* 루트 레이아웃에만 html, body 태그 포함 가능

#### 템플릿
* 하위 레이아웃이나 페이지를 래핑한다는 점은 레이아웃과 동일
* 레이아웃은 한번 생성되면 하위 페이지 이동시에 생성된 레이아웃을 재사용 하지만 템플릿은 매번 새롭게 생성함

#### 메타데이터
* layout, page에서 Metadata 객체나 generateMetadata 함수를 내보내기 하면 메타데이터 정의 가능
* app/page.tsx에 추가
  ```tsx
  import { Metadata } from "next"
  export const metadata: Metadata = {
    title: 'Home',
    description: 'Home 페이지입니다.'
  }
  ```

* app/posts/page.tsx에 추가
  ```tsx
  import { Metadata } from "next"
  export const metadata: Metadata = {
    title: '게시물 목록 조회',
    description: '게시물 목록 조회 페이지입니다.'
  }
  ```

* app/posts/[id]/page.tsx에 추가
  ```tsx
  import { Metadata } from "next"
  export const metadata: Metadata = {
    title: '게시물 상세 조회',
    description: '게시물 상세 조회 페이지입니다.'
  }
  ```

### 페이지 이동
#### Link 컴포넌트
* a 태그 대신 사용
* app/posts/page.tsx 수정
  ```tsx
  import Link from "next/link";
  export default function Page() {
    return (
      <>
        <h1>목록 조회</h1>
        <ul>
          { list.map((item) => (
            <li key={ item.id }>
              <Link href={`/posts/${ item.id }`}>
                { item.title }
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
  ```

##### 활성 링크 체크
* usePathname() 훅을 이용해서 url 확인 후 href와 비교

* app/globals.css 작성
  ```css
  .active {
    font-weight: bold;
  }
  ```

* app/layout.tsx 수정
  ```tsx
  'use client';

  import { usePathname } from "next/navigation";
  import "./globals.css";
  import Link from "next/link";

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();

    return (
      <html lang="ko">
        <body>
          <nav>
            <ul>
              <li><Link className={pathname === '/' ? 'active' : ''} href="/">Home</Link></li>
              <li><Link className={pathname === '/about' ? 'active' : ''} href="/about">About</Link></li>
              <li><Link className={pathname === '/posts' ? 'active' : ''} href="/posts">게시판</Link></li>
            </ul>
          </nav>
          {children}
        </body>
      </html>
    )
  }
  ```

##### 페이지 이동 시 스크롤 처리
* 기본 동작은 새 경로의 맨 위로 스크롤 하거나 이전/다음 버튼으로 이동했을 경우 스크롤을 유지
* 기본 동작을 비활성화 하려면 Link의 props으로 scroll={false} 추가

#### useRouter 훅
* 클라이언트 컴포넌트에서 사용
* 프로그래밍 방식으로 페이지 이동 가능
* 꼭 필요한 경우가 아니라면 Link 컴포넌트 사용 권장
* app/posts/new/page.tsx 수정
  ```tsx
  'use client';
  import { useRouter } from "next/navigation"
  export default function Page(){
    const router = useRouter();
    return (
      <>
        <h1>글쓰기</h1>
        <button type="button" onClick={ () => router.push('/posts') }>완료</button>
      </>
    )
  }
  ```

#### redirect
* 서버 컴포넌트에서 사용
* 클라이언트 컴포넌트에서 렌더링 중에는 사용 가능하지만 이벤트 핸들러에서는 사용 불가
* 기본적으로 307(Temporary Redirect, 원래 요청 방식과 본문으로 새로운 페이지 요청, 다음에도 이전 URI 사용) 응답 상태코드
  - 서버 액션일 경우(POST 요청의 성공 페이지로 이동할 때) 303(See Other, 새로운 페이지로 GET 요청) 응답 상태코드
* app/posts/new/page.tsx
  ```tsx
  'use client';
  import { useRouter, redirect } from "next/navigation"
  export default function Page(){
    const router = useRouter();
    redirect('/login');
    return (
      <>
        <h1>글쓰기</h1>
        <button type="button" onClick={ () => router.push('/posts') }>완료</button>
      </>
    )
  }
  ```

#### permanentRedirect
* 응답 상태코드가 308(Permanent Redirect, 원래 요청 방식과 본문으로 새로운 페이지 요청, 다음부터는 새로운 URI 사용)인 점만 다르고 redirect와 동일
  
#### history API
* 브라우저의 history API 사용
* window.history.pushState
* window.history.replaceState
* usePathname(), useSearchParams() 훅으로 URL과 파라미터 추출해서 low-level로 URL 변경 가능
* useRouter() 훅을 사용하는게 페이지 전환 시 SSR, SSG, 데이터 패칭, 페이지 전환 효과 등 Next.js 기능을 활용할 수 있으므로 useRouter() 권장

#### next.config.js의 redirects
* 선언적 redirect

  ```js
  module.exports = {
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/about',
          destination: '/',
          permanent: true,
        },
        // Wildcard path matching
        {
          source: '/blog/:slug',
          destination: '/news/:slug',
          permanent: true,
        },
      ]
    },
  }
  ```

#### NextResponse.redirect
* 미들웨어에서 사용
* 사용사례: 로그인되지 않은 사용자를 로그인 페이지로 이동
  ```ts
  import { NextResponse, NextRequest } from 'next/server'
  import { authenticate } from 'auth-provider'
  
  export function middleware(request: NextRequest) {
    const isAuthenticated = authenticate(request)
  
    // If the user is authenticated, continue as normal
    if (isAuthenticated) {
      return NextResponse.next()
    }
  
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  export const config = {
    matcher: '/dashboard/:path*',
  }
  ```

### 라우팅 작동 방식
#### 코드 분할
* 서버 컴포넌트를 사용하면 경로별로 코드를 작은 번들로 분할해서 브라우저가 다운로드하고 실행할 수 있으므로 데이터의 양과 응답시간이 줄어들어 성능 향상
#### 프리페치
* 링크를 누르기 전에 페이지를 미리 로드
* <Link> 컴포넌트: 링크가 사용자의 화면에 표시되면 자동으로 페이지를 미리 가져옴
  - 상황에 따라서(예를들어 인터넷 속도가 빠르고 서버 부하가 낮을 경우) 전체 페이지를 다 가져올 수도 있고, 
  - prefetch 속성이 지정되지 않거나 null값인 경우 렌더링된 컴포넌트 트리에서 첫번째 loading.js 파일이 나타날 때까지만 데이터를 미리 가져와서 loading을 보여주고 나머지 부분을 로드
    + true로 지정될 경우 전체 페이지를 미리 가져올 수 있음
  - prefetch 속성이 false일 경우 비활성화
  - prefetch 속성이 true일 경우 링크가 화면에 보이지 않더라도 프리페칭 시작
  - 프리페칭된 데이터와 레이아웃은 30초 동안 라우터 캐시에 저장
* router.prefetch(): 프로그래밍 방식으로 링크를 미리 가져올 수 있음

#### 부분 렌더링
* 페이지 이동시 공유 레이아웃은 유지한 채로 변경된 페이지만 렌더링
* /posts/3 -> /posts/2로 이동시 app/layout.js, app/posts/layout.js는 다시 렌더링 하지 않음

#### 이전/이후 페이지 이동
* 스크롤을 유지하고 라우터 캐시를 재사용


<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/partial-rendering.avif">


### 로딩중 페이지와 스트리밍
#### loading.js
* React Suspense를 사용하여 컨텐츠가 로드되는 동안 대체할 컴포넌트
* 렌더링이 완료되면 완료된 컴포넌트로 자동 교체
* 로딩중 상태에서도 공유 레이아웃 사용 가능

* app/posts/loading.tsx 작성
  ```tsx
  export default function Loading(){
    return <div>로딩중...</div>
  }
  ```

* loading 파일과 같은 폴더에 있는 layout 파일에 page를 <Suspense>로 감싼 것처럼 동작
  ```tsx
  <Suspense fallback={<Loading />}>
    { children }
  </Suspense>
  ```

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/loading-overview.avif">

#### 서스펜스를 이용한 스트리밍
* SSR을 사용하면 서버에서 페이지에 필요한 모든 데이터를 생성한 후 완성된 HTML을 전송하는데 시간이 오래걸림
* <Suspense>를 통해 스트리밍을 활성화하면 서버에서 레이아웃이나 중요 데이터를 먼저 전송할 수 있으며 클라이언트는 페이지의 일부를 더 빨리 표시할 수 있음
  - 하나의 response로 나머지 데이터도 이어서 받음

#### SEO
* generateMetadata 함수는 페이지의 메타데이터를 생성하는 데 사용됨
* 메타데이터는 주로 <head> 태그 내에 포함되는 title, description, keyword 등의 정보
* 메타데이터는 SEO(검색 엔진 최적화)에 중요한 역할을 하며, 소셜 미디어 공유 시에도 사용됨
* generateMetadata 함수 내에서 데이터를 패칭하는 경우, Next.js는 이 데이터 패칭이 완료될 때까지 기다림
* 데이터 패칭이 완료된 후 메타데이터를 최종적으로 생성하고, 이 메타데이터를 포함한 <head> 태그를 클라이언트로 스트리밍 시작
* 클라이언트는 서버로부터 받은 초기 컨텐츠가 <head>를 포함하고 있기 때문에 검색엔진이 자바스크립트를 실행하지 않아도 완전한 메타데이터를 확인 가능


### 오류 처리
* 오류가 발생할 경우 error.js 파일에서 오류 처리
* error 파일과 같은 폴더에 있는 layout 파일에 page를 <ErrorBoundary>로 감싼 것처럼 동작
  ```tsx
  <ErrorBoundary fallback={<Error />}>
    { children }
  </ErrorBoundary>
  ```

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/error-overview.avif">

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/nested-error-component-hierarchy.avif">

* 매개변수
  - error: 에러 객체
  - reset: 에러가 발생한 컴포넌트를 다시 렌더링 하는 함수
    + 에러는 일시적인 요인으로 발생하는 경우가 많으므로 reset() 함수를 호출해서 리플레시 없이 해당 컴포넌트를 다시 렌더링 시도할 수 있음

* page에서 에러가 발생할 경우 같은 폴더의 error에서 처리되고 layout에서 에러가 발생할 경우 상위 폴더의 error에서 처리됨

* 루트 레이이웃에서 에러가 발생할 경우 상위 폴더가 없으므로 에러 처리가 안됨
  - 대신 app/global-error.js 파일에서 에러 처리
  - 루트 레이아웃에는 <html>, <body> 태그가 있으므로 에러가 발생할 경우 대신 사용되는 global-error에 <html>, <body> 태그가 있어야 함
  - global-error.js는 프로덕션 환경에서만 동작

* 서버 컴포넌트에서 발생한 에러는 프로덕션 환경일 때 error 객체의 민감한 오류 정보는 제거되고 클라이언트에 전달됨



### 라우트 그룹
* app 라우터는 app 하위 폴더가 URL 경로에 매핑됨
* 폴더가 URL 경로에 포함되지 않게 하고 싶을때 라우트 그룹을 생성
* (폴더명) 처럼 폴더명에 ()를 붙여서 작성
* URL에 영향을 주지 않고 여러 페이지를 하나의 폴더에 묶어서 관리
  ```
  project-root/
  ├── app/
  │   ├── login/
  │   │   └── page.js
  │   ├── signin/
  │   │   └── page.js
  │   ├── (member)/
  │   │   ├── login/
  │   │   │   └── page.js
  │   │   ├── signin/
  │   │   │   └── page.js

  ```
  - app/login: app/login 경로에 매핑
  - app/signin: app/signin 경로에 매핑
  - app/(member)/login: app/login 경로에 매핑
  - app/(member)/signin: app/signin 경로에 매핑

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/route-group-organisation.avif">

* 라우트 그룹 하위에 layout 작성시 라우트 그룹 내부 페이지에 적용
  - 동일한 URL depth에 있는 페이지에 다른 layout을 적용하고 싶을 때
  - 루트 레이아웃을 여러개 정의하고 싶을 때(최상위 layout이 없을 경우 home page는 라우트 그룹중 하나에 정의 해야 함)

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/route-group-multiple-layouts.avif">

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/route-group-opt-in-layouts.avif">


* 다른 라우트 그룹에 동일한 하위 경로 작성시 컴파일 에러 발생

### 프로젝트 구성 및 경로 관리
* 라우팅 폴더 내에 page, route 파일이 있는 경우에만 라우팅 됨

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-not-routable.avif">
<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-routable.avif">
<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-colocation.avif">

#### 프라이빗 폴더
* _로 시작하는 폴더는 라우팅에서 제외
* 활용 사례
  - 라우팅 로직에서 UI 로직 분리
  - 프로젝트와 Next.js 생태계 전반에 걸쳐 내부 파일을 일관되게 구성
  - 코드 편집기에서 파일 정렬 및 그룹화
  - 향후 Next.js 특수 파일 규칙과의 잠재적인 이름 충돌을 방지


### 동적 경로
### 병렬 경로
### 경로 차단
### 경로 처리기
### 미들웨어
### 국제화

* 클라이언트 사이드 렌더링(CSR)과 서버 사이드 렌더링(SSR)
* 리액트 서버 컴포넌트(RSC)
* 정적 렌더링과 동적 렌더링
* 스트리밍


* 렌더링
  - 서버 컴포넌트
  - 클라이언트 컴포넌트
  - 컴포넌트 패턴

* 데이터 가져오기
  - fetch, cache, revalidating
  - 서버 액션과 데이터 mutation
  - 패턴 및 모범 사례



* 캐싱

* 스타일링
  - CSS Module
  - Tailwind CSS
  - CSS-in-JS
  - Sass

* 최적화
  - 이미지
  - 비디오
  - 폰트
  - 메타데이터
  - 스크립트
  - 레이지 로딩

* 설정

* 테스트

* 인증

* 배포

