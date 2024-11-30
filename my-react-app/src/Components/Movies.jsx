import React, { useState } from "react";

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
  ]);

  return (
    <div>
      {/* Header */}
      <div className="text-2xl font-bold text-center my-5">
        <h1>Trending Movies</h1>
      </div>

      {/* Movies Grid */}
      <div className="flex justify-evenly flex-wrap gap-6">
        {movies.map((movieObj, idx) => {
          return (
            <div
              key={idx}
              className="w-[200px] h-[40vh] bg-cover bg-center rounded-xl shadow-lg hover:scale-110  duration-300 hover:cursor-pointer p-3 flex flex-col justify-between
              items-end"
              style={{ backgroundImage: `url(${movieObj.url})` }}
            >
              {/* Movie Title */}
              <div className="w-full text-center text-2xl text-white bg-gray-900/40 p-2 rounded-lg">
                {movieObj.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
