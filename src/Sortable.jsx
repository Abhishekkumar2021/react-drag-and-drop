import { useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import PropTypes from 'prop-types';

function SortableUser({ user }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: user.id })
  return (
    <div ref={setNodeRef} style={{ transform: transform ? `translateY(${transform.y}px)` : undefined, transition }} {...attributes} {...listeners} className='user'>
      {user.name}
    </div>
  )
}

SortableUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};


function Sortable() {
  const [users, setUsers] = useState([])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over.id) {
      const activeIndex = users.findIndex(user => user.id === active.id)
      const overIndex = users.findIndex(user => user.id === over.id)
      const newUsers = arrayMove(users, activeIndex, overIndex)
      setUsers(newUsers)
    }
  }

  const [newUsers, setNewUsers] = useState('')
  return (
    <div className="App">
      <div className="list">
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={users} strategy={verticalListSortingStrategy}>
            {users.map(user => <SortableUser key={user.id} user={user} />)}
          </SortableContext>
        </DndContext>
      </div>
      <div className="add-user">
        <input type="text" placeholder="Add user" value={newUsers} onChange={(e) => setNewUsers(e.target.value)} />
        <button onClick={() => setUsers([...users, { id: users.length + 1, name: newUsers }])}>Add</button>
      </div>
    </div>

  )
}

export default Sortable
