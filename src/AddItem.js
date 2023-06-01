import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = (props) => {
    const { newItem, setNewItem, handleSubmit , items, setItems} = props
 
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">
                Add Item
            </label>
            <input
                type="text"
                name="addItem"
                id="addItem"
                placeholder='Add Item'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type='submit'>
                <FaPlus />
            </button>

        </form>
    )
}

export default AddItem