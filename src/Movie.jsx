import React from 'react'

function Movie({ movie }) {
    const { title, year, director, description, link, image } = movie;
    return (
        <div className='movie'>
            <img src={image} />
            <div className='movie-info' style={{
                marginLeft: '30px',
            }}>
                <h3>{title}</h3>
                <p>Release Year : {year}</p>
                <p>Director : {director}</p>
                <p>Description : {description}</p>
                <span>IMDB Page : </span><a href={link} target='_blank' rel='noreferrer'>{title}</a>
            </div>
        </div>
    )
}

export default Movie