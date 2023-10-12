import RestaurantCard from "./Restaurant-card";
import { shopdata } from "../Common/mock_data";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
//e-> event object
const Body =()=>{
  const [Searchtext, setSearchtext]=useState("");
  const [filtereddress,setfilteredshop]=useState(shopdata);
  function  handleonchange(e) {
    /*console.log("Event object",e.target.value);
    Searchtext=e.target.value;*/
    setSearchtext(e.target.value);
  }

  /*useEffect(( )=>{
    console.log("Use Effect hook");
  },[])*/

  
  function filterdress(){
    const filtereddress=shopdata.filter(shop=>{
      return shop.name.toLowerCase().includes(Searchtext.toLowerCase());
    });
    setfilteredshop(filtereddress);
    console.log("Filtered Shops:",filtereddress);
  }

    return(
     <> <div className="Search-bar">
      <input type="text" onChange= {handleonchange}></input>
      <button onClick={filterdress}>Search</button>
      </div>
      <div className="res-container">
      {
        filtereddress.map((shop)=>
        {
          return (
            <Link to={`/shop/${shop.id}`}>
            <RestaurantCard 
          key={shop.id}shopdata={shop}/>
            </Link>//"/shop/"+shop.id-normal way of linking : above mentioned is called as template litreal
          
        )}
        )
      }
      </div>
       </>
    );
  };

  export default Body;