import axios from 'axios';
import React, { useState,useEffect } from 'react';



function useAxios(url) {
  
  const [data, setData] = useState(null)
  


  useEffect(
    () => {
      axios.get(url)
      .then(res=>setData(res.data.items))
    },[url])

return  data

}

export default  useAxios