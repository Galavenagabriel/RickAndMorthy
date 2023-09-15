import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'

function Detail () {
    const { id } = useParams();
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return (
        <div className='detail-container'>
            
            <div className='img-container'>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
            </div>

            <div className='details'>
                <h3>Status:</h3>
                <p>{character.status}</p>
            </div>

            <div>
                <h3>Species:</h3>
                <p>{character.species}</p>
            </div>

            <div>
                <h3>Gender:</h3>
                <p>{character.gender}</p>
            </div>

            <div>
                <h3>Origin:</h3>
                <p>{character.origin?.name}</p>
            </div>

        </div>
    )

}

export default Detail;