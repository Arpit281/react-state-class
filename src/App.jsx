import "./App.css";
import LotteryGame from "./LottteryGame";

function App() {
  return (
    <>
      <LotteryGame n={3} winningSum={15} />
    </>
  );
}

export default App;
