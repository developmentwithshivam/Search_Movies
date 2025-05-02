import React from 'react'
import styles from "../styles/MovieCard.module.css";
function Favorites() {
  const data = localStorage.getItem('saveditems');
  const savedData =data? JSON.parse(data):[];
  console.log(savedData);
  
  return (
    savedData.length > 0?<> <div className={styles.container}>
    {savedData.map((item) => (
        <div key={item.imdbID} className={styles.card}>
        <img src={item.Poster} alt={item.Title} className={styles.poster} />
          <div className={styles.details}>
              <h3>{item.Title}</h3>
              <p>{item.Year}</p>
          </div>
       </div>
  ))}
    </div></>:<>
    <h1>Loding..</h1>
    </>
    
  )
}

export default Favorites