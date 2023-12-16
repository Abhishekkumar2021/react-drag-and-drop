import {DndContext} from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';

function App() {

  const handleDragEnd = (event) => {
    const {active, over} = event;
    if (active.id !== over.id) {
      alert(`You dropped ${active.id} into ${over.id}`);
    }
  }
  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        <Droppable id='droppable-1'>
          <Draggable id='draggable-1'>Drag me</Draggable>
        </Droppable>
        <Droppable id='droppable-2'>
          <Draggable id='draggable-2'>Drag me</Draggable>
        </Droppable>
      </DndContext>
    </div>
    
  );
  

}

export default App;