import {useDroppable} from '@dnd-kit/core';
import PropTypes from 'prop-types';
import './Droppable.css'


Droppable.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
};

function Droppable(props) {
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });
    const style = {
        backgroundColor: isOver ? 'green' : undefined,
    };
    
    
    return (
        <div ref={setNodeRef} style={style} className="Droppable">
            {props.children}
        </div>
    );
}



export default Droppable;