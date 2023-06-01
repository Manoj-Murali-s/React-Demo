import React from 'react'
import './Content.css';
import ItemsList from './ItemsList';

const Content = (props) => {
  const { items, handleDelete, handleCheck, setItems } = props

  return (
    <main>
      {(items.length) ? (
        <ItemsList
          items={items}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          setItems={setItems}
        />)
        :
        (
          <p style={{ color: "red" }}>
            'Your list is empty'
          </p>
        )}
    </main>



  )
}

export default Content