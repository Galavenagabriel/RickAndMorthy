import { React, useState } from 'react';

export default function SearchBar(props) {
   const [ id, setId ] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input type='text' onChange={handleChange} value={id} />
         <button onClick={() => props.onSearch(id) }>Agregar</button>
      </div>

      
   );
}
