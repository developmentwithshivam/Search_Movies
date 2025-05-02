import React, { useEffect, useState } from "react";
import styles from "../styles/MovieCard.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router";
function MovieCard() {
  const [issaved, setissaved] = useState(false);
  const MovieData = useSelector((state) => state.MovieData.Data);
  const length = MovieData?.Search?.length || 0;
  let arr = [];
  let savedarr = [];
  if (length) {
    for (let i = 0; i < length; i++) {
      const item = MovieData.Search[i];
      arr.push(item);
    }
  }
  const data = localStorage.getItem("saveditems");
  const storedItems =data? JSON.parse(data): [];
  const saved = (item)=>{
    const isAlreadySaved = storedItems.some(
      (savedMovie) => savedMovie.imdbID === item.imdbID
    );
  
    if (isAlreadySaved) {
      console.log("already saved");
      return;
    }
    savedarr = [...storedItems,item];
    localStorage.setItem("saveditems", JSON.stringify(savedarr))
    setissaved((prev)=>!prev)
    
  }
  const knowmore = ()=>{

  }
  return (
    <>
      <div className={styles.container}>
      {arr.map((item) => {
          const imdbID = item.imdbID;
          const isSaved = storedItems.some((savedMovie)=> item.imdbID===savedMovie.imdbID);
          return <div key={item.imdbID} className={styles.card}>
          <img src={item.Poster} alt={item.Title} className={styles.poster} />
            <div className={styles.details}>
                <h3>{item.Title}</h3>
                <p>{item.Year}</p>
                <button className={styles.savebutton} onClick={()=>{saved(item)}}>{isSaved?null:"save"}</button>
                <Link to={`/MovieDetail/${imdbID}`}><button className={styles.savebutton} onClick={()=>{knowmore(item)}}>Know More</button></Link>
            </div>
         </div>
})}
      </div>


    </>
  );
}

export default MovieCard;
