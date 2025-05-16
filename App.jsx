import { useRecoilState, useRecoilValue } from "recoil";
import { RecoilRoot } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <EvenOddRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function EvenOddRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      Number is <b>{isEven ? "Even" : "Odd"}</b>
    </div>
  );
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  console.log("buttons re-rendered");

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;