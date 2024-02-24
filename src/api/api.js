import axios from "axios";

export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async ()=>{
    try{
      const res  = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
      // console.log(res);
      return res.data;
    }
    catch(err){
        console.error(err);
    }
}


export const fetchNewAlbums = async ()=>{
  try{
    const res  = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    // console.log(res);
    return res.data;
  }
  catch(err){
      console.error(err);
  }
};
