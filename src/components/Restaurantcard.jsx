const Restaurantcard = ({restaurant}) => {
    const {cloudinaryImageId , name , cuisines, lastmMileTravelString} = restaurant.data 

    return (
        <div className="card">
            <img src= {`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
        <h2> {name} </h2>
        <h3> {cuisines.join(",")}</h3>
        <h4>{lastmMileTravelString}</h4>
        </div>
    )
}

export default Restaurantcard;