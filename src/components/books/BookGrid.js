import React from 'react'
import BookItem from './BookItem'

const BookGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <section className='cards'>
            {items.map((item) => (
                <BookItem key={ item.id } item={item}></BookItem>
            ))}
        </section>
    )
}

export default BookGrid