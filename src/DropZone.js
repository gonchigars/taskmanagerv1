import React from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem";

const DropZone = ({ items, onDrop, title }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => onDrop(item.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        width: "200px",
        padding: "16px",
        backgroundColor: isOver ? "#e0e0e0" : "#f8f8f8",
        borderRadius: "8px",
      }}
    >
      <h2>{title}</h2>
      {items.map((item, index) => (
        <DraggableItem key={index} item={item} />
      ))}
    </div>
  );
};

export default DropZone;
