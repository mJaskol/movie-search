import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onBlur = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter the name of a Ghibli movie: (eg. My Neighbor Totoro)'
                    value={text}
                    onChange={(e) => onBlur(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search