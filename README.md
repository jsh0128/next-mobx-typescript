## Getting Started

```bash
npm run dev
# or
yarn dev
```

## Tech Stack

TypeScript, Next, React, MobX, Styled-Components, Material UI

## Next Mobx TypeScript 사용 규칙

- store를 만들떄
  - util/types/StoreType.ts에 스토어 선언
  - stores/index에 선언하기
- getInitialProps에서 store를 사용할 때
  - ctx안에 store가 들어있어서 ctx의 비구조화 할당을 이용해 사용
  - getInitialProps를 사용하는 페이지에 CustomNextPage 타입 선언

```javascript
Home.getInitialProps = async ({ store } : CustomNextPage) => {
    await store.사용할 스토어.사용할 함수

    return;
}
```

- component, custom hook에서 store를 사용할 때
  - useStore를 이용하여 가져오면 됨.

```javascript
const { store } = useStore();

store.사용할 스토어.사용할 함수
```

## React, TypeScript

- any타입의 선언을 최소화 한다.(unknown, never)
- page안에서 components를 가져오는 구조로 진행한다.
  - page를 힘수 선언시에 함수명 뒤에 붙여준다 (ex. CountPage, MainPage)
  - component 선언시에는 Page의 a
- 파일 구조는
