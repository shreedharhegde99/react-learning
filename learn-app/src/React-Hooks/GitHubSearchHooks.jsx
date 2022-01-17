import React, { useState } from 'react';
import useAxios from './CustomHooks';



function GitHubSearch() {
   
const[input,setInput] = useState("")
  const [query, setQuery] = useState("")  
  const url =  `https://api.github.com/search/users?q=${query}` 
  
  // const users = useAxios(url)
  const users = null
  // console.log(users)
  
  return (
    <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={() => {
        alert("This feature is temporarily disabled")
      return  setQuery(input)
      }
      }
         >SEARCH</button>  
      <div>
        {users && users.map((item, i) => {
        return  <div key={i}>{item.login}</div>
        })}
      </div>
    </>
  )


}
 
export default GitHubSearch