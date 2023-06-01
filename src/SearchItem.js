import React from 'react'

const SearchItem = (proms) => {
    const {  search , setSearch}= proms
  return (
   <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor="search">
        search
    </label>
    <input type="text" name="search" id="search" role='searchbox' placeholder='Search Items' value={search} onChange={(e) => setSearch(e.target.value)}/>
   </form>
  )
}

export default SearchItem