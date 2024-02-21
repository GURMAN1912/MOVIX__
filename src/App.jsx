import react from 'react'
import { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from './store/homeSlice'

import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Error from './pages/404/Error'
import Explore from './pages/explore/Explore'

function App() {
  const dispatch=useDispatch();
  const {url}=useSelector((state)=>state.home)
  useEffect(()=>{
     apiConfiguration();
     genresCall()
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
  const genresCall=async()=>{
    let promises=[]
    let endPoints=['tv','movie' ]
    let allGenres={}
    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data=await Promise.all(promises)
    data.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id]=item))
    })
    console.log(allGenres)
    dispatch(getGenres(allGenres))
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
    <Footer/>
    </BrowserRouter>
  )
}

export default App
