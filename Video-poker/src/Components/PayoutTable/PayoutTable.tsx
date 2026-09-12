//ref:
//https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead
//https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility

import "./PayoutTable.css";
import { type TableRewards } from "../../Types/PayoutTable";

export default function PayoutTable() {
  const cardHandsRewards: TableRewards[] = [
    {
      hand: "Royal Flush",
      bet1: 250,
      bet2: 500,
      bet3: 750,
      bet4: 1000,
      bet5: 4000,
    },
    {
      hand: "Strait Flush",
      bet1: 50,
      bet2: 100,
      bet3: 150,
      bet4: 200,
      bet5: 250,
    },
    {
      hand: "Four of a kind",
      bet1: 25,
      bet2: 50,
      bet3: 75,
      bet4: 100,
      bet5: 125,
    },
    {
      hand: "Flush",
      bet1: 9,
      bet2: 18,
      bet3: 27,
      bet4: 36,
      bet5: 45,
    },
    {
      hand: "Straiht",
      bet1: 6,
      bet2: 12,
      bet3: 18,
      bet4: 24,
      bet5: 30,
    },
    {
      hand: "Three of a kind",
      bet1: 3,
      bet2: 6,
      bet3: 9,
      bet4: 12,
      bet5: 15,
    },
    {
      hand: "Two pair",
      bet1: 2,
      bet2: 4,
      bet3: 6,
      bet4: 8,
      bet5: 10,
    },
    {
      hand: "Jacks or better",
      bet1: 1,
      bet2: 2,
      bet3: 3,
      bet4: 4,
      bet5: 5,
    },
  ];

  return (
    <div className="table">
      <h2>PayoutTable</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Hand</th>
            <th scope="col">Bet 1</th>
            <th scope="col">Bet 2</th>
            <th scope="col">Bet 3</th>
            <th scope="col">Bet 4</th>
            <th scope="col">Bet 5</th>
          </tr>
        </thead>
        <tbody>
          {cardHandsRewards.map((reward: TableRewards) => {
            return (
              <tr>
                <th scope="row">{reward.hand}</th>
                <td>{reward.bet1}</td>
                <td>{reward.bet2}</td>
                <td>{reward.bet3}</td>
                <td>{reward.bet4}</td>
                <td>{reward.bet5}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
