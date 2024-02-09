import restaurantList from "../../utls/moclkdata.js";
import RestoCard from "./RestrauntCard.js";
const Body = () => {
    return(
        <div class="body">
            <div>search</div>
            <div class="resto-container">
            {restaurantList.map((res) =>{
            return <RestoCard key={res.data.adTrackingID} resData ={res}/>

            })}
            </div>
        </div>
    )
}

export default Body;