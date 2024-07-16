# 1. Next.js 개요
## 1.1 Next.js란?
* 풀스택 웹 애플리케이션을 구축하기 위한 React 프레임워크
* 프레임워크
  - 소프트웨어 개발에 필요한 공통의 구조를 제시하고 공통의 기능을 제공
  - 개발 방식이나 프로젝트 구조를 강제하기 때문에 라이브러리에 비해 자유도가 떨어지지만 프레임워크가 제공하는 공통 기능을 잘 활용해서 개발 생산성 향상

## 1.2 주요 특징
* 라우팅: 레이아웃, 중첩 라우팅, 로딩 상태, 오류 처리 등을 지원하는 파일 시스템 기반 라우터 제공
  - 페이지 라우터(pages): 이전 방식의 라우터
  - 앱 라우터(app): 서버 컴포넌트, 스트리밍 같은 최신 React 기능을 사용할 수 있으므로 페이지 라우터 대신 사용을 권장(Next.js 13에서 정식 도입)
* 렌더링: 클라이언트 사이드 렌더링(CSR), 서버 사이드 렌더링(SSR) 지원
* 데이터 패칭: 데이터 캐싱, 재검증 등의 기능을 추가해서 확장한 fetch API를 사용해서 데이터 가져오기 제공
* 스타일링: CSS Module, Tailwind CSS, CSS-in-JS 등 여러 스타일 지정 방법 지원
* 최적화: 이미지, 글꼴, 스크립트 등의 최적화 지원
* 타입스크립트: 타입스크립트 우선 개발 환경을 제공하며 필요한 패키지를 자동으로 설치하고 적절한 설정을 자동으로 구성. 사용자 정의 플러그인, 타입 검사기 등을 통한 타입스크립트에 대한 지원

# 2. 개발환경 구성
## 2.1 수동 구성
### package.json 파일 작성
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

### Node 패키지 설치
```sh
npm install next@latest react@latest react-dom@latest
```

### app 디렉토리 생성
* app 라우터를 사용할 경우 app 디렉토리 생성(권장)
* pages 라우터를 사용할 경우 pages 디렉토리 생성

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/app-getting-started.avif">

### app/layout.tsx 파일 생성
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

### app/page.tsx 파일 생성
* 루트 페이지
  ```tsx
  export default function Page() {
    return <h1>Hello, Next.js!</h1>
  }
  ```

### 개발 서버 실행
```sh
npm run dev
```

### 테스트
* http://localhost:3000

## 2.2 자동 구성
### create-next-app
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

### 개발 서버 실행
```sh
npm run dev
```

### 테스트
* http://localhost:3000

# 3. 프로젝트 구조
## 3.1 루트 폴더
<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/top-level-folders.avif">

* app: 앱 라우터
* pages: 페이지 라우터
* public: 정적 컨텐츠
* src: 소스 폴더를 따로 관리할 때 사용

## 3.2 루트 파일
* next-env.d.ts: Next.js용 타입스크립트 선언 파일
* next.config.js: Next.js 설정 파일
* package.json: 프로젝트 종속성 및 스크립트
* tsconfig.json: 타입스크립트 설정 파일

## 3.3 app 라우팅 규칙
### 라우팅용 특수 파일
* layout.js: 모든 페이지에 공통적으로 적용되는 루트 레이아웃을 정의
* page.js: 루트 페이지 UI
* loading.js: 페이지 로딩 중에 표시되는 UI
* not-found.js: 404 오류 페이지
* error.js: 일반 오류를 보여주는 페이지
* global-error.js: 전역 오류를 보여주는 페이지
* route.js: API 엔드포인트
* template.js: 페이지 템플릿을 정의
* default.js: 대체 UI

### 중첩된 경로

### 동적 경로

### 경로 그룹 및 개인 폴더

### 평행 및 차단 경로

### 메타데이터 파일



# 4. 라우팅
## 4.1 app 라우터
* 파일 시스템 기반 라우터
  - app 폴더 하위의 폴더명이 URL의 경로가 됨

## 4.2 경로 정의
* 경로에 해당하는 폴더 생성
* 생성한 폴더 하위에 라우팅 규칙과 관련된 특수 파일, CSS, 이미지 등의 파일 작성
  - page.js: 해당 경로로 접근했을 때 보여줄 페이지 정의
  - layout.js: 해당 경로와 하위 경로의 page를 보여줄때 사용하는 공통의 UI 정의

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/route-segments-to-path-segments.avif">

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/defining-routes.avif">


## 4.3 페이지와 레이아웃
### 페이지
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

### 레이아웃
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

#### 루트 레이아웃
* app 폴더 하위에 만들어야 하는 필수 layout 파일
* 모든 경로에 적용할 공통 UI 작성
* 루트 레이아웃에만 html, body 태그 포함 가능

### 템플릿
* 하위 레이아웃이나 페이지를 래핑한다는 점은 레이아웃과 동일
* 레이아웃은 한번 생성되면 하위 페이지 이동시에 생성된 레이아웃을 재사용 하지만 템플릿은 매번 새롭게 생성함

### 메타데이터
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

## 4.4 페이지 이동
### Link 컴포넌트
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

#### 활성 링크 체크
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

#### 페이지 이동 시 스크롤 처리
* 기본 동작은 새 경로의 맨 위로 스크롤 하거나 이전/다음 버튼으로 이동했을 경우 스크롤을 유지
* 기본 동작을 비활성화 하려면 Link의 props으로 scroll={false} 추가

### useRouter 훅
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

### redirect
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

### permanentRedirect
* 응답 상태코드가 308(Permanent Redirect, 원래 요청 방식과 본문으로 새로운 페이지 요청, 다음부터는 새로운 URI 사용)인 점만 다르고 redirect와 동일
  
### history API
* 브라우저의 history API 사용
* window.history.pushState
* window.history.replaceState
* usePathname(), useSearchParams() 훅으로 URL과 파라미터 추출해서 low-level로 URL 변경 가능
* useRouter() 훅을 사용하는게 페이지 전환 시 SSR, SSG, 데이터 패칭, 페이지 전환 효과 등 Next.js 기능을 활용할 수 있으므로 useRouter() 권장

### next.config.js의 redirects
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

### NextResponse.redirect
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

## 4.5 라우팅 작동 방식
### 코드 분할
* 서버 컴포넌트를 사용하면 경로별로 코드를 작은 번들로 분할해서 브라우저가 다운로드하고 실행할 수 있으므로 데이터의 양과 응답시간이 줄어들어 성능 향상
### 프리페치
* 링크를 누르기 전에 페이지를 미리 로드
* <Link> 컴포넌트: 링크가 사용자의 화면에 표시되면 자동으로 페이지를 미리 가져옴
  - 상황에 따라서(예를들어 인터넷 속도가 빠르고 서버 부하가 낮을 경우) 전체 페이지를 다 가져올 수도 있고, 
  - prefetch 속성이 지정되지 않거나 null값인 경우 렌더링된 컴포넌트 트리에서 첫번째 loading.js 파일이 나타날 때까지만 데이터를 미리 가져와서 loading을 보여주고 나머지 부분을 로드(30초)
    + true로 지정될 경우 전체 페이지를 미리 가져올 수 있음(5분)
  - prefetch 속성이 false일 경우 비활성화
  - prefetch 속성이 true일 경우 링크가 화면에 보이지 않더라도 프리페칭 시작(5분)
  - 프리페칭된 데이터와 레이아웃은 30초 동안 라우터 캐시에 저장됨
    + 라우터 캐시는 비활성화 시킬 수 없음
    + router.refresh() 호출 시 라우터 캐시 삭제
    
* router.prefetch(): 프로그래밍 방식으로 링크를 미리 가져올 수 있음

### 부분 렌더링
* 페이지 이동시 공유 레이아웃은 유지한 채로 변경된 페이지만 렌더링
* /posts/3 -> /posts/2로 이동시 app/layout.js, app/posts/layout.js는 다시 렌더링 하지 않음

### 이전/이후 페이지 이동
* 스크롤을 유지하고 라우터 캐시를 재사용


<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/partial-rendering.avif">


## 4.6 로딩중 페이지와 스트리밍
### loading.js
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

### 서스펜스를 이용한 스트리밍
* SSR을 사용하면 서버에서 페이지에 필요한 모든 데이터를 생성한 후 완성된 HTML을 전송하는데 시간이 오래걸림
* <Suspense>를 통해 스트리밍을 활성화하면 서버에서 레이아웃이나 중요 데이터를 먼저 전송할 수 있으며 클라이언트는 페이지의 일부를 더 빨리 표시할 수 있음
  - 하나의 response로 나머지 데이터도 이어서 받음

### SEO
* generateMetadata 함수는 페이지의 메타데이터를 생성하는 데 사용됨
* 메타데이터는 주로 <head> 태그 내에 포함되는 title, description, keyword 등의 정보
* 메타데이터는 SEO(검색 엔진 최적화)에 중요한 역할을 하며, 소셜 미디어 공유 시에도 사용됨
* generateMetadata 함수 내에서 데이터를 패칭하는 경우, Next.js는 이 데이터 패칭이 완료될 때까지 기다림
* 데이터 패칭이 완료된 후 메타데이터를 최종적으로 생성하고, 이 메타데이터를 포함한 <head> 태그를 클라이언트로 스트리밍 시작
* 클라이언트는 서버로부터 받은 초기 컨텐츠가 <head>를 포함하고 있기 때문에 검색엔진이 자바스크립트를 실행하지 않아도 완전한 메타데이터를 확인 가능


## 4.7 오류 처리
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



## 4.8 라우트 그룹
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

## 4.9 프로젝트 구성 및 경로 관리
* 라우팅 폴더 내에 page, route 파일이 있는 경우에만 라우팅 됨

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-not-routable.avif">
<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-routable.avif">
<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-colocation.avif">

### 프라이빗 폴더
* _로 시작하는 폴더는 라우팅에서 제외

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-private-folders.avif">

* 활용 사례
  - 라우팅 로직에서 UI 로직 분리
  - 프로젝트와 Next.js 생태계 전반에 걸쳐 내부 파일을 일관되게 구성
  - 코드 편집기에서 파일 정렬 및 그룹화
  - 향후 Next.js 특수 파일 규칙과의 잠재적인 이름 충돌을 방지

### src 폴더
* 프로젝트 환경 설정파일과 소스 코드를 분리하기 위해서 선택적으로 사용
  ```
  project_folder/
  │
  ├── src/
  │   ├── app/
  │   │   ├── layout.js
  │   │   └── page.js
  │   │
  │   └── 라우터 이외의 소스 코드
  │
  ├── package.json
  │
  └── next.config.js
  ```

### 별칭
* tsconfig.json, jsconfig.json 파일에 별칭 지정
  - create-next-app을 이용하면 기본으로 추가되고 추가 별칭도 선택적으로 지정 가능
    ```json
    "paths": {
      "@/*": ["./src/*"]
    }
    ```

```tsx
// before
import { Button } from '../../../components/button'
 
// after
import { Button } from '@/components/button'
```

### 프로젝트 폴더 구조 전략
#### 프로젝트 파일을 app 외부에 저장
* app 폴더는 라우팅으로만 사용하고 나머지 코드는 app 폴더 외부에 저장

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-project-root.avif">

#### 프로젝트 파일을 app 내부에 저장
* 모든 코드를 app 폴더 내부에 저장

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-app-root.avif">

#### 기능이나 경로별로 파일 분할
* 공용 컴포넌트나 라이브러리를 app 폴더 하위에 작성하고 각 페이지별로 사용할 컴포넌트나 라이브러리는 각 페이지 폴더 하위에 작성

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/project-organization-app-root-split.avif">


## 4.10 동적 경로
* 고정된 URL이 아닌 바뀔수 있는 부분에 대해서 라우팅을 정의할 때 폴더명을 대괄호로 묶어서 생성
  - posts/1, posts/2 -> posts/[id]
* 실제 요청한 URL의 동적 경로 값은 layout, page, route, generateMetadata 함수에 params prop으로 전달됨
* 요청한 URL이 /posts/3일 경우 3을 꺼내는 방법

  ```tsx
  export default function Page({ params: { id } }: { params: { id: string }}) {
    return <h1>{ params.id }번 게시물 상세 조회</h1>
  }
  ```
* app/posts/[id]/page.js 파일이 있을때 매칭되는 URL과 params 값
  - /posts/1 -> { id: '1' }
  - /posts/2 -> { id: '2' }
  - /posts/3 -> { id: '3' }

### generateStaticParams() 함수
* 동적 경로로 구성된 페이지의 params를 미리 지정해서 빌드시 해당 파라미터를 가지는 페이지를 정적으로 생성
* 미리 생성할 정적 페이지의 params를 배열로 반환하도록 작성
* generateStaticParams() 함수 내에서 fetch를 사용할 경우 자동으로 메모이제이션 되고 layout, page에서 동일한 요청을 할 경우 이전 요청의 결과를 재사용해서 빌드 시간을 줄일 수 있음

* 빌드 할 때 동작 순서
  ```tsx
  export async function generateStaticParams() {
    // fetch 작업
    const posts = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ];

    return posts.map((post) => ({
      id: post.id
    }))
  }
  ```
  1. generateStaticParams() 함수 호출 후 반환받은 배열의 각 요소를 params로 구성해서 Page 컴포넌트 호출
  2. Page 컴포넌트에서 반환 받은 HTML을 빌드 결과로 저장
    - posts/1.html, 2.html, 3.html

* 특정 게시글에 달린 좋아요 목록, 좋아요 상세정보, 관심글로 등록한 목록, 관심글 상세 정보를 보여줄 때 만들어야 할 파일
  - app/posts/[pid]/[slug]/page.js
    + /posts/1/likes -> { pid: '1', slug: ['likes'] }
    + /posts/2/likes -> { pid: '2', slug: ['likes'] }
    + /posts/2/favorites -> { pid: '1', slug: ['favorites'] }
  - app/posts/[pid]/[slug]/[sid]/page.js
    + /posts/3/likes/4 -> { pid: '3', slug: ['likes'], sid: '4' }
    + /posts/3/favorites/4 -> { pid: '3', slug: ['favorites'], sid: '4' }

### Catch-all 세그먼트
* 대괄호 안에 줄임표(...)를 추가하면 하위 경로에 대해서도 매핑됨

* 특정 게시글에 달린 좋아요 목록, 좋아요 상세정보, 관심글로 등록한 목록, 관심글 상세 정보를 보여줄 때 만들어야 할 파일
  - app/posts/[id]/[...slug]/page.js
    + /posts/1/likes -> { id: '1', slug: ['likes'] }
    + /posts/2/likes -> { id: '2', slug: ['likes'] }
    + /posts/2/favorites -> { id: '2', slug: ['favorites']}
    + /posts/3/like/4 -> { id: '3', slug: ['likes', '4'] }
    + /posts/3/favorites/4 -> { id: 3', slug: ['favorites', '4'] }

### Optional Catch-all 세그먼트
* 폴더명을 이중 대괄호로 묶어서 작성하면 Catch-all 세그먼트를 선택사항으로 지정

* 특정 게시글과 댓글 목록, 댓글 상세 정보를 하나의 page로 처리할 경우
  - app/posts/[id]/[[...slug]]/page.js
    + /posts/1 -> { id: '1' }
    + /posts/2 -> { id: '2' }
    + /posts/3/replies -> { id: '3', slug: ['replies'] }
    + /posts/3/replies/2 -> { id: '3', slug: ['replies', '2'] }

### 동적 경로에 대한 타입 스크립트 params 타입
* app/posts/[id]/page.js
```tsx
export default function Page({ params }: { params: { id: string } }) {
  return <h1>My Page</h1>
}
```

* app/posts/[...slug]/page.js -> { slug: string[] }
* app/posts/[[...slug]]/page.js -> { slug?: string[] }
* app/posts/[id]/[slug]/page.js -> { id: string, slug: string }

## 4.11 병렬 라우팅
* 하나의 레이아웃 내에서 여러 페이지를 동시에 또는 조건부로 렌더링

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/parallel-routes.avif">

* 슬롯: '@폴더명' 형태의 이름으로 생성

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/parallel-routes-file-system.avif">

* 슬롯은 동일 레벨의 레이아웃에 props으로 전달됨
* 슬롯은 경로에 계산되지 않음
  - /@hello/world -> /world

```tsx
export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
      { children }
      { team }
      { analytics }
    </>
  )
}
```

* @children 슬롯은 만들 필요가 없는 암시적 슬롯
  - app/@children/page.js == app/page.js

* 장점
  - 동시에 렌더링 되기 때문에 속도가 빠름
  - loading, error 페이지를 각 슬롯별 독립적으로 보여줄 수 있음
  <img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/parallel-routes-cinematic-universe.avif">
  - 로딩이 완료된 페이지 먼저 표시 가능
  - 인증 상태와 같은 조건에 따른 렌더링 가능
  <img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/conditional-routes-ui.avif">
  ```tsx
  import { checkUserRole } from '@/lib/auth'
  
  export default function Layout({
    user,
    admin,
  }: {
    user: React.ReactNode
    admin: React.ReactNode
  }) {
    const role = checkUserRole()
    return <>{role === 'admin' ? admin : user}</>
  }
  ```


* 슬롯이 로딩된 상태에서 페이지 이동
  - 소프트 네비게이션(Link로 이동)
    + 매칭되는 URL이 없는 슬롯은 이전의 내용을 유지
  - 하드 네비게이션(주소창에 직접 입력하거나 새로고침)
    + 매칭되는 URL이 없는 슬롯에 default 파일이 있을 경우 default를 렌더링하고 default가 없으면 404 에러
    
### 모달 구현
* 라우팅 인터셉트에서 ...

## 4.12 라우팅 인터셉트
* 라우팅을 인터셉트 해서 현재 페이지를 벗어나지 않고 컨텐츠를 표시하고 싶을 때 사용
  - 특정 페이지에서 로그인 화면으로 이동하지 않고 로그인 모달을 띄우기
  - 게시판 목록에서 상세 조회를 할 때 레이어 형태로 상세 화면을 띄우기
  - 장바구니를 클릭하면 현재 화면을 유지한 상태로 보여주기
* 하드 네비게이션시 원래 경로의 컨텐츠를 보여줌
* 폴더명 앞에 일치해야 하는 URL에 맞출 수 있도록 상대 경로를 ()안에 기술
  - (.): 동일 경로
  - (..): 한단계 상위 폴더
  - (..)(..): 두단계 상위 폴더
  - (...): 루트 폴더(app)

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/conditional-routes-ui.avif">
* /feed 경로에서 소프트 네비게이션으로 /photo로 이동할 경우 현재 URL은 /photo 지만 feed/(..)photo/page가 렌더링되고 새로고침하면 photo/page가 렌더링 됨
  - 새로고침시 인터셉트 되지 않기 때문에 원래 화면으로 보여주기 가능(갤러리 모달 -> 갤러리 화면, 로그인 모달 -> 로그인 화면)
  - 모달로 보여주는 컨텐츠를 URL로 공유 가능
#### 모달 구현
* 라우팅 인터셉트와 병렬 라우팅을 활용하면 모달 구현 가능
  - 닫기 대신 이전/이후 페이지 이동시 모달 없애고 다시 보여주기 가능


## 4.13 라우트 핸들러
* API 엔드포인트 생성
* 서버에서 실행되고 데이터를 클라이언트에 반환
  - 서버 컴포넌트에서는 직접 데이터를 가져오면 되므로 라우트 핸들러를 호출할 필요 없음
* API 토큰 같은 민감한 정보를 클라이언트에 노출하지 않음
* page 파일 대신 route 파일 작성
  ```tsx
  export async function GET(request: Request) {
    const res = await fetch('https://api.leerob.io/...', { ... } )
    const data = await res.json()

    return Response.json({ data })
  }
  ```
* 문서에는 route, page 같이 있으면 충돌나서 안된다고 하지만 실제는 route의 GET이 호출됨
* GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS 메서드 지원
  - 지원되지 않은 메소드 호출 시 405 Method Not Allowed 에러 응답

### NextRequest, NextResponse
* Fetch API의 Request, Response를 확장하여 추가적인 편의 메서드 제공
```ts
import { type NextRequest } from 'next/server'
 
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello
}
```

### 캐싱
* GET 요청시 Response가 기본적으로 캐시됨
  - 기본값은 30초
  - 캐시 안되게 하려면
    + GET 메소드와 함께 Request 객체를 사용합니다 .
    + 다른 HTTP 메서드를 사용합니다.
    + cookies 및 headers와 같은 동적 기능을 사용합니다 .
    + 세그먼트 구성 옵션은 동적 모드를 수동으로 지정합니다.
* 캐시 설정
  - fetch 옵션의 next.revalidate 속성으로 지정
    + 숫자: 초단위의 캐시 시간 지정
      ```ts
      const res = await fetch('https://data.mongodb-api.com/...', {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      })
      ```
  - revalidate 상수 export
    ```ts
    export const revalidate = 60;
    ```
### 쿠키
### 헤더
### redirect
### 요청 바디 추출
### CORS 헤더 전송


## 4.14 미들웨어
* 캐시된 컨텐츠와 일치된 라우트가 호출되기 전에 요청을 가로채서 응답헤더를 수정하거나 redirect, 직접 응답 가능

### 사용 사례
* 인증 및 권한 부여: 권한이 필요한 페이지 접근 전에 권한 체크
* 서버 측 리다이렉트: 로케일이나 사용자 역할에 따른 페이지 이동
* 경로 재작성: A/B 테스트나 새로운 기능을 일부 사용자에게만 제공
* 봇 탐지: 봇 트래픽을 탐지하고 차단
* 로깅

### 사용 부적합 사례
* 복잡한 데이터 가져오기 및 처리
* 복잡한 계산 작업
* DB 작업
* 미들웨어는 가벼운 작업에만 사용하고 위의 작업처럼 무거운 작업들은 전용 라우트 핸들러에서 작성을 권장

### 작성 규칙
* 프로젝트 루트 디렉터리에(app 폴더와 같은 경로) middleware.ts 파일 작성
* Request를 매개변수로 정의한 middleware 라는 이름의 함수를 export
  - 모든 요청에 공통으로 필요한 작업 처리
  - request 값을 이용해서 요청 분석 후 조건에 따라 여러 분기 처리
  - 요청 헤더 설정

* 추가 설정을 위해 선택적으로 config 상수 export
  - middleware: request를 전달받아서 클라이언트에 응답을 보내거나 다음 미들웨어를 호출
  - config.matcher 속성: 미들웨어가 호출되는 url 경로 패턴 지정(정규식 지원됨). 빌드시 정적으로 분석 가능하도록 상수만 사용 가능
    + source
    + missing
    + has
* NextResponse
  - redirect
  - rewrite
  - 응답 쿠키 설정
  - 응답 헤더 설정

* waitUntil, NextFetchEvent(FetchEvent 확장)

### 사용 예시
```ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}
 
export const config = {
  matcher: '/about/:path*',
}
```
  - 

### 호출 순서
1. next.config.js의 `headers`
2. next.config.js의 `redirects`
3. Middleware
4. nextjs.config.js의 `beforeFiles`
5. 파일 시스템의 모든 파일 (`public`, `_next/static/, pages/, app/, 기타)
6. nextjs.config.js의 `afterFiles` 
7. Dynamic 라우트들 (ex: `/card/[cardId]`)
8. nextjs.config.js의 `fallback`

### 미들웨어 분리
* 프로젝트 규모가 커지면 유지보수를 위해 미들웨어를 여러 파일로 분리하여 관리 
* 예시
  - authMiddleware.ts
    ```ts
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';

    export function authMiddleware(request: NextRequest) {
      const token = request.cookies.get('token');

      if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      return NextResponse.next();
    }
    ```

  - loggingMiddleware.ts
    ```ts
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';

    export function loggingMiddleware(request: NextRequest) {
      console.log(`Request to ${request.nextUrl.pathname}`);
      return NextResponse.next();
    }
    ```

  - middleware.ts
    ```ts
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';
    import { authMiddleware } from './middlewares/authMiddleware';
    import { loggingMiddleware } from './middlewares/loggingMiddleware';

    // 모든 미들웨어를 배열로 관리
    const middlewares = [
      authMiddleware,
      loggingMiddleware,
    ];

    export function middleware(request: NextRequest) {
      let response: NextResponse | undefined;

      for (const middleware of middlewares) {
        response = middleware(request);
        if (response?.status !== 200) {
          return response;
        }
      }

      return response || NextResponse.next();
    }
    ```


## 4.15 국제화


# 5. Data Fetching
* 데이터 가져오는 방법
  - 서버에서 fetch 함수 사용
  - 서버에서 외부 라이브러리 사용
  - 클라이언트에서 라우트 핸들러 호출
  - 클라이언트에서 외부 라이브러리 사용

## 5.1 Next.js의 fetch 함수
* fetch API를 확장
  - GET 요청에 대해 URL과 옵션을 메모이제이션하고 여러 컴포넌트에서 호출하는 동일한 요청에 대해서 저장된 응답을 반환
    + 컴포넌트 트리의 여러 컴포넌트가 props을 이용해서 데이터를 전달할 필요 없이 fetch를 각각 호출해도 저장된 값을 사용하므로 성능에 영향이 없음
    + generateMetadata, generateStaticParams, Layout, Page, Server Component에만 적용되고 라우트 핸들러는 컴포넌트 트리의 일부가 아니므로 적용 안됨
    + 메모이제이션된 데이터는 컴포넌트 트리가 렌더링을 완료할 때까지 지속됨
  - 서버 컴포넌트, 라우트 핸들러, 서버 액션에서 async/await와 함께 사용 가능
  - 서버 액션에서는 캐시되지 않음(cache: no-store가 기본값)


## 5.2 서버 액션 
* 클라이언트의 요청에 의해 서버에서 실행되는 함수
  - 서버사이드 로직을 클라이언트에서 호출 가능
* 주로 폼 데이터 처리에 사용
* Next.js의 캐싱과 재검증 아키텍처와 통합
  - 액션이 호출되면 한번의 요청으로 업데이트된 UI와 새 데이터를 모두 받을 수 있음
* 서버 액션이 호출되면 내부적으로 POST 방식으로 호출
* 매개변수와 반환값은 직렬화 가능해야 함
  - string, number, bigint, boolean, undefined, null, symbol(Symbol.for로 등록된 global Symbol)
  - String, Array, Map, Set, TypedArray, ArrayBuffer
  - Date
  - FormData
  - Object
  - 서버 액션 함수
  - Promise

* 사용되는 페이지나 레이아웃의 런타임과 Route Segment Config를 상속
* 반드시 async 함수로 만들어야 한다
* 원리
  - 빌드시 서버 액션 함수는 클라이언트
  - 서버 액션 요청의 payload에 $ACTION_ID를 자동으로 전달
  - .next/server/app/... 하위에 빌드된 파일 확인
    + const actions으로 검색한 부분에서 action 아이디를 확인할 수 있고 mod[\"$$ACTION_0\"]를 사용해서 호출함을 확인
    + function $$ACTION_0으로 검색하면 서버 액션 함수를 찾을 수 있음

### 서버 액션 정의
* 인라인 수준: 비동기 함수의 맨 위에 'use server' 지시어로 서버 액션을 정의
  - 서버 컴포넌트만 사용 가능
  ```tsx
  // Server Component
  export default function Page() {
    // Server Action
    async function create() {
      'use server'
  
      // ...
    }
  
    return (
      // ...
    )
  }
  ```
  

* 모듈 수준: 별도의 파일 맨 위에 'use server' 지시어로 모든 export 함수를 서버 액션으로 정의
  - 서버 컴포넌트와 클라이언트 컴포넌트 모두 사용 가능
  ```tsx
  'use server'
  
  export async function create() {
    // ...
  }
  export async function update() {
    // ...
  }
  ```

* 서버 컴포넌트를 props로 클라이언트 컴포넌트에 전달
  ```tsx
  <ClientComponent create={create} />
  ```

### 서버 액션 호출
#### form 요소의 action 속성으로 호출
* React는 HTML form 요소를 확장해서 action 속성에 서버 액션 지정 가능
  ```tsx
  'use client'
  
  export default function ClientComponent({ create }) {
    return <form action={create}>{/* ... */}</form>
  }
  ```
  - 서버 액션이 호출되면 Form 내부의 입력 요소들이 저장된 FormData 객체가 자동으로 전달됨
  - 자바스크립트가 로드되기 이전이거나 비활성화 되었어도 폼 제출 가능
    + 자바스크립트가 로드되기 이전에 제출되면 큐에 담은 후 클라이언트 하이드레이션의 우선 순위로 지정됨
  - submit 이후에 새로고침 없음

  ```tsx
  export default function Page() {
    async function createInvoice(formData: FormData) {
      'use server'
  
      const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      }
  
      // mutate data
      // revalidate cache
    }
  
    return <form action={createInvoice}>...</form>
  }
  ```

* form 데이터에 추가 인자값 전달
  - Function.prototype.bind()를 사용해서 인자값 미리 전달(클라이언트, 서버 컴포넌트 모두 사용 가능)
  - hidden 타입을 이용(인코딩 되지 않은 값이 HTML에 그대로 삽입됨)
  ```tsx
  'use client'
  
  import { updateUser } from './actions'
  
  export function UserProfile({ userId }: { userId: string }) {
    const updateUserWithId = updateUser.bind(null, userId); // bind
  
    return (
      <form action={updateUserWithId}>
        <input type="hidden" name="userId" value={userId} /> // hidden
        <input type="text" name="name" />
        <button type="submit">Update User Name</button>
      </form>
    )
  }
  ```
  ```tsx
  'use server'
  
  export async function updateUser(userId, formData) {
    // ...
  }
  ```

* pending 상태를 표시하려면 리액트의 useFormStatus 훅 사용
  - <form> 요소의 자식으로 정의
  - 리액트 훅이므로 클라이언트 컴포넌트에서만 사용 가능
  ```tsx
  'use client'  
  import { useFormStatus } from 'react-dom'  
  export function SubmitButton() {
    const { pending } = useFormStatus()  
    return (
      <button type="submit" disabled={pending}>
        Add
      </button>
    )
  }
  ```

  ```tsx
  import { SubmitButton } from '@/app/submit-button'
  import { createItem } from '@/app/actions'
  
  // Server Component
  export default async function Home() {
    return (
      <form action={createItem}>
        <input type="text" name="field-name" />
        <SubmitButton />
      </form>
    )
  }
  ```

#### form 요소 내부의 요소의 formAction 속성으로 호출
* button 같은 폼 내부 요소의 formAction 속성이나 이벤트 핸들러 
  - <button formAction={}>
  - <input type="submit" formAction={}>
  - <input type="image" formAction={}>

#### 프로그래밍 방식으로 호출
* form 요소의 requestSubmit() 함수를 직접 호출
  ```tsx
  'use client'
  
  export function Entry() {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 'Enter' || e.key === 'NumpadEnter') // Ctrl + Enter
      ) {
        e.preventDefault()
        e.currentTarget.form?.requestSubmit()
      }
    }
  
    return (
      <div>
        <textarea name="entry" rows={20} required onKeyDown={handleKeyDown} />
      </div>
    )
  }
  ```

#### 이벤트 핸들러에서 호출
```tsx
'use client'

import { incrementLike } from './actions'
import { useState } from 'react'

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)

  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </>
  )
}
```


#### useEffect에서 호출
* useEffect 훅에서 호출
  - 게시물 상세보기 화면에서 조회수 증가
    ```tsx
    'use client'
    
    import { incrementViews } from './actions'
    import { useState, useEffect } from 'react'
    
    export default function ViewCount({ initialViews }: { initialViews: number }) {
      const [views, setViews] = useState(initialViews)
    
      useEffect(() => {
        const updateViews = async () => {
          const updatedViews = await incrementViews()
          setViews(updatedViews)
        }
    
        updateViews()
      }, [])
    
      return <p>Total Views: {views}</p>
    }
    ```

### 유효성 검사
* 클라이언트측 유효성 검사
  - required, pattern, type="email" 등 HTML의 기본 유효성 검사 사용
* 서버측 유효성 검사
  - zod 같은 라이브러리 사용
  ```tsx
  'use server'
  
  import { z } from 'zod'
  
  const schema = z.object({
    email: z.string({
      invalid_type_error: 'Invalid Email',
    }),
  })
  
  export default async function createUser(formData: FormData) {
    const validatedFields = schema.safeParse({
      email: formData.get('email'),
    })
  
    // Return early if the form data is invalid
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }
  
    // Mutate data
  }
  ```

* 서버에서 필드를 검증한 후 클라이언트 컴포넌트에서 리액트의 useFormState 훅을 이용해서 사용자에게 메세지를 표시할 수 있음
  ```tsx
  'use server'
  
  export async function createUser(prevState: any, formData: FormData) {
    // ...
    return {
      message: 'Please enter a valid email',
    }
  }
  ```
  ```tsx
  'use client'
  
  import { useFormState } from 'react-dom'
  import { createUser } from '@/app/actions'
  
  const initialState = {
    message: '',
  }
  
  export function Signup() {
    const [state, formAction] = useFormState(createUser, initialState)
  
    return (
      <form action={formAction}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required />
        {/* ... */}
        <p>
          {state?.message}
        </p>
        <button>Sign up</button>
      </form>
    )
  }
  ```

### 에러 처리
* 에러가 발생하면 가까운 error.js나 <Subpense> 에서 처리됨
* try/catch로 에러 처리를 권장
  ```tsx
  'use server'
  
  export async function createTodo(prevState: any, formData: FormData) {
    try {
      // Mutate data
    } catch (e) {
      throw new Error('Failed to create task')
    }
  }
  ```

### 데이터 재검증
* 서버 액션 작업이 완료되면 기존 캐시된 GET 요청의 결과를 revalidate 해야 갱신된 데이터로 다시 조회 가능
  - revalidatePath(), revalidateTag()
  ```tsx
  'use server'
  
  import { revalidateTag } from 'next/cache'
  
  export async function createPost() {
    try {
      // ...
    } catch (error) {
      // ...
    }
    revalidatePath('/posts')
    // 또는
    revalidateTag('posts')
  }
  ```

### 리디렉션
* 서버 액션 완료 후 다른 페이지로 이동 시 redirect 사용
  ```tsx
  'use server'
  
  import { redirect } from 'next/navigation'
  import { revalidateTag } from 'next/cache'
  
  export async function createPost(id: string) {
    try {
      // ...
    } catch (error) {
      // ...
    }
  
    revalidateTag('posts') // Update cached posts
    redirect(`/post/${id}`) // Navigate to the new post page
  }
  ```

### 쿠키 관리
* 서버 액션 내부에서 cookies API의 get, set, delete 사용
  ```tsx
  'use server'
  
  import { cookies } from 'next/headers'
  
  export async function exampleAction() {
    // Get cookie
    const value = cookies().get('name')?.value
  
    // Set cookie
    cookies().set('name', 'Delba')
  
    // Delete cookie
    cookies().delete('name')
  }
  ```

### 클로저와 암호화
* 컴포넌트 내부에 서버 액션을 정의하면 클로저 생성
* 클로저는 컴포넌트 내부의 변수 접근 가능
* 서버 액션이 호출 될 때마다 컴포넌트 내부 변수를 계속 사용해야 하므로 이 변수는 클라이어트와 서버간의 상태와 컨텍스트 유지를 위해 클라이언트로 전송되었다가 서버 액션이 호출되면 다시 서버로 전송되는데 이때 클라이언트에 민감한 값을 노출하지 않도록 자체 암호화되어 관리됨


## 5.3 fetch 패턴과 모범 사례
### 서버 컴포넌트 사용
* 가능한 서버 컴포넌트를 사용해서 데이터 가져오기
  - 백엔드 데이터 리소스(DB 등)에 직접 액세스 가능
  - API 키나 액세스 토큰 같은 민감한 정보가 클라이언트에 노출되지 않음
  - 데이터 처리와 렌더링이 서버에서 발생하고 클라이언트는 HTML을 받기 때문에 렌더링 과정 없이 응답받은 HTML을 화면에 보여주기만 하면 되므로 메인 스레드 작업이 줄어듬
  - 클라이언트에서 여러번 요청할 작업을 한번의 요청으로 모든 데이터를 가져올 수 있음
    + 폭포수 현상을 줄임
    + Next.js 서버와 데이터 리소스(DB 등)가 보통 지리적으로 가까운 곳에 있기 때문에 네트워크 지연시간을 줄임
  - fetch API는 자동으로 서버측에 캐싱이되므로 여러 클라이언트의 동일한 요청에 대해 데이터 리소스를 다시 가져올 필요 없이 캐시된 컨텐츠를 제공해서 빠름

### 컴포넌트 트리간 동일한 데이터 전달하지 않기
* 트리의 여러 컴포넌트가 동일한 데이터를 사용할 경우 하나의 컴포넌트에서 데이터를 가져온 후 props로 전달할 필요 없이 각 컴포넌트가 필요한 데이터를 직접 가져오도록 구성
  - 동일한 데이터를 여러번 요청해도 fetch의 메모이제이션에 의해 실제로 fetch가 여러번 발생하지 않음

### 스트리밍과 서스펜스 활용
* 서버 컴포넌트와 중첩 레이아웃을 사용하면 데이터가 필요 없는 부분을 즉시 렌더링 하고 데이터를 가져오는 부분에는 로딩중 상태를 표시

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/server-rendering-with-streaming.avif">

### 병렬 및 순차 fetch

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/sequential-parallel-data-fetching.avif">

### 순차적 fetch
* 이전 fetch 작업 후 다음 fetch 작업을 하기 때문에 폭포 생성
* 다음 데이터를 가져올 때 이전 데이터가 필요한 경우 사용(성능 저하)
* loading 페이지나 <Suspense>를 사용해서 데이터 스트리밍 중에 로딩중 상태를 보여주면 전체가 블로킹 되는 문제를 막을 수 있음
  - 사용자는 로딩된 컨텐츠에 대해서는 작업 수행 가능
  ```tsx
  // ...

  async function Playlists({ artistID }: { artistID: string }) {
    // Wait for the playlists
    const playlists = await getArtistPlaylists(artistID)
  
    return (
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    )
  }
  
  export default async function Page({
    params: { username },
  }: {
    params: { username: string }
  }) {
    // Wait for the artist
    const artist = await getArtist(username)
  
    return (
      <>
        <h1>{artist.name}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Playlists artistID={artist.id} />
        </Suspense>
      </>
    )
  }
  ```

### 병렬 fetch
* 데이터 가져오기 작업을 동시에 호출
* 데이터간 종속성이 없을 경우 사용(성능 향상)

```tsx
import Albums from './albums'
 
async function getArtist(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}`)
  return res.json()
}
 
async function getArtistAlbums(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`)
  return res.json()
}
 
export default async function Page({
  params: { username },
}: {
  params: { username: string }
}) {
  // Initiate both requests in parallel
  const artistData = getArtist(username)
  const albumsData = getArtistAlbums(username)
 
  // Wait for the promises to resolve
  const [artist, albums] = await Promise.all([artistData, albumsData])
 
  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums}></Albums>
    </>
  )
}
```

# 6. 서버 컴포넌트와 클라이언트 컴포넌트
* 렌더링: 리액트 컴포넌트(JS + JSX)를 호출해서 HTML 코드를 만드는 작업

## 6.1 클라이언트와 서버
### 렌더링 환경
* 클라이언트: 웹 브라우저
* 서버: 클라이언트의 요청을 받아서 응답을 보내는 컴퓨터
* 클라이언트 사이드 렌더링(Client Side Rendering, CSR): 렌더링의 주체가 클라이언트
* 서버 사이드 렌더링(Server Side Rendering, SSR): 렌더링의 주체가 서버


### 요청-응답 수명주기
1. 사용자
  - 주소창에 주소 입력, 버튼 클릭, 페이지 스크롤, input 요소에 데이터 입력 등의 액션을 발생
2. 클라이언트
  - 클라이언트가 요청 헤더와 바디에 정보를 포함해서 서버에 HTTP 요청을 보냄
3. 서버
  - 클라이언트의 요청 헤더와 바디를 꺼내고 분석해서 요청 사항을 처리하고 결과를 응답헤더와 바디에 포함해서 클라이언트에 보냄 
4. 클라이언트
  - 서버로부터 받은 응답 데이터를 꺼내서 사용자에게 적절한 UI로 보여줌
5. 사용자
  - 페이지와 상호 작용할 수 있는 상태

### 네트워크 경계
* 클라이언트(웹 브라우저), 서버(Next.js), API 서버, DB 등 서로 다른 환경을 구분하는 개념
* React는 클라이언트 사이드 렌더링으로 동작
* Next.js는 클라이언트, 서버 사이드 렌더링으로 동작



## 6.2 웹 개발의 변천사

### 전통적인 웹 애플리케이션
* JSP, Servlet, ASP, PHP 등으로 개발
* 브라우저는 페이지 단위로 요청을 보내며 웹서버는 완성된 페이지를(HTML) 응답
* 화면(View, UI)를 만드는 역할을 백엔드의 웹서버가 전담
* 브라우저 화면의 일부만 갱신이 필요한 경우에도 페이지 전체를 서버에 요청해서 받아오므로 매번 리플래시 발생해서 UX에 부정적

### 멀티 페이지 애플리케이션
* Ajax, jQuery 등 클라이언트 자바스크립트 API 사용
* 서버에 페이지 단위로 요청하지만 같은 페이지 내에서의 갱신은 Ajax를 이용해서 서버와 통신후 DOM API로 리플래시 없이 화면 갱신
* 전체 화면 리플래시가 줄어들어서 사용자 UX에 긍정적

### 단일 페이지 애플리케이션(SPA, Single Page Application)
* 하나의 HTML 페이지에서 애플리케이션의 모든 화면과 기능 제공
* 브라우저가 최초로 접속했을 때 어플리케이션에 필요한 모든 자바스크립트 코드를 다운로드 받고 페이지 이동시 history API를 이용해서 리플래시 없어 모든 화면을 서비스
* 화면(View, UI)를 만드는 역할을 웹 브라우저의 자바스크립트가 담당
* 단점
  - 모든 기능을 한 페이지에서 다 구현하다 보니 상태(데이터) 관리가 어려움
  - 자바스크립트에서 HTML 코드를 생성해야 하므로 개발 생산성 저하
  - 브라우저의 DOM을 자주 갱신하다보면 성능 저하 발생
* React의 특징
  - 컴포넌트 별로 상태 관리가 가능하고 글로벌 상태 관리를 지원하는 서드파티 라이브러리가 많음
  - JSX를 이용해서 HTML 생산성이 높음
  - 가상 DOM을 이용해서 성능 저하 최소
* React의 단점
  - 최초에 로딩할 자바스크립트 용량이 커서 초기 화면을 보여주기까지의 시간이 오래 걸림



## 6.3 서버 컴포넌트
### CSR vs. SSR
#### CSR(Client Side Rendering)
  - 리액트의 동작 방식
  - 클라이언트가 최초로 접속하면 head에 css, js 파일이 정의되어 있고 body가 비어있는 HTML 응답
  - 클라이언트가 HTML을 파싱하면서 css, js 파일을 서버에 추가로 요청하고 다운로드 완료되면 js 파일을 이용해서 HTML 생성
  - 이후 페이지 이동 시 처음에 받은 js 파일에서 모든 HTML 생성하고 동적으로 화면을 바꾸므로 SPA로 동작
  - 초기 js 로딩에 시간이 걸림
  - SEO 안됨
#### SSR(Server Side Rendering)
* 초기 페이지 로딩 시간과 SEO(Search Engine Optimization)를 개선하기 위해 서버에서 HTML을 생성하고 클라이언트에 전송
1. 초기 페이지 로드
  - 사용자가 웹사이트를 처음 접속할 때 서버는 해당 페이지의 HTML을 생성하고(렌더링) 브라우저에 응답
2. 자바스크립트 다운로드
  - 브라우저는 서버로부터 받은 HTML을 파싱하면서 현재 페이지의 동작에 필요한 자바스크립트를 다운로드 후 실행
3. 정적인 페이지 뷰
  - 자바스크립트 다운로드 중에 HTML 파싱이 완료되면 즉, DOM 생성 후 화면에 출력하면 정적인 상태의 화면을 사용자가 볼 수 있음
  - 전체 내용이 로드되기 전이라도 사용자가 링크를 클릭해서 다른 페이지로 이동을 할 수 있음
4. 하이드레이션
  - 다운로드 받은 자바스크립트를 이용해서 가상 DOM을 만들고 실제 DOM과 동기화 시키고 이벤트 추가 등의 작업이 끝나면 사용자와 상호작용 가능한 상태가 됨
5. 리액트 앱으로 동작
  - 하이드레이션이 끝나면 일반적인 리액트 앱으로 동작

* SSR을 지원하는 리액트 프레임워크로 Getsby, Remix, Next.js 등이 있음

#### SSR의 장점
* 첫 페이지 로딩이 빨라짐
  - CSR은 자바스크립트를 다운로드 한 후 리액트 컴포넌트로 렌더링되어야 화면에 보임
  - SSR은 일단 HTML 먼저 응답하므로 정적인 레이아웃을 바로 보여줄 수 있음
* 효율적인 SEO 가능

### SSR vs. RSC(React Server Component)
* SSR은 페이지 단위, RSC는 컴포넌트 단위
* Next.js의 page 라우터가 SSR 방식, app 라우터가 RSC 방식
* SSR은 page 단위에서만 서버 관련 함수 사용
  - getServerSideProps 내에서 데이터 받아오고 데이터를 렌더링할 컴포넌트에는 props로 전달
* RSC는 데이터를 렌더링할 컴포넌트에서 직접 서버 관련 함수 사용
  - 관심사 분리: page 컴포넌트는 UI, 데이터는 하위 컴포넌트에서 직접 생성
  - props 드릴링 없음
  - 컴포넌트 단위로 SSR 전략을 선택할 수 있음(SSG, SSR, ISR)
* 페이지 내에서 자주 바뀌는 컴포넌트가 하나 있으면 SSR은 해당 페이지에 접속할 때 매번 모든 컴포넌트를 동적으로 서버에서 렌더링 함
  - RSC는 해당 컴포넌트만 동적으로 렌더링 함

#### Next.js RSC의 장점
* 백엔드 데이터 리소스(DB 등)에 직접 액세스 가능
  - 백엔드 개발 가능
  - RSC가 없던 Next.js 13이전에는 페이지 루트에서만 백엔드 접근이 가능했었지만 RSC는 컴포넌트 단위의 백엔드 접근이 가능
* 클라이언트에서 여러번 데이터 요청을 하지 않고 한번의 요청으로 모든 데이터를 가져올 수 있음
  - 폭포수 현상을 줄임
  - Next.js 서버와 데이터 리소스(DB 등)가 보통 지리적으로 가까운 곳에 있기 때문에 네트워크 지연시간을 줄임
* API 키나 액세스 토큰 같은 민감한 정보가 클라이언트에 노출되지 않음
* fetch API는 자동으로 서버측에 캐싱이되므로 여러 클라이언트의 동일한 요청에 대해 데이터 리소스를 다시 가져올 필요 없이 캐시된 컨텐츠를 제공해서 빠르고 서버 자원 낭비가 줄어듬
* 클라이언트로 번들링되어 전송되는 자바스크립트 크기가 줄어듬
  - 서버에서만 실행되기 때문에 클라이언트로 코드를 전송할 필요 없음(로직, 라이브러리)
* FCP(First Contentful Paint)가 단축됨
  - HTML을 서버에서 만들어 주기때문에 인터렉션에 필요한 자바스크립트를 실행하기 전이라도 화면에 보여줄 수 있음
* SEO에 유리
* 렌더링 작업을 청크로 분할해서 스트리밍하면 클라이언트는 전체 HTML을 다 받기전에도 페이지의 일부를 보여줄 수 있음
* 코드 자동 분할


### 서버 컴포넌트 vs. 클라이언트 컴포넌트
#### 서버 컴포넌트
* Next.js의 app 라우터를 사용하면 모든 컴포넌트는 기본으로 서버 컴포넌트가 됨


##### 서버 컴포넌트의 렌더링
*** RSC 페이로드 -> 렌더링??? 아니면 렌더링 -> RSV 페이로드???
1. 라우트 세그먼트를 기준으로 각 세그먼트의 렌더링 작업 시작
  - /posts/3일 경우 /posts, /3 두개의 세그먼트로 나뉨
2. 각 라우트 세그먼트의 대상 컴포넌트는 렌더링에 필요한 데이터를 만들고(fetch) RSC Payload 생성
  - loading 파일이 있거나 Suspense가 있다면 해당 위치에 fallback UI를 렌더링
    + 이후 데이터 패칭이 완료되면 추가 데이터를 스트리밍 방식으로 전송
  - RSC Payload: 서버에서 렌더링된 컴포넌트 트리 구조(클라이언트 컴포넌트가 들어갈 자리 표시), 클라이언트에서 사용할 자바스크립트 파일 경로, 서버 컴포넌트에서 클라이언트 컴포넌트에 전달하는 props 데이터를 표현한 특수한 포맷의 데이터
3. RSC Payload를 기반으로 HTML 생성
4. HTML과 RSC Payload를 클라이언트에 전송
  - HTML은 브라우저 자체의 렌더링으로 빠르게 화면 표시
  - HTML만 가지고 화면을 보여줬기 때문에 사용자와의 인터렉션이 되지 않는 상태
5. 인터렉션을 위한 하이드레이션 시작
  - 클라이언트 컴포넌트 다운로드
  - 리엑트 앱으로 동작시키기 위해 RSC Payload 정보를 이용해서 Virtual DOM을 생성, Real DOM과 동기화 시키고 이벤트 핸들러를 등록해서 사용자와 인터렉션이 가능한 상태로 만듬

#### 클라이언트 컴포넌트
* 파일의 첫줄에 'use client' 지시어 추가
* 브라우저에서 실행되는 컴포넌트로 브라우저에서만 할 수 있는 작업이 필요한 경우 클라이언트 컴포넌트로 만들어야 함
  - 이벤트 리스너, DOM 직접 핸들링
  - useState, useEffect 등 상태와 라이프사이클 관련 기능
  - 브라우저 API(window, document, localStorage, geolocation 등) 사용
* 클라이언트 컴포넌트의 하위 모든 컴포넌트는 클라이언트 컴포넌트가 되고 자바스크립트 번들에 포함되어 클라이언트로 전송됨
* 클라이언트 컴포넌트는 서버 컴포넌트를 import 할수 없지만 children으로 포함하는건 가능

##### 클라이언트 컴포넌트의 렌더링
* 전체 페이지 로드일 경우
  - 초기 접속이나 새로고침 등으로 페이지가 로드될 때
  - 서버는 서버 컴포넌트와 클라이언트 컴포넌트 모두 렌더링해서 HTML 생성 후 응답
* Link로 이동할 경우
  - 새로고침 없이 클라이언트에서 렌더링

### Next.js의 RSC(React Server Component) 렌더링 방식
#### 정적 렌더링(Static Rendering)
* SSG(Static Site Generation)
* 빌드 시점에 서버측에서 HTML을 생성하고 클라이언트 요청시 미리 생성된 HTML을 바로 응답하므로 빠름
* 데이터가 바뀌지 않는 정적인 페이지에 사용
#### 동적 렌더링(Dynamic Rendering)
* 클라이언트 요청시 매번 HTML을 생성해서 응답하므로 느림
* 최신 데이터를 반영해야 하거나 사용자 맞춤형 데이터가 있는 동적인 페이지에 사용
#### 스트리밍(Streaming)
* 서버의 작업이 완료되지 않더라도 응답이 여러 청크로 분할되어 클라이언트로 스트리밍 됨
* 클라이언트는 전체 렌더링이 완료되기 전에 페이지의 일부를 즉시 볼 수 있음
* 앱 라우터를 사용하면 기본으로 동작
#### ISR(Imcremental Static Regeneration)
* 정적으로 렌더링 된 이후에 일정 시간이 지나면 다시 서버에서 렌더링 됨


<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/sequential-parallel-data-fetching.avif">

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/server-rendering-with-streaming.avif">








* 클라이언트는 서버에서 응답받은 HTML을 화면에 바로 보여줌
* 
 다음 일반적인 리액트 앱처럼 작동하기 위해서

#### 사전 렌더링(Pre Rendering)
* 빌드 시점에 HTML을 생성하고 클라이언트 요청시 미리 생성된 HTML을 바로 응답

#### 클라이언트 사이드 렌더링(Client Side Rendering)
* 클라이언트에서 렌더링 수행

#### 서버 사이드 렌더링(Server Side Rendering)

### 서버 사이드 렌더링 전략
  - 정적 렌더링(Static Rendering)
  - 동적 렌더링(Dynamic Rendering)
  - 스트리밍(Streaming)

### SSR의 장점

### 서버 컴포넌트 만드는 방법

### 서버 컴포넌트의 렌더링

### 서버 렌더링 전략
#### 정적 렌더링

#### 동적 렌더링

#### 스트리밍



## 6.4 서버, 클라이언트 구성 패턴


## 6.5 Edge와 Node.js 런타임
* Edge는 Node.js의 경량화 버전으로 빠르지만 Node.js의 fs 모듈이나 모든 npm 패키지를 지원하지 않음
* 빠른 시작을 위해 최소한의 리소스를 사용하므로 패키지 파일 사이즈가 제한될 수 있음
* Static Rendering 지원 안함
* layout이나 page에서 정의
  ```tsx
  export const runtime = 'edge' // 'nodejs' (default) | 'edge'
  ```

# 7. 캐싱

### 데이터 캐싱
* fetch의 반환값을 서버의 데이터 캐시에 자동으로 캐시
  - 빌드시, 요청시 데이터를 캐시하고 재사용
    ```ts
    // 'force-cache'는 기본값이므로 생략 가능
    fetch('https://...', { cache: 'force-cache' });
    ```
  - 캐시되지 않는 예외 사항
    + 서버 액션
    + POST 라우트 핸들러

* 캐시 미적용
  - fetch의 cache: 'no-store' 속성 사용
    ```tsx
    fetch(`https://...`, { cache: 'no-store' });
    ```

  - layout, page의 Route Segment Config Options 사용하면 layout이나 page 내의 모든 요청에 적용됨(layout에 적용하니 하위 모든 페이지가 Dynamic 컴포넌트가 되고 적용 안하면 Static 컴포넌트가 됨. 확인 필요)
    ```tsx
    export const dynamic = 'force-dynamic'; // 외부 라이브러리에서도 캐시 안하도록 설정됨
    ```
#### 캐시 미적용 옵션
```tsx
// fetch의 { cache: 'no-store' } 옵션
fetch(`https://...`, { cache: 'no-store' });

// fetch의 { next: { revalidate: 0 } } 옵션
fetch('https://...', { next: { revalidate: 0 } });

// POST 라우터 핸들러 내부의 fecth 요청 
export async function POST(request: Request) {
  fetch('https://...');
}

// header나 cookies 속성을 사용
// header나 cookie를 꺼내는 작업은 동적 함수이므로 해당 컴포넌트는 동적 렌더링이 됨
const cookieStore = cookies();
const headersList = headers();

// Route Segment Config Option의 dynamic 속성으로 force-dynamic 사용
export const dynamic = 'force-dynamic';

// Route Segment Config Option의 fetchCache 속성으로 *-no-store 사용
export const fetchCache = 'force-no-store'; // 캐시 무시하고 항상 새로운 데이터 가져옴
export const fetchCache = 'only-no-store'; // 캐시가 없을 경우에만 새로운 데이터 가져옴
export const fetchCache = 'default-no-store'; // 기본적으로 캐시를 사용안함. 다른 옵션으로 활성화 가능

// fetch 요청에 Authorization 이나 Cookie 헤더를 사용할 경우 사용자별로 다른 토큰이나 세션 id를 가질수 있으므로 캐시하면 안됨
// 확인 필요
fetch('https://...', {
  headers: {
    'Authorization': `Bearer ${Date.now()}`
  }
});
```



* 미들웨어에서는 캐시 안됨
* 데이터 캐시와 fetch 메모이제이션의 차이점
  - 둘다 프로덕션에서만 동작
  - 데이터 캐시는 여러 요청에 걸쳐서 동작
  - 메모이제이션은 컴포넌트 트리가 렌더링 되는 동안에만 동작
    + 렌더링 될때 호출되는 여러 컴포넌트가 동일한 URL과 옵션으로 fetch 요청을 보내면 최초 요청의 응답을 저장하고 이후의 요청에는 저장된 응답이 사용된 후 렌더링이 끝나면 삭제됨
  - 데이터 캐시는 비활성화 하거나 재검증 시 서버에 다시 요청
  - 메모이제이션은 임시 캐시이므로 다음 렌더링 작업이 발생하면 항상 서버에 다시 요청
  - 메모이제이션 -> 데이터 캐시 -> 데이터 소스 순으로 확인

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/request-memoization.avif">

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/data-cache.avif">

#### 캐시 재검증
* 데이터 캐시를 제거하고 최신 데이터를 다시 가져오는 프로세스
* 재검증 시도시 오류가 발생하면 마지막 성공한 데이터 캐시를 사용하고 다음 요청에서 재검증을 다시 시도
* 시간 기반 재검증: next.revalidate 옵션으로 초단위 시간 설정
  ```tsx
  fetch('https://...', { next: { revalidate: 3600 } });
  ```
  ```tsx
  export const revalidate = 3600;
  ```

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/time-based-revalidation.avif">

* 요청시 재검증
  - 지정한 경로의 서버 라우터 캐시 무효화
  - 모든 클라이언트 라우터 캐시 무효화(특정 경로만 무효화 하도록 업데이트 예정)
    ```tsx
    // /posts/page.tsx
    const res = await fetch(`https://api.frontendschool.shop/api/posts?type=qna`, {
      next: { tags: ['boards', 'qna'] }
    });
    revalidateTag('boards'); // boards 태그가 붙어있는 캐시 삭제
    revalidateTag('qna'); // qna 태그가 붙어있는 캐시 삭제
    revalidatePath('/posts'); // /posts URL의 캐시 삭제
    ```

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/on-demand-revalidation.avif">



##### Full Route Cache
* 서버 컴포넌트 페이로드
  - 서버측에서 렌더링된 컴포넌트의 데이터를 포함하여 클라이언트에게 전달되는 정보
  - HTML 마크업: 서버에서 렌더링된 결과. 클라이언트는 이 HTML을 화면에 표시
  - 상태 데이터: 초기 상태 데이터로 클라이언트에서 바로 사용 가능
  - 컴포넌트 트리: 렌더링 된 컴포넌트의 트리 구조와 각 컴포넌트의 상태. 클라이언트는 이 트리 구조를 이용해서 동적으로 페이지 업데이트 가능
  - CSS/Javascript: 자동으로 최적화하여 전송

#### 서버에서 외부 라이브러리 사용(axios)
#### 클라이언트에서 라우트 핸들러 호출
#### 클라이언트에서 외부 라이브러리 사용(axios)






# 스타일링
  - CSS Module
  - Tailwind CSS
  - CSS-in-JS
  - Sass

# 최적화
  - 이미지
  - 비디오
  - 폰트
  - 메타데이터
  - 스크립트
  - 레이지 로딩

# 설정

# 테스트

# 인증
## Authentication, 인증
* 신원 확인
* 아이디, 비밀번호로 로그인
* 구글, 네이버, 카카오 로그인
### 전략
* OAuth/OpenID Connect(OIDC)
  - 소셜 로그인, Single Sign-On(SSO)
* 로그인(이메일 + 비밀번호)
  - 일반적인 웹 애플리케이션의 인증 방법
* 비밀번호 없는 토큰 기반 인증
  - 일회성 이메일 링크나 SMS 링크 등을 통해서 인증
  - 비밀번호 재설정 링크
* Pssskeys/WebAuthn
  - 안전하지만 구현 복잡

### 인증 구현
* 로그인 페이지
```tsx
import { authenticate } from '@/app/lib/actions'
 
export default function Page() {
  return (
    <form action={authenticate}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}
```

* 인증 공급자의 API 호출
```ts
'use server'
 
import { signIn } from '@/auth'
 
export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
```

* 결과 처리
```tsx
'use client'
 
import { authenticate } from '@/app/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
 
export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
 
  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  )
}
 
function LoginButton() {
  const { pending } = useFormStatus()
 
  const handleClick = (event) => {
    if (pending) {
      event.preventDefault()
    }
  }
 
  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  )
}
```

## Authorization, 인가: 권한 확인
* 인증 받은 사용자가 특정 작업에 대해 수행이 가능한지 여부를 확인
  - 게시묵 목록, 상세 조회는 누구나 가능
  - 게시물 수정, 삭제는 본인의 게시물에 한해서만 가능
  - 판매 회원만 상품 등록 가능
* Next.js의 미들웨어를 이용해서 구현

### 미들웨어 구현 방법
#### 미들웨어 설정
* 루트 디렉토리에 middleware.ts 파일 생성
* 토큰 확인 등을 통해 사용자 엑세스를 승인하는 로직 작성

#### 보호된 경로 정의
* 미들웨어의 matcher 옵션으로 인가가 필요하지 않은 경로를 지정

#### 미들웨어 로직 작성
* 인증 여부를 확인하는 로직 작성

#### 무단 접근 처리
* 승인되지 않은 사용자는 오류 페이지를 보여주거나 로그인 페이지로 이동

```jsx
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
 
  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
 
  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
```

```tsx
import { redirect } from 'next/navigation'
 
export default function Page() {
  // Logic to determine if a redirect is needed
  const accessDenied = true
  if (accessDenied) {
    redirect('/login')
  }
 
  // Define other routes and logic
}
```

### 리소스 보호
#### 서버 액션
```jsx
'use server'
 
// ...
 
export async function serverAction() {
  const session = await getSession()
  const userRole = session?.user?.role
 
  // Check if user is authorized to perform the action
  if (userRole !== 'admin') {
    throw new Error('Unauthorized access: User does not have admin privileges.')
  }
 
  // Proceed with the action for authorized users
  // ... implementation of the action
}
```

#### 라우트 핸들러
```tsx
export async function GET() {
  // User authentication and role verification
  const session = await getSession()
 
  // Check if the user is authenticated
  if (!session) {
    return new Response(null, { status: 401 }) // User is not authenticated
  }
 
  // Check if the user has the 'admin' role
  if (session.user.role !== 'admin') {
    return new Response(null, { status: 403 }) // User is authenticated but does not have the right permissions
  }
 
  // Data fetching for authorized users
}
```

#### 서버 컴포넌트
```tsx
export default async function Dashboard() {
  const session = await getSession()
  const userRole = session?.user?.role // Assuming 'role' is part of the session object
 
  if (userRole === 'admin') {
    return <AdminDashboard /> // Component for admin users
  } else if (userRole === 'user') {
    return <UserDashboard /> // Component for regular users
  } else {
    return <AccessDenied /> // Component shown for unauthorized access
  }
}
```

## Auth.js
* 설치
```sh
npm install next-auth@beta
```

* AUTH_SECRET 환경 변수 생성
```sh
npx auth secret
# openssl rand -base64 33 명령으로 생성하는 효과
``

* Auth.js 구성 파일
  - src/auth.ts

```ts
import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```

* 라우트 핸들러 추가
  - app/api/auth/[...nextauth]/route.ts

```ts
import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
```

* 세션 만료시간 갱신
  - src/middleware.ts
```ts
export { auth as middleware } from "@/auth"
```


# 배포

* 클라이언트 사이드 렌더링(CSR)과 서버 사이드 렌더링(SSR)
* 리액트 서버 컴포넌트(RSC)
* 정적 렌더링과 동적 렌더링
* 스트리밍


* 렌더링
  - 서버 컴포넌트
  - 클라이언트 컴포넌트
  - 컴포넌트 패턴


* import 'server-only'는 서버 컴포넌트로만 동작하도록 하는 설정???