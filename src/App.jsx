import { useState, useEffect } from 'react';
import './App.css';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import Noticias from './components/Noticias';
import { ARRAY_CATEGORIAS, API_KEY, ARRAY_PAISES } from './constantes';
import apiBusinessEmergencia from './mocks/apiBusinessEmergencia.json';
import apiEntertainmentEmergencia from './mocks/apiEntertainmentEmergencia.json';
import apiGeneralEmergencia from './mocks/apiGeneralEmergencia.json';
import apiHealtEmergencia from './mocks/apiHealthEmergencia.json';
import apiScienceEmergencia from './mocks/apiScienceEmergencia.json';
import apiSportEmergencia from './mocks/apiSportsEmergencia.json';
import apiTechnologyEmergencia from './mocks/apiTechnologyEmergencia.json';

function App() {
  let datos = '';
  const [categoria, setCategoria] = useState(ARRAY_CATEGORIAS[0]);
  const [pais, setPais] = useState(ARRAY_PAISES[1]);
  const [noticias, setNoticias] = useState([]);
  const getCategoria = (valor) => {
    setCategoria(valor);
  };
  const getPais = (valor) => {
    setPais(valor);
  };
  const consultaAPI = async () => {
    const respuesta = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${API_KEY}`
    );
    datos = await respuesta.json();
    if (respuesta.status < 400) {
      setNoticias(datos.articles);
    } else {
      if (categoria == 'business') {
        setNoticias(apiBusinessEmergencia.articles);
      } else if (categoria == 'entertainment') {
        setNoticias(apiEntertainmentEmergencia.articles);
      } else if (categoria == 'general') {
        setNoticias(apiGeneralEmergencia.articles);
      } else if (categoria == 'health') {
        setNoticias(apiHealtEmergencia.articles);
      } else if (categoria == 'science') {
        setNoticias(apiScienceEmergencia.articles);
      } else if (categoria == 'sports') {
        setNoticias(apiSportEmergencia.articles);
      } else if (categoria == 'technology') {
        setNoticias(apiTechnologyEmergencia.articles);
      }
    }
  };
  useEffect(() => {
    consultaAPI();
  }, []);
  useEffect(() => {
    consultaAPI();
  }, [categoria, pais]);
  return (
    <>
      <Titulo />
      <div className='contenedorPrincipal'>
        <div className='contenedorFormulario'>
          <Formulario
            consultaAPI={consultaAPI}
            getCategoria={getCategoria}
            getPais={getPais}
          />
        </div>
        <div className='contenedorNoticias'>
          <Noticias noticias={noticias} />
        </div>
      </div>
    </>
  );
}

export default App;
