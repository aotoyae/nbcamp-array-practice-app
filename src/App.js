import { useState } from "react";
import "./App.css";

function App() {
  const initailArray = [
    "apple",
    "banana",
    "cherry",
    "elderberry",
    "watermelon",
    "grape",
  ];

  const [array, setArray] = useState(initailArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let tempResult = [];

    array.forEach(function (furit) {
      tempResult += `${furit}, `;
    });

    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    if (!query) {
      alert("Enter the words to filter!");
    } else {
      const filterdList = array.filter(function (fruit) {
        if (fruit.includes(query)) {
          return true;
        } else {
          return false;
        }
      });

      setResult(filterdList.join(", "));
    }
  };

  const handleMap = () => {
    const mappedListText = array.map(function (fruit, index) {
      return index + fruit.toUpperCase();
    });

    setResult(mappedListText.join(", "));
  };

  const handleReduce = () => {
    if (array.length > 0) {
      const reducedList = array.reduce(function (acc, cur) {
        return `${acc} + ${cur}`;
      });

      setResult(reducedList);
    } else {
      alert("Array is empty!");
    }
  };

  const handlePush = () => {
    if (!query) {
      alert("Enter the fruit you want to add!");
    } else {
      const newArr = [...array, query];

      setArray(newArr);
      setResult(newArr.join(", "));
    }
  };

  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();

    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = () => {
    const newArr = array.slice(0, -2);

    setResult(newArr.join(", "));
  };

  const handleSplice = () => {
    array.splice(2, 2, "kiwi", "lime");

    setResult(array.join(", "));
  };

  const handleIndexOf = () => {
    if (!query) {
      alert("Enter the fruit you want to know the index of!");
    } else {
      setResult(array.indexOf(query));
    }
  };

  const handleIncludes = () => {
    array.includes(query) ? setResult("true") : setResult("false");
  };

  const handleFind = () => {
    const foundFruit = array.find((fruit) => fruit === query);

    foundFruit ? setResult(foundFruit) : setResult("Not Found");
  };

  const handleSome = () => {
    const someFruit = array.some((fruit) => fruit === query);

    setResult(`${someFruit}`);
  };

  const handleEvery = () => {
    const everyFruit = array.every((fruit) => fruit.length >= 5);

    setResult(`${everyFruit}`);
  };

  const handleSort = () => {
    const newArr = [...array].sort().reverse();

    setResult(newArr.join(", "));
  };

  const handleJoin = () => {
    setResult(array.join(" & "));
  };

  return (
    <div className="App">
      <h1>Array API Practice</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <br />
      <div>
        <strong>Fruits Array</strong> : {array.join(", ")}
      </div>
      <div>
        <strong>Reuslt Array</strong> : {result}
      </div>
    </div>
  );
}

export default App;
