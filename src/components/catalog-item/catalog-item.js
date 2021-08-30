import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './catalog-item.css'

const CatalogItem = ({ data }) => {


  return (
    data.map((item, index) => {
      return <Draggable
        key={item.id}
        draggableId={String(item.id)}
        index={index}>
        {(provided, snapshot) => (
          <li
            className='catalog__item'
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            {item.name}
          </li>
        )}
      </Draggable>
    })
  )
}

export default CatalogItem