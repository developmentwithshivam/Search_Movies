import React, { useEffect, useState } from 'react'
import styles from '../styles/Header.module.css';
import omdbService from '../api/omdbService'
import { useDispatch } from 'react-redux';
import { setData } from '../redux/MovieData/MovieDataSlice';
import { Link } from "react-router";
function Header() {
    const [SearchValue, setSearchValue] = useState('')
    const [MovieData, setMovieData] = useState('')
    const dispatch = useDispatch();
    const Serach =async (e)=>{
        e.preventDefault();
        const data = await omdbService(SearchValue)
        setMovieData(data);
        setSearchValue('');
    }
    useEffect(() => {
        if(MovieData!==""){
            dispatch(setData(MovieData))
        }
    }, [MovieData])
    
  return (
    <>
    <div className={styles.navbar}>
    <form onSubmit={Serach}>
    <div className={styles.container}>
        <h2 id='logo'>LOGO</h2>
        <input type='text' placeholder='Type..' value={SearchValue} onChange={(e)=>{setSearchValue(e.target.value);
        }}></input>
        <button type='submit'>Search</button>
    </div>
    </form>
        <button><Link to="/Favorites">Saved-Movies</Link></button>
        
    </div>
    </>
  )
}

export default Header