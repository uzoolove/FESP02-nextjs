# 1. Next.js 개요
## 1.1 Next.js란?
* 풀스택 웹 애플리케이션을 구축하기 위한 React 프레임워크
* 프레임워크
  - 소프트웨어 개발에 필요한 공통의 구조를 제시하고 공통의 기능을 제공
  - 개발 방식이나 프로젝트 구조를 강제하기 때문에 라이브러리에 비해 자유도가 떨어지지만 프레임워크가 제공하는 공통 기능을 잘 활용하면 개발 생산성 향상

## 1.2 주요 특징
* 라우팅: 레이아웃, 중첩 라우팅, 로딩 상태, 오류 처리 등을 지원하는 파일 시스템 기반 라우터 제공
  - 페이지 라우터(pages): 이전 방식의 라우터
  - 앱 라우터(app): 서버 컴포넌트, 스트리밍 같은 최신 React 기능을 사용할 수 있으므로 페이지 라우터 대신 사용을 권장(Next.js 13.4에서 정식 도입. 2023-05-04)
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
  cd workspace
  mkdir 01.manual
  cd 01.manual
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

### 라우터 디렉토리 생성
* app 디렉토리(권장): App 라우터 사용
* pages 디렉토리: Pages 라우터 사용

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fapp-getting-started.png&w=1920&q=75">

### app/layout.tsx 파일 생성
* 루트 레이아웃
  ```tsx
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ko">
        <body>{children}</body>
      </html>
    )
  }
  ```
  - layout 파일을 만들지 않으면 개발서버 구동시 자동으로 생성됨

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
  * Next.js 프로젝트를 위한 tsconfig.json, next-env.d.ts 파일이 자동으로 생성됨

### 테스트
* http://localhost:3000

## 2.2 자동 구성
### create-next-app
```sh
npx create-next-app@latest
```

* What is your project named? 02.cna
* Would you like to use TypeScript? No / __Yes__
* Would you like to use ESLint? No / __Yes__
* Would you like to use Tailwind CSS? No / __Yes__
* Would you like to use 'src/' directory? No / __Yes__
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
<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ftop-level-folders.png&w=1920&q=75">

* app: 앱 라우터
* pages: 페이지 라우터
* public: 정적 컨텐츠
* src: 소스 폴더를 따로 관리할 때 사용

## 3.2 루트 파일
* next-env.d.ts: Next.js용 타입스크립트 선언 파일
* next.config.js: Next.js 설정 파일
* package.json: 프로젝트 종속성 및 스크립트
* tsconfig.json: 타입스크립트 설정 파일

## 3.3 app 라우터 규칙
* app 폴더 하위에 존재하는 파일이나 폴더 규칙
### 라우팅용 특수 파일
* layout.js: 동일 폴더와 하위 폴더 page의 레이아웃을 정의
* page.js: 페이지 UI
* loading.js: 페이지 로딩 중에 표시되는 UI
* not-found.js: 404 오류 페이지
* error.js: 일반 오류를 보여주는 페이지
* global-error.js: 전역 오류를 보여주는 페이지
* route.js: API 엔드포인트 정의
* template.js: 페이지 템플릿을 정의
* default.js: 대체 UI

### 폴더기반 라우팅
* 폴더명이 라우트 경로가 됨
* `folder`: 라우트 세그먼트
* `folder`/`folder`: 중첩된 라우트 세그먼트

#### 동적 라우팅
* `[folder]`: dynamic 세그먼트
* `[...folder]`: catch-all 세그먼트
* `[[...folder]]`: optional catch-all 세그먼트

#### 경로 그룹 및 프라이빗 폴더
* `(folder)`
* `_folder`

#### 병렬, 인터셉트 라우트
* `@folder`
* `(.)folder`
* `(..)folder`
* `(..)(..)folder`
* `(...)folder`

# 4. 라우팅
## 용어
<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fterminology-component-tree.png&w=1920&q=75">

* 트리(Tree): 계층 구조를 시각화하기 위한 용어. 부모와 자식 컴포넌트로 이루어진 컴포넌트 트리
* 서브트리(Subtree): 새로운 루트에서 리프까지 트리의 일부
* 루트(Root): 트리나 서브트리에서 첫 번째 노드. 루트 레이아웃, 루트 페이지
* 리프(Leaf): 트리의 마지막 노드로 자식이 없음. URL 경로의 마지막 세그먼트

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fterminology-url-anatomy.png&w=1920&q=75">

* URL 경로(Path): 도메인 이후의 URL 부분
* URL 세그먼트(Segment): 슬래시로 구분된 URL 경로의 일부

## 4.1 app 라우터
* 파일 시스템 기반 라우터
  - app 폴더 하위의 폴더명이 URL의 경로가 됨
* page 라우터에서는 지원하지 않는 공유 레이아웃, 중첩 라우팅, 로딩 상태, 에러 처리 등을 지원

## 4.2 경로 정의
* 경로에 해당하는 폴더 생성

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=1920&q=75">

* 생성한 폴더 하위에 라우팅 규칙과 관련된 특수 파일, CSS, 이미지 등의 파일 작성
  - page.js: 해당 경로로 접근했을 때 보여줄 페이지 정의
  - page 파일이 없는 폴더는 라우팅 되지 않음

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fdefining-routes.png&w=1920&q=75">


## 4.3 페이지와 레이아웃
### 페이지
* 클라이언트가 요청한 URL과 매칭되는 폴더 하위에 정의
* 클라이언트에 보여줄 화면 정의
* page.js, page.jsx, page.tsx로 작성

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fpage-special-file.png&w=1920&q=75">

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

### 레이아웃
* 레이아웃 파일이 있는 경로와 하위 경로의 page를 보여줄때 사용하는 공통의 UI 정의
  - page 파일을 래핑
* 하위 폴더의 layout과 중첩됨
* 생략 가능
* layout.js, layout.jsx, layout.tsx로 작성
* app/layout.tsx
  ```tsx
  import './globals.css';

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ko">
        <body className="flex flex-col h-screen">
          <header className="bg-blue-500 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/posts" className="hover:underline">게시판</a></li>
              </ul>
            </nav>
          </header>

          { children }
          
        </body>
      </html>
    );
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
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-48 bg-gray-800 text-white p-4 lg:w-64">
          <ul className="space-y-2">
            <li><a href="/posts" className="block hover:bg-gray-700 p-2 rounded">목록 조회</a></li>
            <li><a href="/posts/new" className="block hover:bg-gray-700 p-2 rounded">글쓰기</a></li>
          </ul>
        </aside>
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          { children }
        </main>
      </div>
    );
  }
  ```

#### 루트 레이아웃
* app 폴더 하위에 만들어야 하는 필수 layout 파일
* 모든 경로에 적용할 공통 UI 작성
* 루트 레이아웃에만 html, body 태그 포함 가능

### 메타데이터
* layout, page에서 metadata 변수나 generateMetadata 함수를 내보내기 하면 메타데이터 정의 가능
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
  export async function generateMetadata({ params }: { params: { id: string } }) {
    const id = params.id;
    const data = {
      title: `${id} 안녕하세요.`,
      content: '가입인사 합니다.'
    };

    return {
      title: data.title,
      description: data.content,
    };
  }
  ```

## 4.4 페이지 이동
### Link 컴포넌트
* a 태그 대신 사용
  - Link 컴포넌트는 렌더링 되면 a 태그로 바뀜

* app/layout.tsx 수정
  ```tsx
  import Link from "next/link";
  ...
  <li><Link href="/" className="hover:underline">Home</Link></li>
  <li><Link href="/about" lassName="hover:underline">About</Link></li>
  <li><Link href="/posts" className="hover:underline">게시판</Link></li>
  ...
  ```

* app/posts/layout.tsx 수정
  ```tsx
  import Link from "next/link";
  ...
  <li><Link href="/posts" className="block hover:bg-gray-700 p-2 rounded">목록 조회</Link></li>
  <li><Link href="/posts/new" className="block hover:bg-gray-700 p-2 rounded">글쓰기</Link></li>
  ...
  ```

#### 활성 링크 체크
* usePathname() 훅을 이용해서 url 확인 후 href와 비교

* app/globals.css 작성
  ```css
  .active {
    font-weight: bold;
    color: blue;
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
    const isActive = (path: string) => pathname === path ? 'cs-active' : '';

    return (
      <html lang="ko">
        <body className="flex flex-col h-screen">
          <header className="bg-blue-500 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className={`hover:underline ${ isActive('/') }`}>Home</Link></li>
                <li><Link href="/about" className={`hover:underline ${ isActive('/about') }`}>About</Link></li>
                <li><Link href="/posts" className={`hover:underline  ${ isActive('/posts') }`}>게시판</Link></li>
              </ul>
            </nav>
          </header>

          { children }
          
        </body>
      </html>
    );
  }
  ```

### useRouter 훅
* 클라이언트 컴포넌트에서 사용
* 프로그래밍 방식으로 페이지 이동 가능
* 꼭 필요한 경우가 아니라면 Link 컴포넌트 사용 권장

* app/posts/new/page.tsx 수정
  ```tsx
  'use client';
  import { useRouter } from "next/navigation";
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
* 기본적으로 307(Temporary Redirect, 원래 요청 방식과 본문으로 새로운 페이지 요청, 다음번 요청에도 이전 URI 사용) 응답 상태코드
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
  - window.history.pushState
  - window.history.replaceState
* usePathname(), useSearchParams() 훅으로 URL과 파라미터 추출해서 low-level로 URL 변경 가능
* useRouter() 훅을 사용하는게 페이지 전환 시 SSR, SSG, 데이터 패칭, 페이지 전환 효과 등 Next.js 기능을 활용할 수 있으므로 useRouter() 권장

### next.config.js의 redirects
* 선언적 redirect

  ```js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
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
          source: '/community/:slug',
          destination: '/posts/:slug',
          permanent: true,
        },
      ]
    }
  };

  export default nextConfig;
  ```

### NextResponse.redirect
* 미들웨어에서 사용
* 사용사례: 로그인되지 않은 사용자를 로그인 페이지로 이동
  ```ts
  import { NextResponse, NextRequest } from 'next/server';
  import { authenticate } from 'auth-provider';
  
  export function middleware(request: NextRequest) {
    const isAuthenticated = authenticate(request);
  
    // 인증된 사용자라면 원래의 요청작업 진행
    if (isAuthenticated) {
      return NextResponse.next();
    }
  
    // 인증되지 않은 사용자라면 로그인 페이지로 이동
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  export const config = {
    matcher: '/posts/new*',
  }
  ```

## 4.5 라우팅 작동 방식

### 코드 분할
* 서버 컴포넌트를 사용하면 경로별로 코드를 작은 번들로 분할해서 브라우저가 다운로드하고 실행할 수 있으므로 데이터의 양과 응답시간이 줄어들어 성능 향상

### Prefetching
* 다음의 두 경우 링크를 누르기 전에 페이지를 미리 로드
* 프로덕션 환경에서만 활성화 됨

#### ```<Link>``` 컴포넌트
* 링크가 사용자의 화면에 표시되면 자동으로 페이지를 미리 가져옴

* prefetch 속성에 따라서 다르게 동작
* prefetch 속성이 false일 경우 동작 안함
* prefetch 속성이 true로 지정될 경우
  - 정적 라우트와 동적 라우트 모두 다 전체 페이지를 미리 가져옴(5분 동안 캐시됨)
  - 링크가 화면에 보이지 않더라도 프리페칭 시작
* prefetch 속성이 null값인 경우(기본값)
  - 정적 라우트일 경우 전체 페이지가 프리페치되어 캐시됨
  - 동적 라우트일 경우 렌더링된 컴포넌트 트리에서 첫번째 loading.js 파일이 나타날 때까지만 데이터를 미리 가져옴(30초 동안 캐시됨)
    + 실제 페이지를 요청할 때 로딩 상태를 즉시 보여 주고 이후의 내용을 가져옴
* 프리페칭된 데이터와 레이아웃은 30초 동안 라우터 캐시에 저장됨
  - 라우터 캐시는 비활성화 시킬 수 없음
  - router.refresh() 호출 시 라우터 캐시 삭제

#### router.prefetch()
* useRouter 훅을 사용하여 프로그래밍 방식으로 링크를 미리 가져올 수 있음

### 부분 렌더링
* 페이지 이동시 공유 레이아웃은 유지한 채로 변경된 페이지만 렌더링
* /posts/3 -> /posts/2로 이동시 app/layout.js, app/posts/layout.js는 다시 렌더링 하지 않음

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fpartial-rendering.png&w=1920&q=75">

### 이전/이후 페이지 이동
* 스크롤을 유지하고 라우터 캐시를 재사용

## 4.6 로딩중 페이지와 스트리밍
### loading.js
* 내부적으로 React Suspense를 사용하여 컨텐츠가 로드되는 동안 대체할 컴포넌트로 사용됨
* 렌더링이 완료되면 완료된 컴포넌트로 자동 교체
* 로딩중 상태에서도 공유 레이아웃 사용 가능

* app/posts/loading.tsx 작성
  ```tsx
  export default function Loading() {
    return <div>로딩중...</div>
  }
  ```

* loading 파일과 같은 폴더에 있는 layout 파일에 page를 <Suspense>로 감싼 것처럼 동작
  ```tsx
  <Suspense fallback={<Loading />}>
    { children }
  </Suspense>
  ```

* app/posts/paage.tsx 수정
  ```tsx
  export default async function Page(){
    await new Promise(resolve => setTimeout(resolve, 1000*3));
    return ( ... );
  }
  ```

<img src="https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Floading-overview.png&w=1920&q=75">

### 서스펜스를 이용한 스트리밍
* SSR을 사용하면 서버에서 페이지에 필요한 모든 데이터를 생성한 후 완성된 HTML을 전송하는데 까지 시간이 오래걸림
* <Suspense>를 통해 스트리밍을 활성화하면 서버에서 레이아웃이나 중요 데이터를 먼저 전송할 수 있으며 클라이언트는 페이지의 일부를 더 빨리 표시할 수 있음
  - 하나의 response로 나머지 데이터도 이어서 받음

### SEO
* generateMetadata 함수는 페이지의 메타데이터를 생성하는 데 사용됨
* 메타데이터는 주로 <head> 태그 내에 포함되는 title, description, keyword 등의 정보
* 메타데이터는 SEO(검색 엔진 최적화)에 중요한 역할을 하며, 소셜 미디어 공유 시에도 사용됨
* generateMetadata 함수 내에서 데이터를 fetching하는 경우, Next.js는 이 데이터 fetching이 완료될 때까지 기다림
* 데이터 fetching이 완료된 후 메타데이터를 최종적으로 생성하고, 이 메타데이터를 포함한 <head> 태그를 클라이언트로 스트리밍하기 시작
* 클라이언트는 서버로부터 받은 초기 컨텐츠가 <head>를 포함하고 있기 때문에 검색엔진이 자바스크립트를 실행하지 않아도 완전한 메타데이터 확인 가능
