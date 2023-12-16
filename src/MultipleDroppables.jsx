import PropTypes from 'prop-types';
import { useDroppable } from '@dnd-kit/core';
import './index.css';

function Droppable(props) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div ref={setNodeRef} className='droppable-container'>
      {props.children}
    </div>
  );
}

Droppable.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

function MultipleDroppables() {
  const droppables = ['1', '2', '3', '4'];

  return (
    <section className='droppable-list'>
      {droppables.map((id) => (
        <Droppable id={id} key={id}>
          Droppable container id: ${id}
        </Droppable>
      ))}
    </section>
  );
}

export default MultipleDroppables;