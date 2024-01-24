Udemy 강의 수강

# Refs & Portals

### useRef()

렌더링에 사용하지 않는 값을 보관하는 내장 리액트 훅이며 사용법은 다음과 같다.

```
import { useRef } from "react";

function Component() {
  const refValue = useRef(0);
  const inputFlag = useRef(false);
}
```

useState와 같이 매개 변수로 해당 객체의 초기 값을 지정할 수 있으며  
다음 렌더링이 일어나도 여전히 똑같은 객체를 반환한다.

값을 저장하여 나중에 읽을 수 있다는 점이 state와 비슷할 수 있으나  
ref는 값의 변화가 일어나도 **다시 렌더링 되지 않는다**

따라서 값의 변화에 따른 렌더링이 일어나지 않으니 화면에 표시되는 값을  
저장하기에는 적합하지 않으니 이런 상황에는 state를 사용해야 한다.

일반 변수, state, ref를 비교해보면 다음과 같다.

```
import { useRef } from "react";

function Component() {
  ✅ 다시 렌더링 될 때 값 또한 초기화 된다!
  let normalVariable = 0;

  ✅ setStateVariable를 통해 상태가 바뀌면 렌더링이 발생한다!
  const [stateVariable, setStateVariable] = useState(0);

  ✅ 다시 렌더링 되어도 값을 기억하지만 참조가 변해도 렌더링은 발생하지 않는다!
  const refVariable = useRef(0);
}
```

다른 state나 function처럼 ref 또한 자식 컴포넌트에게 전달하여 사용하고 싶은 경우가 있다.

일반적으로 컴포넌트에 props를 전달할 때처럼 전달하면 될까?

```
import { useRef } from "react";

  fucntion ParentComponent() {
    const refValue = useRef();

    const text = "ChildComponent";

    return (
      <>
        <ChildComponent ref={refValue} text={text}/>
      </>
    )
  }

  ❌ 에러발생
  fucntion ChildComponent({ref, text}) {
    return (
      <h1 ref={ref}>${text}</h1>
    )
  }
```

이전에 다뤘던 child property처럼 react에서 ref 또한 **예약된 props 중 하나**이기 때문에  
위 코드는 동작하지 않는다.

다만, props를 ref가 아닌 다른 이름으로 전달하면 원하는대로 사용할 수 있지만  
해당 element에 접근할 때 마다 다른 이름으로 사용해야 하기 때문에 일관적이지 보이지 않는다.

따라서, 컴포넌트의 전파를 위해서는 또 다른 react hook인 **forwardRef**를 활용하는것이 좋다.

```
import { useRef, forwardRef } from "react";

  fucntion ParentComponent() {
    const refValue = useRef();

    const text = "ChildComponent";

    return (
      <>
        <ChildComponent ref={refValue} text={text} />
      </>
    )
  }

  ✅ 기존 function을 forwardRef로 감싸고
      destructuring과 별도로 ref 파라미터로 받는다
  forwardRef(fucntion ChildComponent({text}, ref) {
    return (
      <h1 ref={ref}>{text}</h1>
    )
  })
```
