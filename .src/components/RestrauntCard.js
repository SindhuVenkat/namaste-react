import { CDN_URL } from "../../utls/Constants";

const RestoCard = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData?.data
    return(
        <div className="card-container">
        <div className="res-card">
            <img src={CDN_URL + cloudinaryImageId } />
            <h4> {name}</h4>
            <h5>{cuisines}</h5>
            <h5>{avgRating}</h5>
            <h5> {deliveryTime} mins</h5>
        </div>
        </div>
    )
}

export default RestoCard;