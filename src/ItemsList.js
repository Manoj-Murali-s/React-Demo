import React from 'react'
import LineItem from './LineItem';


const ItemsList = (props) => {
    const { items, handleDelete, handleCheck, setItems } = props





   

    return (
        <div>
            
            <ul>
                {items.map((item) => (
                    <LineItem
                        item={item}
                        key={item.id}
                        handleDelete={handleDelete}
                        handleCheck={handleCheck}
                    />
                ))}
            </ul></div>
    )
}

export default ItemsList