import { restaurantList } from "../constant"
import Restaurantcard from "./Restaurantcard"

const Body = () => {
    return (
        <div className="resturant-list">
            <Restaurantcard {...restaurantList[0].data}/>
            <Restaurantcard {...restaurantList[1].data}/>
            <Restaurantcard {...restaurantList[2].data}/>
        </div>
    )
}

export default Body;