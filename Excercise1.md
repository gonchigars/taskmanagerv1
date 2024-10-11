# Practice Exercises: Fill-in-the-Blanks Coding Assignments

## **Exercise 1: Functional Components and Props**

**Concepts Covered:** Functional Components, Props

### **Instructions:**

Complete the `Greeting` component so that it accepts a `name` prop and displays a personalized greeting message.

### **Code:**

```jsx
import React from "react";

const Greeting = (________) => {
  return <h1>Hello, __________!</h1>;
};

export default Greeting;
```

### **Tasks:**

1. Fill in the parameter list to accept props.
2. Use destructuring to extract the `name` prop.
3. Insert the `name` prop into the greeting message.

---

## **Exercise 2: State and Event Handling**

**Concepts Covered:** State, Event Handling, Functional Components

### **Instructions:**

Complete the `Counter` component so that it displays a button with the current count. When the button is clicked, the count should increase by 1.

### **Code:**

```jsx
import React, { ________ } from "react";

const Counter = () => {
  const [count, ________] = useState(0);

  const increment = () => {
    __________(count + 1);
  };

  return <button onClick={________}>Count: {count}</button>;
};

export default Counter;
```

### **Tasks:**

1. Import the necessary hook for state management.
2. Initialize the state variable `count` and the function to update it.
3. Implement the `increment` function to update the state.
4. Attach the `increment` function to the button's `onClick` handler.

---

## **Exercise 3: Spread Operator and Immutable State Updates**

**Concepts Covered:** Spread Operator, Immutable State Updates

### **Instructions:**

Complete the `addFruit` function so that it adds a new fruit to the `fruits` array in the state without mutating the original array.

### **Code:**

```jsx
import React, { useState } from "react";

const FruitList = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);

  const addFruit = (newFruit) => {
    setFruits(________);
  };

  return (
    <div>
      <button onClick={() => addFruit("Orange")}>Add Orange</button>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
```

### **Tasks:**

1. Use the spread operator to create a new array with the existing fruits and the `newFruit`.
2. Ensure that the state is updated immutably.

---

## **Exercise 4: Computed Property Names**

**Concepts Covered:** Computed Property Names, State Updates

### **Instructions:**

Complete the `updateScore` function to update the score of a player dynamically based on the `playerName` parameter.

### **Code:**

```jsx
import React, { useState } from "react";

const ScoreBoard = () => {
  const [scores, setScores] = useState({ Alice: 0, Bob: 0 });

  const updateScore = (playerName, points) => {
    setScores((prevScores) => ({
      __________: prevScores[playerName] + points,
    }));
  };

  return (
    <div>
      <button onClick={() => updateScore("Alice", 1)}>Alice Scores!</button>
      <button onClick={() => updateScore("Bob", 1)}>Bob Scores!</button>
      <p>Alice: {scores.Alice}</p>
      <p>Bob: {scores.Bob}</p>
    </div>
  );
};

export default ScoreBoard;
```

### **Tasks:**

1. Use computed property names to update the score of the correct player.
2. Ensure the state is updated immutably.

---

## **Exercise 5: Conditional Rendering and Inline Styling**

**Concepts Covered:** Conditional Rendering, Inline Styling

### **Instructions:**

Complete the `StatusIndicator` component so that it displays a green circle when `isOnline` is `true` and a red circle when `false`.

### **Code:**

```jsx
import React from "react";

const StatusIndicator = ({ isOnline }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: __________,
      }}
    ></div>
  );
};

export default StatusIndicator;
```

### **Tasks:**

1. Use a conditional expression to set `backgroundColor` to `'green'` when `isOnline` is `true` and `'red'` when `false`.

---

## **Exercise 6: Array Methods**

**Concepts Covered:** Array Methods (`map`, `filter`)

### **Instructions:**

Complete the code to display a list of even numbers filtered from the `numbers` array.

### **Code:**

```jsx
import React from "react";

const NumberList = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const evenNumbers = numbers.________((number) => __________);

  return (
    <ul>
      {evenNumbers.________((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};

export default NumberList;
```

### **Tasks:**

1. Use the `filter` method to select even numbers.
2. Use the `map` method to render the list items.

---

## **Exercise 7: Closure**

**Concepts Covered:** Closure, Event Handling

### **Instructions:**

Complete the `createCounter` function so that each counter maintains its own count.

### **Code:**

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("Count:", ________);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // Count: 1
counter1(); // Count: 2
counter2(); // Count: 1
```

### **Tasks:**

1. Fill in the blank to display the current value of `count`.
2. Understand how the closure allows each counter to have its own state.

---

## **Exercise 8: Object Property Shorthand**

**Concepts Covered:** Object Property Shorthand

### **Instructions:**

Complete the `createUser` function to return a user object using property shorthand.

### **Code:**

```javascript
function createUser(name, age) {
  return {
    ________,
    ________,
    isActive: true,
  };
}

const user = createUser("Emma", 30);
console.log(user);
// Expected Output: { name: 'Emma', age: 30, isActive: true }
```

### **Tasks:**

1. Use property shorthand to define `name` and `age` in the returned object.

---

## **Exercise 9: Side Effects with `useEffect`**

**Concepts Covered:** Side Effects, `useEffect` Hook

### **Instructions:**

Complete the `DataFetcher` component so that it fetches data from an API when it mounts.

### **Code:**

```jsx
import React, { useState, useEffect } from "react";

const DataFetcher = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Side effect: Fetch data from API
    fetch(______)
      .then((response) => response.json())
      .then((data) => __________);
  }, [______]);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default DataFetcher;
```

### **Tasks:**

1. Fill in the `fetch` URL.
2. Use `setData` to update the state with the fetched data.
3. Set the dependency array correctly to avoid unnecessary re-fetching.

---

## **Exercise 10: Combining Concepts in Drag-and-Drop**

**Concepts Covered:** Functional Components, Props, State, Spread Operator, Computed Property Names, Conditional Rendering, Closures, Refs

### **Instructions:**

Complete the `DraggableItem` component to make it draggable using `react-dnd`. Ensure that it correctly uses refs and updates styles based on the drag state.

### **Code:**

```jsx
import React, { useRef } from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ item, fromSide }) => {
  const dragRef = useRef(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FRUIT",
    item: { _______, _______ },
    collect: (monitor) => ({
      isDragging: monitor.________(),
    }),
  }));

  drag(________);

  return (
    <div
      ref={________}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        padding: "8px",
        margin: "4px",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
      }}
    >
      {item}
    </div>
  );
};

export default DraggableItem;
```

### **Tasks:**

1. Provide the `item` and `fromSide` properties in the `item` object.
2. Use the `monitor` to collect the `isDragging` state.
3. Attach the `drag` function to the `dragRef`.
4. Attach the `dragRef` to the `div` using `ref`.

---

## **Exercise 11: Updating State with Multiple Properties**

**Concepts Covered:** Spread Operator, Immutable State Updates, Computed Property Names

### **Instructions:**

Complete the `moveItem` function to move an item from one list to another in the `items` state object.

### **Code:**

```jsx
const [items, setItems] = useState({
  left: ["apple", "banana"],
  right: ["orange", "pear"],
});

const moveItem = (item, fromSide, toSide) => {
  setItems((prevItems) => ({
    ________,
    [________]: prevItems[fromSide].filter((i) => i !== item),
    [________]: [...prevItems[toSide], item],
  }));
};
```

### **Tasks:**

1. Use the spread operator to copy the previous state.
2. Use computed property names to update `fromSide` and `toSide` lists.

---

## **Exercise 12: Applying Conditional Rendering in Styling**

**Concepts Covered:** Conditional Rendering, Inline Styling

### **Instructions:**

Complete the `DropZone` component so that it changes its background color when an item is dragged over it.

### **Code:**

```jsx
import React from "react";
import { useDrop } from "react-dnd";

const DropZone = ({ children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    collect: (monitor) => ({
      isOver: ________,
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? "lightgreen" : "white",
        padding: "16px",
        border: "1px solid black",
        minHeight: "100px",
      }}
    >
      {children}
    </div>
  );
};

export default DropZone;
```

### **Tasks:**

1. Use the `monitor` to determine if an item is over the drop zone.
2. Implement conditional styling based on `isOver`.

---

## **Exercise 13: Using Refs to Access DOM Elements**

**Concepts Covered:** Refs

### **Instructions:**

Complete the `FocusInput` component so that the input field is focused automatically when the component mounts.

### **Code:**

```jsx
import React, { useEffect, ________ } from "react";

const FocusInput = () => {
  const inputRef = ________;

  useEffect(() => {
    inputRef.current.________();
  }, []);

  return <input ref={inputRef} type="text" />;
};

export default FocusInput;
```

### **Tasks:**

1. Import the necessary hook for refs.
2. Initialize `inputRef` using `useRef`.
3. Use the ref to focus the input field when the component mounts.

---

## **Exercise 14: Avoiding State Mutation**

**Concepts Covered:** Immutable State Updates

### **Instructions:**

Fix the `addToCart` function to avoid mutating the state directly.

### **Code:**

```jsx
import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState(["Item1"]);

  const addToCart = (item) => {
    // Incorrect: Directly mutating the state
    cart.push(item);
    setCart(cart);
  };

  return (
    <div>
      <button onClick={() => addToCart("Item2")}>Add Item2</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
```

### **Tasks:**

1. Rewrite the `addToCart` function to avoid mutating `cart`.
2. Use the spread operator to create a new array with the new item.

---

## **Exercise 15: Implementing a Dynamic Key in an Object**

**Concepts Covered:** Computed Property Names

### **Instructions:**

Complete the code to update the `settings` object with a dynamic key.

### **Code:**

```javascript
const updateSettings = (key, value) => {
  const settings = {
    theme: "light",
    notifications: true,
  };

  const newSettings = {
    ...settings,
    ________: value,
  };

  return newSettings;
};

console.log(updateSettings("theme", "dark"));
// Expected Output: { theme: 'dark', notifications: true }
```

### **Tasks:**

1. Use a computed property name to set the dynamic key in `newSettings`.

---

By completing these exercises, you'll reinforce your understanding of the key React concepts and how they are applied in coding. Remember to test your solutions to ensure they work as expected.
