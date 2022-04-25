import React from 'react'

function Search() {
  return (
    <div className="container">
    <div className="search-box">
      <input onChange={handleChange} type="text" placeholder="search images...."/>
      <Button onClick={handleSubmit} type="button"><span>Search</span></Button>
    </div>
  </div>  )
}

export default Search