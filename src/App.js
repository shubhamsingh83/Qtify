import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Section from "./components/Section/Section";
import { useState } from "react";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";
import { useEffect } from "react";
import styles from "./App.module.css"


function App() {
  //const[data,setData]  = useState([]);
  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [newAlbumsData,setNewAlbumsData] = useState([]);
  

const generateTopAlbums = async()=>{
  try{
       const data = await fetchTopAlbums();
       setTopAlbumsData(data);
  } catch(err){
     console.error(err);
  }

}



const generateNewAlbums = async()=>{
  try{
       const data = await fetchNewAlbums();
       setNewAlbumsData(data);
  } catch(err){
     console.error(err);
  }

}

useEffect(()=>{
   generateTopAlbums();
   generateNewAlbums ();
},[])

  return (
  <div>
     <Navbar/>
     <Hero/>
     {/* {
      topAlbumsData.map((topAlbum)=> (
        <Card data={topAlbum} type="album" key={topAlbum.id}/>
      ))
     } */}
     <div className={styles.sectionWrapper}>
     <Section 
      data = {topAlbumsData}
      title="Top Albums" 
      type="album"
      />

    <Section 
      data = {newAlbumsData}
      title="New Albums" 
      type="album"
      />
     </div>
  </div>
  );
}

export default App;
