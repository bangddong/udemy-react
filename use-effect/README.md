# useEffect()

### 사이드 이펙트란?

리액트 기준에서 사이드 이펙트란 현재 렌더링 과정에서 직접적이거나 즉각적인 영향을 미치지 않는 것이다.

리액트에서 컴포넌트의 목적은 실행 가능한 JSX 파일을 return 하느 것인데
아래와 같은 코드는 기능에 필요하긴 하나 화면에 보여지는데는 직접적으로 연관되어 있지 않다.

```
  function App() {
    // 브라우저에서 사용자의 위치를 받아온다.
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
    });
  }
```

사이드 이펙트를 올바르게 사용하지 않으면 무한루프와 같은 문제점을 야기할 수 있다.

예를 들어, 정제되지 않은 장소 목록을 전달받아 사용자와의 위치 순으로 정렬 한다고 가정했을 때
단순히 state를 통해 정렬된 데이터를 넘기고자 하면 기존과 같이 setState를 통해 사용할 수 있다.

하지만 해당 기능은 보는 것처럼 root에 렌더링 하는 App 컴포넌트에서 실행되고 있으니
사용자의 위치를 받아올 때 마다 재렌더링이 수행 되어 무한 루프에 빠질 수 있다.

```
  function App() {
    const [availablePlaces, setAvaliablePlaces] = useState([]);

    1️⃣
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      2️⃣
      setAvaliablePlaces(sortedPlaces);
    });
  }
```

최초 렌더링시 1️⃣에 진입하며 사용자의 위치를 받아올 때 까지 기다리며 렌더링이 종료된다.

하지만 이후 2️⃣로 인해 state가 변경되었음으로 렌더링은 다시 발생하고
1️⃣이 다시 실행되며 최초와 마찬가지로 위치 정보를 받아온 후 2️⃣를 다시 실행시키며 무한 루프에 빠진다.

이러한 문제를 해결하기 위해 사용하는것이 useEffect()이다.

사용법은 의외로 간단한데 위의 코드를 단순히 useEffect()로만 감싸 해당 function을  
첫 번째 인수로 전달하고, 두 번째 인수로 다시 실행되기 위한 의존성 데이터만 넣어주면 된다.

```
  function App() {
    const [availablePlaces, setAvaliablePlaces] = useState([]);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(
          AVAILABLE_PLACES,
          position.coords.latitude,
          position.coords.longitude
        );

        setAvaliablePlaces(sortedPlaces);
      });
    }, []);
  }
```

아까 위의 코드와는 다르게 이제 getCurrentPosition은 순차적으로 실행되는 것이 아닌  
App 컴포넌트가 JSX 코드를 반환한 이후에 최초 1회만 실행되게 되며 그 이후에  
setAvaliablePlaces 의해서도 재실행되지 않는다.

최초 실행 이후에는 두 번째 인자로 넘긴 데이터의 변화를 기준으로 실행되게 되는데  
추상적으로는 값이 변할 때 마다 실행되는 state와 비슷하게 볼 수 있다.

따라서 현재 예제 코드로는 두 번째 인수로 빈 배열을 넘기고 있기 때문에  
해당 함수는 재실행되지 않는다.
