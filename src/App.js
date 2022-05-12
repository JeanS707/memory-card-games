import "./styles.css";
import { useState } from "react";

export default function App() {
  const cards = [1, 2, 3, 4, 1, 2, 3, 4];
  // todo: make a state that is an empty array by default
  const empty = [];

  // const [myState, setMyState] = useState('someValue');
  // return (
  //   <div>

  //   </div>
  // );
  //would it be to check if they match got it, a seperate state

  return (
    <div className="container">
      {cards.map(function (card) {
        return <Card value={card} />;
      })}
    </div>
  );
}

// pass your new state set function into the cards via props
function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(true);
    // push the value to do the new state
  }

  return (
    <div className="card" onClick={handleClick}>
      {isFlipped ? props.value : ""}
    </div>
  );
}

// someCondition ? value : otherValue
//
// myArray.map(function(itemInArray) {
//  return (
//   <div>jsx</div>
//  )
//})
//
