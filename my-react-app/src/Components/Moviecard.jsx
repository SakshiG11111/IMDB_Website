import React from 'react'

function Moviecard({movieObj,addtoWatchlist,removeFromWatchlist,watchList}) {
    function doesContain() {
      for (let i = 0; i < watchList.length; i++) {
        if (watchList[i].id == movieObj.id) {
          return true;
        }
      }
      return false;
    }
  return (
    <div
    //   key={idx}
      className="w-[200px] h-[40vh] bg-cover bg-center rounded-xl shadow-lg hover:scale-110 duration-300 hover:cursor-pointer p-3 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj["poster_path"]})`,
      }}
    >
      <div className="w-full text-center text-2xl text-white bg-gray-900/40 p-2 rounded-lg">
        {movieObj.title}
      </div>

      {doesContain() === false ? (
        <div
          onClick={() => addtoWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-100/60"
        >
          💙
        </div>
      ) : (
        <div
          onClick={() => removeFromWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-100/60"
        >
          ❌
        </div>
      )}
    </div>
  );
}

export default Moviecard