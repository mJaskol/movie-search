import React from 'react'

const BookItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.image} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.title}</h1>
                    <h2>{item.original_title_romanised}</h2>
                    <ul>
                        <li>
                            <strong>Director: </strong>{item.director}
                        </li>
                        <li>
                            <strong>Release date: </strong>{item.release_date}
                        </li>
                        <li>
                            <strong>Rating: </strong>{item.rt_score}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookItem