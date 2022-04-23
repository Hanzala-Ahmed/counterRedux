import "./App.css";
import { incNumber, decNumber } from "./Redux/Actions/Counter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  const incNum = () => {
    dispatch(incNumber());
    // alert("hello")
  };

  const decNum = () => {
    dispatch(decNumber());
  };

  return (
    <>
      <div className="mainBox">
        <div className="box">
          <h1>Increment And Decrement</h1>
          <span>
            Using <span>Redux</span>
          </span>
          <div className="counterBox">
            <span onClick={() => decNum()}>-</span>
            <input type="text" value={myState} />
            <span onClick={() => incNum()}>+</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
