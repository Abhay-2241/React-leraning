import { useState } from "react"
import { restaurantList } from "../constant"
import Restaurantcard from "./Restaurantcard"

const Body = () => {

    const [searchInput , setSearchInput] = useState("");
    return (
        <>
        <div className="Search-container">
            <input type="text" 
            className="search-input"
            placeholder="Search for restaurants"
            value={searchInput}
            onChange={(e) => {
                setSearchInput(e.target.value);
            }}
            />
            <button className="btn" >Search - {searchInput}</button>

        </div>

        <div className="resturant-list">
          {restaurantList.map((restaurant) => {
            return (
                <Restaurantcard {...restaurant.data} key = {restaurant.data.id}/>
            )
          })}
        </div>
        </>
    )
}

export default Body;