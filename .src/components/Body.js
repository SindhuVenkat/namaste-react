import RestoCard, {Promotedlabel} from "./RestrauntCard.js";
import { useState, useEffect, useContext } from "react";
import ShimmerUI from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utls/useOnlineStatus.js";
import UserContext from "../utls/UserContext.js";

const Body = () => {

    const [listRestraunt, setListRestraunt] = useState([])
    const [searchText, setSearchText] = useState('')
    const [filterRestraunt, setFilterRestraunt] = useState([])
//  //const [allrestraunts, setAllrestraunts] = useState([])
// const filterData = allrestraunts.filter((res) =>{
//    return  res?.info.avgRating > 4.3;
// })

const {loggedInuser, setUserName} = useContext(UserContext)

const onlinestatus = useOnlinestatus()

const Promotedcomponent = Promotedlabel(RestoCard)

useEffect(()=>{
 
fetchData()
},[])

async function fetchData() {
    try{
const fetchData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.2765825&lng=76.6261085&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
const datajson = await fetchData.json()
setListRestraunt(datajson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
setFilterRestraunt(datajson.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
}
catch(e){
console.error(e)
}
}

console.log(listRestraunt,'list')

if(onlinestatus === false)
return <h1>Check your internet connection and try again</h1>

return listRestraunt.length === 0 ? <ShimmerUI></ShimmerUI> : (
        <div className="body">
             <div className="filter flex">
            <div className="search m-4 p-4 flex items-center">
                <input  className="border border-solid border-black" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}  
                ></input>
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() =>{

             
                const filteredRestraunt = listRestraunt.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                 
                    setFilterRestraunt(filteredRestraunt)
            } 
            }
            >search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <label>UserName: </label>
            <input
            className="border border-solid border-black m-2 pl-2"
            value={loggedInuser}
            onChange={(e) => setUserName(e.target.value)}
          />
</div>
</div>
<div className="container mx-auto px-4">
            <div className="flex justify-between flex-wrap">
             
            {filterRestraunt.map((res) =>{
             return <Link to={'/restraunt/'+res.info.id} key={res?.info?.id}>{res.info.isOpen ?(<Promotedcomponent resData = {res}/>) : (<RestoCard  resData ={res}/>)}</Link>})}
            </div>
            </div>
        </div>
)
        }
export default Body;