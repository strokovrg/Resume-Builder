import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ListBox = [
  {
    id: '1',
    name: 'Your name',
    thumb: '/images/1.png'
  },
  {
    id: '2',
    name: 'Your birthday',
    thumb: '/images/2.png'
  },
  {
    id: '3',
    name: 'Your Skills',
    thumb: '/images/3.png'
  },
  {
    id: '4',
    name: 'Your experience',
    thumb: '/images/4.png'
  },
  {
    id: '5',
    name: 'About you',
    thumb: '/images/5.png'
  }
]


function App() {

  const [Boxes, updateBoxes] = useState(ListBox);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(Boxes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateBoxes(items);
  }

  return (
    <div className="App">
      <Header />
      <h1></h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="Boxes">
          {(provided) => (
            <ul className="Boxes" {...provided.droppableProps} ref={provided.innerRef}>
              {Boxes.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="Boxes-thumb">
                          <img src={thumb} alt={`${name} Thumb`} />
                        </div>
                        <p>
                          {name}
                        </p>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
