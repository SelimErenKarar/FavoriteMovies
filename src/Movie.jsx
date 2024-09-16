import React from 'react'

function Movie({ movie }) {
    const { title, year, director, description, link, image } = movie;
    return (
        <div className='movie' style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '20px',
            margin: '20px',
            border: '1px solid black',
            borderRadius: '10px'
        }}>
            <img src={image} width={200} height={300} />
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