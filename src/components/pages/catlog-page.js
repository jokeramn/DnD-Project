import React, { Component } from 'react'
import CatalogList from '../catalog-list'

export default class CatalogPage extends Component {

  render() {

    return (
      <section>
        <div className='container'>
            <CatalogList />
        </div>
      </section>

    )
  }

}

