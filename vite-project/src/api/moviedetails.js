const moviedetails = (value)=>{
    //   fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${value}`).then((res)=>{
     const data =  fetch(`https://www.omdbapi.com/?i=${value}&apikey=7b640ed5`).then((res)=>{
       return res.json();
       }).then((res)=>{
        // console.log("data from omdb :",res);
        
        return res;
       })
    
       return data;
    }
    
    export default moviedetails;