import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './views/About'
import Detail from './views/Detail'
import LandingPage from './views/LandingPage';
import Favorite from './components/Favorite';


function App() {

   const [ characters, setCharacters ] = useState([]);
   const location = useLocation();

   const navigate = useNavigate();
   const [ access, setAccess ] = useState(false);

  
   async function onSearch(id) {
      try {
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         const data = response.data
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }

      } catch (error) {
         console.log(error)
      }
      
   }

   function onClose(id) {
      const filterCharacters = characters.filter(character => character.id !== parseInt(id))
      setCharacters(filterCharacters);
   }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access])



   return (
      <div className='App'>
         
         
         {location.pathname !== '/' && (
            <Nav onSearch={onSearch} />
         )}

         <Routes>

            <Route path='/' element={<LandingPage login={login} />} />

            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> } />

            <Route path='/about' element={ <About/> } />

            <Route path='/detail/:id' element={ <Detail /> } />

            <Route path='*' element={''} />

            <Route path='/favorite' element={ <Favorite onClose={onClose}/> } />

         </Routes>


         

      </div>
   );

}

export default App;
