"use client"

import { useState } from 'react'
import SearchMenu from './SearchMenu'
const SearchBar = () => {
  const [manufacturer, setMenu] = useState('');
  const handleSearch = () => { }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenu manufacturer={manufacturer} setMenu={setMenu} />
      </div>
    </form>
  )
}

export default SearchBar