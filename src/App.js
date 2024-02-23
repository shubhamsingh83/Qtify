import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Section from "./components/Section/Section";
import { useState } from "react";
import { fetchSongs, fetchTopAlbums } from "./api/api";
import { useEffect } from "react";
import styles from "./App.module.css"


function App() {
  //const[data,setData]  = useState([]);
  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [songsData,setSongsData] = useState([]);
  // const [filteredDataValues,setFilteredDataValues] =useState([]);

const generateTopAlbums = async()=>{
  try{
       const data = await fetchTopAlbums();
       setTopAlbumsData(data);
  } catch(err){
     console.error(err);
  }

}

// const filteredData = (val)=>{
//   console.log(val);
//   setFilteredDataValues(val);
// }

const generateAllSongData = async()=>{
  try{
       const data = await fetchSongs();
       setSongsData(data);
  } catch(err){
     console.error(err);
  }

}

useEffect(()=>{
   generateTopAlbums();
   generateAllSongData ();
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
      data = {topAlbumsData}
      title="New Albums" 
      type="album"
      />
     </div>
  </div>
  );
}

export default App;
