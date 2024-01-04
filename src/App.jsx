import react from 'react'
import { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from './store/homeSlice'

import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/searchResult'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Error from './pages/404/Error'
import Explore from './pages/explore/Explore'


function App() {
  const dispatch=useDispatch();
  const {url}=useSelector((state)=>state.home)
  useEffect(()=>{
     apiConfiguration();
  },[])
  const apiConfiguration=()=>{
    fetchDataFromApi('/configuration')
    .then((res)=>{
      // console.log(res)
      const url={
        backdrop:res.images.secure_base_url+'original',
        poster:res.images.secure_base_url+'original',
        profile:res.images.secure_base_url+'original'
      }
      dispatch(getApiConfiguration(url));
    })
  }
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:mediaType/:id' element={<Details/>} />
        <Route path='/search/:query' element={<SearchResult/>} />
        <Route path='/explore/:mediaType' element={<Explore/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
