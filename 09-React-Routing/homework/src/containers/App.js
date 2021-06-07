import React, { useState } from 'react';
import './App.css';
import Ciudad from "../components/Ciudad.jsx";
import About from "../components/About.jsx";
import { Route } from "react-router-dom";
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
/* import estrellas from "../components/img" */
import { toast } from "react-toastify"
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';


function App() {
  const [cities, setCities] = useState([]);

  const [ darkMode, setDarkmode] = useState(false)

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
    toast.success('Ciudad eliminada con exito');
  }


  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r =>  r.json())
      .then((recurso) => {
        if (recurso.main) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if (!cities.find(el => el.name === ciudad.name)) {
            setCities(oldCities => [...oldCities, ciudad]);
          } else {
            toast.error("Ya agregaste este lugar");
          }
        }
      })

  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id == parseInt(ciudadId));
    if (ciudad.length > 0) {
        return ciudad[0];
    
      } else {
          return (
             <p>No hay ciudades para mostrar</p>
          );
    }
  }

  const handleDarkMode = () => {
    setDarkmode(!darkMode)
  }

  const Rutas = (
    <>
      <Route exact path="/about" component={About}></Route>
      <Route exact path='/ciudad/:ciudadId' render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />}
      />
    </>
  )


  return (
    <div className="App" style={ darkMode ? {backgroundColor:"#575361", transition:"500ms"} : {backgroundColor:"#CFC6E6", transition:"500ms"}}>

      <Nav onSearch={onSearch} darkMode={darkMode} handleDarkMode= {handleDarkMode} />
      {Rutas}
     
      <div>
        <Route exact path="/"><Cards
          darkMode= { darkMode }
          cities={cities}
          onClose={onClose}
        /></Route>

      </div>

      <footer className="footer">
        <p>Santiago Rosales 2020</p>
      </footer>
    </div>
  );
}

export default App;
