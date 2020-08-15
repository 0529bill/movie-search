import React from "react";
import Truncate from "react-truncate";

function InputBar(props) {
  let test = props.datas.map((prop, i) => {
    let picapi = "http://image.tmdb.org/t/p/w185_and_h278_bestv2/";
    let Api = "https://www.themoviedb.org/movie/";
    let urlApi = Api + prop.id + "-" + prop.title;
    return (
      <div className="inputBar" key={i}>
        <div className="inputPic">
          <img src={picapi + prop.poster_path} alt="movie_photo"></img>
        </div>
        <div className="inputContent">
          <h5>
            <a id="url" href={urlApi}>
              {prop.title}
            </a>
          </h5>
          <p>Release Date: {prop.release_date}</p>
          <p>Rating: {prop.vote_average}</p>
          <Truncate
            lines={3}
            ellipsis={
              <span>
                ... <a href={urlApi}>Read more</a>
              </span>
            }
          >
            <p>{prop.overview}</p>
          </Truncate>
        </div>
      </div>
    );
  });

  return <div>{test}</div>;
}

export default InputBar;
