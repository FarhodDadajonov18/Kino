import React, { useEffect } from "react";
import "./single.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleMovie } from "../../redux/createAsyncThunk/AsyncThunk";

const Single = () => {
  const { eachMovie, eachLoading } = useSelector((state) => state.movieSlice);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(singleMovie(id));
  }, [id]);

  console.log(eachMovie);

  if (eachLoading) {
    return;
  }
  return (
    <div style={{ width: "100%", height: "100vh", textAlign: "center" }}>
      {eachMovie.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <img className="single__img" src={item.poster} />
            <h2>{item.title}</h2>
            <p>{item.genres}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Single;
