import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const cards = [1, 2, 3, 4, 1, 2, 3, 4];

  // todo: make a state that is an empty array by default
  const [matched, setMatched] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(
    function () {
      if (selection.length === 2) {
        if (selection[0] === selection[1]) {
          console.log("match!");
          // notify user that its correct
          // clear selection array
          setMatched(function (matches) {
            return [...matches, selection[0]];
          });
        }
      }
    },
    [selection]
  );
  // if selection equals two of the cards in the array, then check the selection and print selection is changing in the console log
  // a notification could work as well, whatever is easiest
  return (
    <div className="container">
      {cards.map(function (card) {
        return (
          <Card value={card} setSelection={setSelection} matched={matched} />
        );
      })}

      {JSON.stringify(selection, null, 2)}
    </div>
  );
}

// pass your new state set function into the cards via props
function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const isMatched = props.matched.includes(props.value);

  function handleClick() {
    if (!isMatched) {
      setIsFlipped(true);

      props.setSelection(function (selection) {
        return [...selection, props.value];
      });
    }
  }

  return (
    <div className={isMatched ? "card matched" : "card"} onClick={handleClick}>
      {isFlipped || isMatched ? props.value : ""}
    </div>
    // ...cards, props.value
  );
}
// first time for everything
// someCondition ? value : otherValue
// if (somCondition {
//   value
// } else {
//   otherValue
// })
//
// myArray.map(function(itemInArray) {
//  return (
//   <div>jsx</div>
//  )
//})
//

// const [nameOfState, setNameOfState] = useState(defaultValue)

// spread: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
