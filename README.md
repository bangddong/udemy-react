Udemy에서 학습한 React 내용을 실습 및 정리합니다.

# JSX와 React Component

## JSX

JSX는 JavaScript Syntax Extension의 줄임말로  
말 그대로 JavaScript 문법 확장자를 의미한다.

이 확장자는 개발자가 JavaScript 파일 내에 HTML 마크업 코드를 작성하여  
HTML 요소를 설명 및 생성할 수 있게 한다.

React는 UI의 전체와 부분을 설명 및 생성하기 위한 것이므로 JSX 문법을 사용하지만  
브라우저에는 사용이 불가능하다.

따라서 JSX 파일은 브라우저에 도달하기 전 백그라운드에서 실행되는 빌드 프로세스에게  
해당 파일이 JSX 코드를 포함하고 있다는 것을 알려줘야 한다.

이것 역시 브라우저에서는 지원되지 않고 일종의 빌드 프로세스이기 때문에  
엄격한 규칙은 별도로 없으며 (js로만 동작하는 React 프로젝트도 존재)  
단순히 해당 프로젝트 설정의 코드 빌드 프로세스에 따른다.

## Component

React 내에서 컴포넌트로 인식되기 위해서는 두 가지 중요한 규칙을 따라야 한다.

함수의 제목은 대문자로 시작해야 하며 함수에서 렌더링 가능한 값이 반환되어야 한다.  
(나중에 반환 될 HTML 마크업)

컴포넌트의 생성은 평범한 JavaScript 함수를 만든 후 대문자로 시작하는 적합한 이름을 부여하면 JSX 코드가 반환된다.

대문자로 시작되어야 하는 이유는 다음과 같다

1. div, image, header와 같은 내장 컴포넌트와의 이름 충돌 방지
2. 내장 컴포넌트는 리액트에서 DOM 노드로서 렌더링 되나 커스텀 컴포넌트는  
   단순 함수이기 때문에 리액트에서도 함수로서 실행된다.

컴포넌트는 기본적으로 App.jsx내 createRoot 및 .render 메소드를 통해  
단 하나의 루트 컴포넌트를 생성하며 중첩된 컴포넌트가 필요한 만큼 존재할 수 있다.

이러한 중첩 컴포넌트는 자식 컴포넌트를 또 다수 갖을 수 있는데  
이러한 관계가 중첩되어 컴포넌트 계층 구조를 설립한다.

이러한 컴포넌트는 실제로 렌더링된 DOM에는 나타나지 않으며  
리액트에 의해 분석된 컴포넌트 트리 내 모든 JSX 코드를 결합하여 렌더링 할  
전반적인 DOM을 생성한다.

리액트는 이렇게 복잡하고 클 수도 있는 방대한 하나의 파일 대신  
개별적으로 구성된 요소로 작업할 수 있다.

# Props

컴포넌트의 재사용을 위한 중요한 개념이다.

props는 데이터를 컴포넌트로 전달하고 그 데이터를 그 곳에서 사용할 수 있다.

props는 기본적으로 children 속성을 갖고 있는데 아래 예와 같이 컴포넌트 선언시  
사이에 있는 텍스트 값을 전달하며 props.children으로 해당 값을 사용할 수 있다.

    <Component>children Text</Component>

    export default function Component(props) {
      return (
        <li>
          <button>{props.children}</button>
        </li>
      );
    }

# State

일반적으로 컴포넌트는 단 한번만 실행되며 내부 코드 또한 한 번만 빌드된다.

따라서 값의 변화에 따른 UI 업데이트가 이루어지려면 리액트에게 컴포넌트의 변화를 알려야 하며  
이 때 state(상태)를 제어하기 위해 리액트 Hook이 사용된다.

일반적인 리액트 훅은 'use'로 시작되는 함수로 사용된다 (useState, useMemo ...)

사용은 호출하는 컴포넌트 함수 안에서 호출되어야 하며, 최상위 레벨에서 정의되어야 한다.

### 올바른 예시

    fucntion App() {
      const [val, setVal] = useState(0);
    }

### 잘못된 예시 (컴포넌트 밖에서 선언됨)

    const [val, setVal] = useState(0);
    function App() {}

### 잘못된 예시2 (함수 내 다른 함수 안에서 선언됨)

    function App() {
      if (flag) {
        const [val, setVal] = useState(0);
      }
    }

useState와 같은 리액트 훅을 사용하면 Upadte가 이뤄질 때 리액트 코드 또한 재 실행 되는것을 확인할 수 있다.

단, 해당 컴포넌트에서 Update 발생시 해당 코드 자체가 재실행 되기 때문에 변경이 필요한 부분 외에도  
코드가 재실행 되기 때문에 불필요한 렌더링이 발생하게 된다.

### 불필요 Update

    function App() {
      const [val, setVal] = useState(0);

      function handleClick(updateValue) {
        setVal(updateValue);
      }

      // 리액트 Hook을 통해 재실행이 필요한 부분
      <button onClick={() => handleClick(1)}>{val}</button>

      // App 컴포넌트가 재실행되니 아래 다른 컴포넌트도 재실행된다!
      <OtherComponent1 />
      <OtherComponent2 />
      <OtherComponent3 />
      <OtherComponent4 />
    }

따라서 컴포넌트의 분리를 통해 효율적인 코드 재실행을 해야한다.

### After

    function App() {
      // Button Component로 분리
      <Button />

      // Click시 재실행 되지 않는다!
      <OtherComponent1 />
      <OtherComponent2 />
      <OtherComponent3 />
      <OtherComponent4 />
    }

    function Button() {
      const [val, setVal] = useState(0);

      function handleClick(updateValue) {
        setVal(updateValue);
      }

      return (
        <button onClick={() => handleClick(1)}>{val}</button>
      );
    }
