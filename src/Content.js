import React from 'react'

const Content = () => {
  function handleNameChange() {
    const name = ['One', 'Two', 'Three', 'Four']
    const int = Math.floor(Math.random() * 4);
    return name[int];
  }
  return (
    <div>Lets Roll {handleNameChange()}</div>
  )
}

export default Content