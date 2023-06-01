import Header from './Header'
import './App.css';
import Footer from './Footer';
import { useState } from 'react';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';



function App() {

  const [items, setItems] = useState(JSON.parse(
    localStorage.getItem('todo_list'))
    // [
    //   {
    //     id: 1,
    //     checked: true,
    //     item: "Num 1 Item"
    //   },
    //   {
    //     id: 2,
    //     checked: true,
    //     item: "Num 2 Item"
    //   },
    //   {
    //     id: 3,
    //     checked: true,
    //     item: "Num 3 Item"
    //   }
    // ]
    );



  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) =>
      item.id !== id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {
        id, checked: false, item
    }
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
}
const [newItem, setNewItem] = useState('')
const [search , setSearch] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // console.log(newItem)
    // adding to next line 
    addItem(newItem)
    setNewItem(' ')
}
  return (
    <section className='App'>

      <Header />
      <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
                items={items}
                setItems={setItems}

            />
            <SearchItem
            search={search}
            setSearch={setSearch}
            
            />
      <Content

        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        setItems={setItems}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Footer
        length={items.length}
      />
    </section>
  );
}

export default App;
