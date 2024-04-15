
import { useParams } from "react-router";
import useRestraunt from '../utls/useRestraunt';
import Accordioncomponent from "./Accordioncomponent";
import Accordionbody from "./Accordionbody";
import { useState } from "react"
import { CDN_URL } from "../utls/constants";

const RestrauntDetailPage = () => {

    const {resId} = useParams()
    console.log(resId)
const [resInfo, resMenu, resCat] = useRestraunt(resId)
console.log(resInfo,'resinfo')
console.log(resMenu, 'resMenu')
console.log(resCat,'resCat')

const categories =  resCat?.filter((res) => res.card?.["card"]?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
//const itemCards = resCat?.filter((res) => res.card?.)   
console.log(categories,'cat')
const[showIndex, setShowIndex] = useState(null)


return(
        <div  className=" max-w-screen-md mx-auto">
          <div className="text-center">
           <h1 className="font-bold my-4 text-2xl"> {resInfo?.name}</h1>
            <h4>{resInfo?.areaName}</h4>  
        <h4>{resInfo?.cuisines}</h4>
        </div>
 {resMenu?.map((res)=>{
          return( 
          <div className="flex border-b-2 pb-5 my-6 justify-between">
            <div>
            
          <p className="font-bold text-lg">{res.card?.info?.name}</p>
          <p>{res.card?.info?.description}</p>
          </div>
          <div>
            <img className="rounded-lg object-cover w-40 h-36" src={CDN_URL + res.card?.info?.imageId} />
            </div>
          </div>
          )
        })}   
<h1 className="font-bold my-4 text-2xl">Categories</h1>
{categories.map((category, index) =>{ 
return <Accordioncomponent data ={category.card.card} 
setShowIndex = {() =>setShowIndex(index)}
showItems={index === showIndex ? true : false}/>
  
  }) }
  

  {/* <Accordioncomponent data ={category.card.card}/> */}
     {/* <Accordionbody item={categories.card.card.itemCards}/> */}
        
        </div>
    )
       }

export default RestrauntDetailPage;