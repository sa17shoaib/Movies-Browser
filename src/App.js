import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import {Routes,Route} from 'react-router-dom';
import SearchView from './components/SearchView';
import { useState,useEffect } from 'react';
import MovieView from './components/MovieView';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Error404 from './components/Error404';

// API Key- b30300bf291c546bd371b52507aec49b
// Fetch request- https://api.themoviedb.org/3/search/movie?api_key=b30300bf291c546bd371b52507aec49b&language=en-US&query=Star%20wars&page=1&include_adult=false
// Search Link- https://api.themoviedb.org/3/search/movie?api_key=b30300bf291c546bd371b52507aec49b&query=Oppenheimer


function App() {

  const [searchText,setSearchText] = useState('');
  const [searchResults,setSearchResults] = useState([]);

  useEffect(()=>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=b30300bf291c546bd371b52507aec49b&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        setSearchResults(data.results);
      })
    }
  },[searchText]);

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutView/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />}/>
        <Route path="/movie/:id" element={<MovieView />}/>
        <Route path="/*" element={<Error404 />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
