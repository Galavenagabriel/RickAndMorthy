  import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate, } from 'react-router-dom';


const email = 'gabi@gmail.com';
const password = '123456'


function App() {
   const location = useLocation();
   const navigate = useNavigate(); 
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
       if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
       }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }


   const onClose = (id) => {
      const characterFiltered = characters.filter(characters =>
         characters.id !== Number(id))
      setCharacters(characterFiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/'
            ? < Nav onSearch={onSearch}/>
            : null
         }
         
         <Routes>
         <Route path= '/' element={<Form login={login}/>} />
            
            <Route path='/home' element=
            { <Cards characters={characters} onClose={onClose}/> }> 
            </Route>
            
            <Route path='/about' element={<About/>} />
            <Route path='/Detail/:id' element={<Detail/>} />

         </Routes>
       
        
      </div>
   );
}

export default App;
