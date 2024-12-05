import React, { useEffect, useState } from 'react'
import genreids  from "../utils/utility"

function WatchList() {
  const [watchList,setWatchList]=useState([]);
  useEffect(() => {
    let moviesFromLS = localStorage.getItem("watchList");
    console.log(moviesFromLS);
    if (!moviesFromLS) return;
    setWatchList(JSON.parse(moviesFromLS));
    console.log(watchList);
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
        {
          watchList.map(({id,poster_path,title,rating,popularity,genre_ids})=>{
            return (
              <tr key={id}>
                <td>
                  <img src={`https://image.tmdb.org/t/p/original${poster_path}`}/>
                  <div>{title}</div>
                </td>
                <td>{rating}</td>
                <td>{popularity}</td>
                <td>{genreids[genre_ids?.[0]]}</td>
              </tr>
            );
          })
        }
         
        </tbody>
      </table>
    </div>
  );
}

export default WatchList