import React from 'react'
import styles from "../styles/MovieCard.module.css";
function Favorites() {
  const data = localStorage.getItem('saveditems');
  const savedData =data? JSON.parse(data):[];
  console.log(savedData);
  
  return (
     <div className={styles.container}>
          {savedData.map((item) => (
              <div key={item.imdbID} className={styles.card}>
              <img src={item.Poster} alt={item.Title} className={styles.poster} />
                <div className={styles.details}>
                    <h3>{item.Title}</h3>
                    <p>{item.Year}</p>
                </div>
             </div>
        ))}
          </div>
  )
}

export default Favorites