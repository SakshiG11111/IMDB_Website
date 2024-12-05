import React, { useEffect, useState } from 'react'
import genreids  from "../utils/utility"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Using free icon

function WatchList() {
  const [watchList,setWatchList]=useState([]);
  const [search,setSearch] =useState("");
  useEffect(() => {
    let moviesFromLS = localStorage.getItem("watchList");
    console.log(moviesFromLS);
    if (!moviesFromLS) return;
    setWatchList(JSON.parse(moviesFromLS));
    console.log(watchList);
  }, []);


  const handleAscendingRating=()=>{
    console.log("low to high");
    let sortedAscending=watchList.sort((m1,m2)=>m1.vote_average-m2.vote_average);
    // console.log(sortedAscending);
    setWatchList([...sortedAscending]);
  }
   const handledescendingRating = () => {
     console.log("high to low");
     let sorteddescending = watchList.sort(
       (m1, m2) => m2.vote_average - m1.vote_average
     );
    //  console.log(sorteddescending);
     setWatchList([...sorteddescending]);
   };

  const handlesearch = (e)=>{
      setSearch(e.target.value);
  }
  return (
    <>
      <div>
        <input className='h-[3rem] w-[19rem] bg-gray-200 px-4 outline-none border border-slate-600 ' placeholder='Search Movies' type='text' onChange={handlesearch} value={search}></input>
      </div>
      
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <FontAwesomeIcon
                    onClick={handleAscendingRating}
                    icon={faArrowDown}
                  />
                  <div>Rating</div>
                  <FontAwesomeIcon
                    onClick={handledescendingRating}
                    icon={faArrowUp}
                  />
                </div>
              </th>
              <th>
                <div className="Flex"> Popularity</div>
              </th>
              <th>
                <div className="Flex"> Genre</div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {
              watchList.filter((movie)=>(movie.title.toLowerCase().includes(search.toLowerCase())))
        
              .map(
              ({
                id,
                poster_path,
                title,
                vote_average,
                popularity,
                genre_ids,
              }) => {
                return (
                  <tr key={id} className="hover:bg-gray-50">
                    <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                      <img
                        className="h-[6rem] w-[10rem] object-fit"
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      />
                      <div className="font-medium text-gray-700 text-sm">
                        {title}
                      </div>
                    </td>
                    <td className="pl-6 py-4">{vote_average}</td>
                    <td className="pl-6 py-4">{popularity}</td>
                    <td className="pl-6 py-4">{genreids[genre_ids?.[0]]}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList