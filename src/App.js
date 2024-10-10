import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropZone from "./DropZone";

const App = () => {
  const [items, setItems] = useState({
    left: ["Item 1", "Item 2", "Item 3"],
    right: ["Item 4", "Item 5"],
  });
  console.log(items.left);
  const moveItem = (item, from, to) => {
    setItems((prev) => ({
      ...prev,
      [from]: prev[from].filter((i) => i !== item),
      [to]: [...prev[to], item],
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <DropZone
          items={items.left}
          onDrop={(item) => moveItem(item, "right", "left")}
          title="Left List"
        />
        <DropZone
          items={items.right}
          onDrop={(item) => moveItem(item, "left", "right")}
          title="Right List"
        />
      </div>
    </DndProvider>
  );
};

export default App;
