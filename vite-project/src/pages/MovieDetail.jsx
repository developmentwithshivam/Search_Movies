import { useParams } from "react-router-dom";
import moviedetails from '../api/moviedetails';
import { useEffect, useState } from "react";
import styles from "../styles/MovieDetails.module.css";
function MovieDetail() {
  const { id } = useParams();
  const [details, setdetails] = useState()
  const fetchdata = async ()=>{
    const details = await moviedetails(id)
    setdetails(details)
  }
  useEffect(() => {
    fetchdata();

  }, [])
  

  useEffect(() => {
   console.log(details);
   
  }, [details])
  
 
  
  return (
    details?
   <>
   <div className={styles.container}>
      <h1 className={styles.title}>{details.Title}</h1>
      <img src={details.Poster} alt={details.Title} className={styles.poster} />
      <div className={styles.details}>
        <p><strong>Year:</strong> {details.Year}</p>
        <p><strong>Genre:</strong> {details.Genre}</p>
        <p><strong>Plot:</strong> {details.Plot}</p>
        <p><strong>IMDB Rating:</strong> {details.imdbRating}</p>
      </div>
    </div>
   </>:
   <>
   <h1 className={styles.loding}>Loading...</h1>
   </>
  )
}

export default MovieDetail