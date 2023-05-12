import React, { useEffect } from "react";
import { getAllMovies } from "../../redux/createAsyncThunk/AsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./main.css";
import CategoryButton from "../navbar/CategoryButton";
import { Swiper, SwiperSlide } from "swiper/react";
const Main = () => {
  const { movies, moviesLoading } = useSelector((state) => state.movieSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <div className="main__head">
      <CategoryButton />
      <div className="main__header">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link
                className="link__movie"
                to={`/single/${movie.id}`}
                key={movie.id}
              >
                <div className="main__title">
                  <img src={movie.poster} alt="Poster" width={300} />
                  <h4>{movie.title}</h4>
                  <h5>{movie.genres.slice(0, 20)}....</h5>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Main;

// movies.map((movie) => {
//   return (
// <Link
//   className="link__movie"
//   to={`/single/${movie.id}`}
//   key={movie.id}
// >
//   <div className="main__title">
//     <img src={movie.poster} alt="Poster" width={200} />
//     <h2>{movie.title}</h2>
//     <h3>{movie.genres.slice(0, 20)}....</h3>
//   </div>
// </Link>
