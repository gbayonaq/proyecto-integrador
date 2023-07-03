import Cards from "./components/cards/Cards";
import axios from "axios";
import logoRM from "./assets/logorm.png";
import {useState, useEffect} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";

import NavBar from "./components/navBar/navBar";

import "./App.css";
import Detail from "./views/detail/detail";
import About from "./views/about/about";
import ErrorPage from "./views/error/errorPage";
import LandingPage from "./views/landing/landingPage";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "guillermo-bayona@hotmail.com";
  const PASSWORD = "password40";

  function loginHandler(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function searchHandler(id) {
    // setCharacters([...characters, example]);
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
    if (data.name) {

        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        //window.alert("¡No hay personajes con este ID!");
      }
    })
    .catch((err) => window.alert("¡No hay personajes con este ID!"));
  }

  function closeHandler(id) {
    let deleted = characters.filter((character) => character.id !== Number(id));

    setCharacters(deleted);
  }

  function randomHandler() {
    let haveIt = [];
    //Generate random number
    let random = (Math.random() * 826).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  }

  return (
    <div className="App">
      <img className="title" src={logoRM} alt="logo" />
      {location.pathname !== "/" && (
        <NavBar onSearch={searchHandler} random={randomHandler} />
      )}

      <Routes>
        <Route path="/" element={<LandingPage login={loginHandler} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
