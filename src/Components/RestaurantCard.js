const RestuarantCard=({resData})=>{
      
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
        <img className="res-log" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" alt="sdf" />
        <h3>{resData.resName}</h3>
        <h4>{resData.cuisine}</h4>
             <h4>4.4 starts</h4>
             <h4>30 minutes</h4>
      </div>
    )
  } 

  export default RestuarantCard;