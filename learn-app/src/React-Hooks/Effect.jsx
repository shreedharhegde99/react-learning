import axios from "axios";
import React, { useEffect, useState } from "react";

function GitHub() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();


// if null updates when mounted
// else dependent on the parameter given
// it gets fired  only after render   
  useEffect(() => {
    // console.log("data is",data)
  },[data])

  const handleClick = () => {
    if (query) {
      axios
        .get("https://api.github.com/search/users", {
          params: {
            q: query,
          },
        })
        .then((res) => res.data)
        .then((res) => setData(res.items));
    }
  };
// console.log("no effect here");
  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button onClick={() => handleClick()}>SEARCH</button>
      <div>
        {data &&
          data?.map((item,i) =>
            <img key={i} src={item.avatar_url} style={{ height: "100px", width: "100px" }} />)}
      </div>
    </>
  );
}

export default GitHub;
