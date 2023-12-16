import {useDraggable} from '@dnd-kit/core';
import PropTypes from 'prop-types';
import './Draggable.css';
import {CSS} from '@dnd-kit/utilities';

Draggable.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
};

function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className="Draggable">
      {props.children}
    </button>
  );
}

export default Draggable;