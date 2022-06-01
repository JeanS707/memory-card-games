import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  // Car data.
  const cards = [
    { id: 1, value: "1" },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
    { id: 4, value: "4" },
    { id: 5, value: "1" },
    { id: 6, value: "2" },
    { id: 7, value: "3" },
    { id: 8, value: "4" },
    { id: 9, value: "A" },
    { id: 10, value: "B" },
    { id: 11, value: "C" },
    { id: 12, value: "D" },
    { id: 13, value: "A" },
    { id: 14, value: "B" },
    { id: 15, value: "C" },
    { id: 16, value: "D" }
  ];

  // todo: make a state that is an empty array by default
  const [matched, setMatched] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(
    function () {
      if (selection.length === 2) {
        if (selection[0].value === selection[1].value) {
          console.log("match!");

          // Add the matched selection into the matched array
          setMatched([...matched, selection[0].value]);
        }

        // clear selection array
        setSelection([]);
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
          <Card
            data={card}
            selection={selection}
            setSelection={setSelection}
            matched={matched}
          />
        );
      })}

      {/* {JSON.stringify(selection, null, 2)}
      {JSON.stringify(matched, null, 2)} */}
    </div>
  );
}

// pass your new state set function into the cards via props
function Card(props) {
  const isMatched = props.matched.includes(props.data.value);

  const isInSelection = props.selection.find((e) => e.id === props.data.id);

  function handleClick() {
    if (!isMatched) {
      if (!props.selection.find((e) => e.id === props.data.id)) {
        props.setSelection([...props.selection, props.data]);
      }
    }
  }

  return (
    <div className={isMatched ? "card matched" : "card"} onClick={handleClick}>
      {isInSelection || isMatched ? props.data.value : ""}
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
