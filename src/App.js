//Commons imports
import { useState, useEffect } from 'react';
import axios from 'axios';
//Styles
import './App.css';
//Componenents
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './views/About/About.jsx';
//import Home from './views/Home/Home.jsx';
import Detail from './views/Detail/Detail.jsx';
import Form from './components/Form/Form';
//Router-Dom
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import PathRoutes from './helpers/Routes.helper.js';
import Favorites from './components/Favorites/Favorites';

//const email = 'lauti@gmail.com';
//const password = 'lautaro10';

function App() {

   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearchRandom() {
      axios(`http://localhost:3001/rickandmorty/character/`)
      .then(({ data }) => {
         const maxId = data.info.count;
         const randomId = Math.floor(Math.random() * maxId) + 1;
         onSearch(randomId);
      });
   }


  const onSearch = async (id)=> {
      try {
          const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
          
            if (data.name) {
               const exists = characters.some((char) => char.id === data.id);
               if (!exists) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡Este personaje ya está en la lista!');
               }
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         ;
      } catch (error) {
        console.log(error.message);
      }
 
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter((char) => char.id !== Number(id));
      setCharacters(charactersFiltered);
   }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
         
      } catch (error) {
         console.log(error.message);
      }
    
   }

   return (
      <div className='App'>
         {
            pathname !== '/' && <Nav onSearch={onSearch} onSearchRandom={onSearchRandom} />
         }
         
         <Routes>
            <Route path={PathRoutes.FORM} element={<Form login={login} />} />
            <Route path={PathRoutes.ABOUT} element={<About />} />
            <Route path={PathRoutes.HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={PathRoutes.DETAIL} element={<Detail />} />
            <Route path={PathRoutes.FAVORITES} element={<Favorites />} />
         </Routes>
         <body></body>
      </div>
   );
}

export default App;
