## 실행 방법

```
npm install
npm run dev
```

## 폴더 구조

```
📦src
 ┣ 📂api
 ┣ 📂components
 ┃ ┣ 📂Chart
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📂Banner
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┗ 📂NavBar
 ┣ 📂mocks
 ┣ 📂pages
 ┃ ┗ 📂Home
 ┃ ┃ ┣ 📂Charge
 ┃ ┃ ┣ 📂Chart
 ┃ ┃ ┣ 📂Event
 ┃ ┃ ┣ 📂News
 ┃ ┃ ┣ 📂PageSwiper
 ┃ ┃ ┣ 📂Store
 ┃ ┃ ┣ 📂Whook
 ┣ 📂router
 ┣ 📂styles
 ┃ ┗ 📂_base
 ┣ 📂types
 ┣ 📜App.tsx
 ┣ 📜main.tsx
```

## 기술 스택

`React`, `Vite`, `Swiper`, `Tanstack Query`, `SCSS`, `msw`

## 설명

- 실제 한터차트 사이트의 차트 데이터(https://www.hanteochart.com/chart/world/global/weekly)로 mock 데이터를 생성하였고, 이를 실제 API 요청처럼 `useQuery`를 통해 비동기 요청하는 구조로 구현하였습니다.

- `reset.css`로 브라우저의 기본 스타일을 초기화하고, `font-size`는 rem 단위를 사용하여 접근성과 사용자 설정을 고려한 반응형 폰트 크기를 적용하였습니다.

- `vite.config.ts`에서 `SCSS` 전역 변수 파일을 자동으로 import 하도록 설정하였습니다.

- `Tanstack Query`의 `useInfiniteQuery`와 `react-intersection-observer`의 `useInView`를 활용하여 차트의 무한 스크롤 기능을 구현하였습니다.

- `swiper`를 활용하여 상단 메뉴 탭, 배너 영역, 페이지 간 스와이프 전환을 구현하였습니다.

- 각 페이지 컴포넌트는 `lazy`를 통해 지연 로딩되며, `Suspense`를 활용하여 로딩 중에는 fallback UI를 보여줌으로써 초기 렌더링 성능을 최적화하였습니다.

## 아쉬운 점

- 페이지별로 `Swiper`를 사용하여 전환 시, 각 페이지의 스크롤 높이를 맞추는 데 어려움이 있었습니다. `Swiper`의 `autoHeight` 옵션과 무한 스크롤(`infinite scroll`)이 충돌하여 무한 스크롤이 먹지 않는 상황이 발생하였습니다.

  => 페이지를 이동 할 때마다 `React.createElement`로 컴포넌트를 새로 만들어서 렌더링 해주었더니 매번 새로 렌더링하게 되어 페이지 전환 시마다 로딩 화면이 계속 표시되는 이슈가 발생했습니다. `Swiper`를 사용하지 않는 방법이나 렌더링 최적화 부분에 대한 고민이 필요할 것 같습니다.
