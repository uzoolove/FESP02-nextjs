# 12장 Next.js
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch12-nextjs>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#12>

## Next.js 개요
### Next.js란?
* 풀스택 웹 애플리케이션을 구축하기 위한 React 프레임워크(Vercel에서 개발)

### 주요 특징
* 라우팅: 레이아웃, 중첩 라우팅, 로딩 상태, 오류 처리 등을 지원하는 파일 시스템 기반 라우터 제공
  - 페이지 라우터: 예전 방식의 라우터
  - 앱 라우터: 서버 컴포넌트, 스트리밍 같은 최신 React 기능을 사용할 수 있으므로 페이지 라우터 대신 사용을 권장  
* 렌더링: 클라이언트 사이드 렌더링(CSR), 서버 사이드 렌더링(SSR) 지원
* 데이터 패칭: 데이터 캐싱, 재검증 등의 기능이 추가된 fetch API를 사용해서 데이터 가져오기 제공
* 스타일링: CSS Module, Tailwind CSS, CSS-in-JS 등 여러 스타일 지정 방법 지원
* 최적화: 이미지, 글꼴, 스크립트 등을 최적화 기능 지원
* 타입스크립트: 사용자 정의 플러그인, 타입 검사기 등을 통한 타입스크립트에 대한 지원

## 개발환경 구성
### 수동 구성
* Node 패키지 설치
  ```sh
  npm install next@latest react@latest react-dom@latest
  ```

* package.json 파일 작성
  ```json
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    }
  }
  ```
  - dev: 개발 서버 실행
  - build: 프로덕션 빌드
  - start: 프로덕션 서버 실행
  - lint: ESLint를 이용한 코드 스타일 검사

* app 디렉토리 생성
  - app 라우터를 사용할 경우 app 디렉토리 생성(추천)
  - pages 라우터를 사용할 경우 pages 디렉토리 생성

<img src="https://raw.githubusercontent.com/uzoolove/FESP02-nextjs/main/images/app-getting-started.avif">

* app/layout.tsx 파일 생성

* app/page.tsx 파일 생성



### 자동 구성

## 프로젝트 구조
  - 루트 폴더
  - 루트 파일
  - 라우터

## 라우팅
  - app 라우터
  - 경로 생성
  - 페이지와 레이아웃
  - 페이지 이동
  - 로딩중 페이지와 스트리밍
  - 오류 처리
  - 리디렉션
  - 경로 그룹
  - 프로젝트 구성 및 경로 관리
  - 동적 경로
  - 병렬 경로
  - 경로 차단
  - 경로 처리기
  - 미들웨어
  - 국제화

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
