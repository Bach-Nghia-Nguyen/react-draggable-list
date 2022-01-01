import React, { useState } from "react";
import PropTypes from "prop-types";

import "./draggable-list.css";

import DraggableListItem from "./DraggableListItem";

const DraggableList = (props) => {
  // const [data, setData] = useState(props.data);
  const [dragStartIndex, setDragStartIndex] = useState(null);

  const onDragStart = (index) => setDragStartIndex(index);

  // update list when item dropped
  const onDrop = (dropIndex) => {
    // get dragged item
    const dragItem = props.data[dragStartIndex];

    // delete dragged item in list
    let list = [...props.data];
    list.splice(dragStartIndex, 1);

    // update list
    if (dragStartIndex < dropIndex) {
      props.setData([
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length),
      ]);
    } else {
      props.setData([
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length),
      ]);
    }
  };

  return (
    <ul className="draggable-list">
      {props.data.map((item, index) => (
        <DraggableListItem
          key={index}
          index={index}
          onDragStart={(index) => onDragStart(index)}
          onDrop={(index) => onDrop(index)}
        >
          {props.renderItemContent(item)}
        </DraggableListItem>
      ))}
      {/* 
          add last item so you can drag item to last position
          Last item don't need onDragStart because it can not be dragged
      */}
      {/* <DraggableListItem
        key={props.data.length}
        draggable={false}
        index={props.data.length}
        onDrop={(index) => onDrop(index)}
      /> */}
    </ul>
  );
};

DraggableList.propTypes = {
  data: PropTypes.array,
  renderItemContent: PropTypes.func,
  setData: PropTypes.func,
};

export default DraggableList;
