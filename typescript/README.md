### React.FC

FC는 Functional Component의 약자로 암시적으로 내부에 children을 갖고 있다.

이를 활용해 명시적으로 children의 type을 지정한다

```
const Todos: React.FC<{ itmes: string[] }> = (props) => {
```

### useRef, useState

JSX와는 다르게 State나 Ref 사용시에 타입과 초기값을 지정해야 한다.

```
❌
const inputText = useRef();
const enteredValue = inputText.current.value();

⭕
// html 요소가 input이라 가정하고 HTMLInputElement 타입으로 지정
const inputText = useRef<HTMLInputElement>(null);
// 초기값이 null로 지정되어 있으니 ?.로 확인
const enteredValue = inputText.current?.value();
```
