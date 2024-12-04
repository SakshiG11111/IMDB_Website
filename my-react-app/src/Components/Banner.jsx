import { useEffect, useState } from "react";
import axios from 'axios';
function Banner() {
  // fetch("https://api.themoviedb.org/3/movie/upcoming");

  const [bannerImage, setBannerImage] = useState("https://fastly.picsum.photos/id/977/450/300.jpg?blur=2&hmac=wye__R8nkN-leTqzbqHvvK7AwZTGwZY6Nb3fzDsEx50");
  const [title,setTitle] = useState("PlaceHolder title")

  useEffect(()=>{
    console.log("use effect fetching data");
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=e8974030af70f309fb555b551d0e9bae&language=en-US&page=1"
      )
      .then((res) => {
      console.log(res);
        const firstMovie = res.data.results[0];
        const firstMovieTitle = firstMovie.title;
        const firstMovieBanner = firstMovie["backdrop_path"];
        setTitle(firstMovieTitle);
        setBannerImage(
          `https://image.tmdb.org/t/p/original${firstMovieBanner}`
        );
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover flex items-end"
      style={{ backgroundImage: `url(${bannerImage})`}}
    >
      <div className="text-white w-full text-center text-2xl">{title}</div>
    </div>
  );
}

export default Banner;

