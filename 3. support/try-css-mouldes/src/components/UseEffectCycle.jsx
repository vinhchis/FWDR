import Timer from "./Timer";

function UseEffectCycle() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Start</button>
      <button onClick={() => setShow(false)}>Stop</button>
      {show ? <Timer /> : null}
    </>
  );
}
export default UseEffectCycle;
