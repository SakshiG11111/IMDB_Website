import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Movies() {
  const [movies, setMovies] = useState([
    {
      url: "https://fastly.picsum.photos/id/866/450/300.jpg?hmac=LjxXLARrOTbivRrQD3Z2n3fNVwGNy21JDJduhoRLJ-s",
      title: "Movie 1",
    },
    {
      url: "https://fastly.picsum.photos/id/866/450/300.jpg?hmac=LjxXLARrOTbivRrQD3Z2n3fNVwGNy21JDJduhoRLJ-s",
      title: "Movie 2",
    },
    {
      url: "https://fastly.picsum.photos/id/866/450/300.jpg?hmac=LjxXLARrOTbivRrQD3Z2n3fNVwGNy21JDJduhoRLJ-s",
      title: "Movie 3",
    },
    {
      url: "https://fastly.picsum.photos/id/866/450/300.jpg?hmac=LjxXLARrOTbivRrQD3Z2n3fNVwGNy21JDJduhoRLJ-s",
      title: "Movie 4",
    },
    {
      url: "https://fastly.picsum.photos/id/866/450/300.jpg?hmac=LjxXLARrOTbivRrQD3Z2n3fNVwGNy21JDJduhoRLJ-s",
      title: "Movie 5",
    },
  ]);

  const [pageNo, setPageNo] = useState(1);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrevious = () => {
    if (pageNo === 1) return;
    setPageNo(pageNo - 1);
  };

  return (
    <div>
      <div className="text-2xl font-bold text-center my-5">
        <h1>Trending Movies</h1>
      </div>

      <div className="flex justify-evenly flex-wrap gap-6">
        {movies.map((movieObj, idx) => (
          <div
            key={idx}
            className="w-[200px] h-[40vh] bg-cover bg-center rounded-xl shadow-lg hover:scale-110 duration-300 hover:cursor-pointer p-3 flex flex-col justify-between items-end"
            style={{ backgroundImage: `url(${movieObj.url})` }}
          >
            <div className="w-full text-center text-2xl text-white bg-gray-900/40 p-2 rounded-lg">
              {movieObj.title}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 bg-gray-400 p-4 h-[50px] w-full mt-8">
        <div onClick={handlePrevious} className="cursor-pointer px-8">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className="cursor-pointer px-8">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Movies;



