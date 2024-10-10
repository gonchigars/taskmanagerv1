import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { name: item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
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
