import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BookGrid from './components/books/BookGrid';
import Search from './components/ui/Search';
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://ghibliapi.herokuapp.com/films?title=${query}`//?title=${query}  ?????
        //http://openlibrary.org/search.json?title=
      )
      
      //console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Search getQuery={(q) => setQuery(q)} />
      <BookGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
