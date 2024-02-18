import RestoCard from "./RestrauntCard.js";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI.js";

const Body = () => {

    const [listRestraunt, setListRestraunt] = useState([])
    const [searchText, setSearchText] = useState('')
    const [filterRestraunt, setFilterRestraunt] = useState([])
//  //const [allrestraunts, setAllrestraunts] = useState([])
// const filterData = allrestraunts.filter((res) =>{
//    return  res?.info.avgRating > 4.3;
// })



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



return listRestraunt.length === 0 ? <ShimmerUI></ShimmerUI> : (
        <div className="body">
            <div className="filter">
                <input className="filtername" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}  
                ></input>
            <button className="filter-btn"
            onClick={() =>{

                console.log(searchText)
                const filteredRestraunt = listRestraunt.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    console.log(filteredRestraunt)
                    setFilterRestraunt(filteredRestraunt)
            } 
            }
            >search</button>
            </div>
            <div className="resto-container">
                {console.log(filterRestraunt)}
            {filterRestraunt.map((res) =>{
            return <RestoCard key={res.info.id} resData ={res}/>

            })}
            </div>
        </div>
)
        }
export default Body;