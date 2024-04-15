import { CDN_URL } from "../utls/constants";

const RestoCard = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId, areaName,id} = resData?.info
    return(
        <div className="card-container items-center">
        <div className="res-card min-h-full m-4 p-4 w-[250px] rounded-lg bg-gray-100 min-h-[530px] hover:bg-gray-200">
            <img className="rounded-lg min-h-[300px] object-cover h-full w-full" src={CDN_URL + cloudinaryImageId } />
            <h4 className="font-bold py-4 text-lg"> {name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5> {deliveryTime} mins</h5>
            <h5>{areaName}</h5>
            <h5>{id}</h5>
        </div>
        </div>
    )
}

export const Promotedlabel = (RestoCard) => {
 return(props)=>{
    return(
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Opened</label>
            <RestoCard {...props}/>
        </div>
    )
 }
}

export default RestoCard;