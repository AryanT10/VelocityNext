"use client"
import { useState } from 'react'
import SearchMenu from './SearchMenu'
const SearchBar = () => {
  const [menu, setMenu] = useState('');
  const handleSearch = () => { }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenu menu={menu} setMenu={setMenu} />
      </div>
    </form>
  )
}

export default SearchBar