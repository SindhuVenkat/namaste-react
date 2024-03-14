
import { useParams } from "react-router";
import useRestraunt from '../../utls/useRestraunt';
import Accordioncomponent from "./Accordioncomponent";
import Accordionbody from "./Accordionbody";
import { useState } from "react"

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
        <div>

           <h1> {resInfo.name}</h1>
            <h4>{resInfo.areaName}</h4>  
        <h4>{resInfo.cuisines}</h4>
 {resMenu?.map((res)=>{
          return <li>{res.card?.info?.name}</li>
          
        })}   
<h1>Categories</h1>
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