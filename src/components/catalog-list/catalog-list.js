import React, { useState, useEffect } from 'react'
import BeerService from '../../services/beer-service'
import CatalogItem from '../catalog-item'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import './catalog-list.css'

const CatalogList = () => {
  const beerService = new BeerService()
  const [beer, setBeer] = useState([])

  useEffect(() => {
    beerService.getAllBeers()
      .then(beer => setBeer(beer))
      .catch(err => console.log(err))
  }, [])

  if (beer.length === 0) {
    return <p>Loading...</p>
  }

  const onDragEnd = (result) => {
    const { destination} = result
    if (!destination) {
      return
    }

    const startIndex = result.source.index
    const endIndex = result.destination.index

    const beerCopy = [...beer]
    const [removed] = beerCopy.splice(startIndex, 1)
    beerCopy.splice(endIndex, 0, removed)

    setBeer(beerCopy)
    return

  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId='column-1'>
        {(provided, snapshot) => (
          <ul
            className='catalog__list'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <CatalogItem data={beer} />
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default CatalogList