import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function LotteryGame({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket({ n }));
  let isWinning = sum(ticket) === winningSum;

  //   let getNewTicket = () => {
  //     number = number.
  //   };
  let ticketButton = () => {
    setTicket(genTicket({ n }));
  };
  console.log(ticket);

  return (
    <div>
      <h2>Lottery game!</h2>
      <Ticket ticket={ticket} />
      <button onClick={ticketButton}>Try to win!</button>

      <h3>{isWinning && "Congratulations, you won!"}</h3>

      {/* <button onClick={getNewTicket}>Get new Ticket</button> */}
    </div>
  );
}
