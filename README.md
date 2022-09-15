## Getting Started

```bash
npm run dev
# or
yarn dev
```

## Tech Stack

TypeScript, Next, React, MobX, Styled-Components, Material UI

## Next Mobx TypeScript 사용 규칙

[count 예시 참고하기](https://github.com/jsh0128/next-mobx-typescript)

- store를 만들떄
  - class로 선언하고, class는 대문자로 선언한다.
  - 폴더를 만들고 그 안에 index.ts를 만들어서 사용한다.
  - util/types/StoreType.ts에 스토어 선언
  - stores/index에 선언하기
- getInitialProps에서 store를 사용할 때
  - store안에 constructor안에 Object.assign() 사용해 ssr에 변경된 변수 합치가
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

## 기본 규칙

- any타입의 선언을 최소화 한다.(unknown, never)
- page안에서 components를 가져오는 구조로 진행한다.
  - page를 힘수 선언시에 함수명 뒤에 Page 붙여준다 (ex. CountPage, MainPage)
  - component 함수 선언시에는 Page를 빼고 선언해준다 (ex. Count, Main)
- 파일 구조
  - component안에 index.tsx파일과 hooks폴더를 tsx 파일에는 View 로직, hooks은 비즈니스 로직을 작성한다.
  - 리스트의 아이템, 카드 같은(한 페이지에서만 반복되는 컴포넌트) 컴포넌트들은 최상의 컴포넌트 및에 선언하여 사용한다.
  - 공통으로 사용되는 hook,style,component **common**에 선언하여 사용한다.
  - **util**은 최상위에 사용되는것들을 정의하고 사용한다.
  - **assets**은 api와 schema(api 사용되는 response type이라고 생각하면 된다.), img를 등록한다.
- env를 사용할때 NEXT*PUBLIC* 를 앞에 붙이고 사용할 것
