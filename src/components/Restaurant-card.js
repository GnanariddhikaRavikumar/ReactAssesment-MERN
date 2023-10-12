const RestaurantCard=(props)=>{
    const {name,dress,url,cost,size}=props.shopdata;
    return(
      <div className='restaurant-card'>
      <img src={url}alt="dresses"></img>
      <div className="res-card-details">
      <div>
        <h2>{name}</h2>
        <span>{dress}</span>
      </div>
      <div>
        <span>{cost}</span>
        <h5>{size}</h5>
      </div>
      </div>
      </div>
    )
  }
  
export default RestaurantCard;