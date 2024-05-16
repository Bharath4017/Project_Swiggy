import RestuarantCard from "./RestaurantCard";

const Body=()=>{
    const resList=[{
        resName:"KFC",
        cuisine:"Fast Food"
      },
      {
        resName:"dsdsFC",
        cuisine:"dsdsst Food"
      }]
    return(
      <div className="body">
         <div className="search">
            search
          </div>
            <div className="res-container">
                {resList.map((restuarant)=>(
                  <RestuarantCard resData={restuarant}/>
                ))}
    

         </div>
      </div> 
    )
  }

  export default Body;