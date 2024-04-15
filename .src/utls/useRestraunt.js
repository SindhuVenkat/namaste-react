import { useEffect, useState } from "react";

const useRestraunt = (resId) =>{
    const[resMenu, setresmenu] = useState([])
    const[resInfo, setresinfo] = useState([])
    const[resCat, setresCat] = useState([])
    
    useEffect(()=>{
     fetchData()
    },[])
    
    
    async function fetchData() {
        try{
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.2765825&lng=76.6261085&restaurantId="+resId);
     //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.2765825&lng=76.6261085&restaurantId=394839&catalog_qa=undefined&submitAction=ENTER")
      const json = await data.json()
      console.log(json,'jsontest')
      console.log(json.data.cards[0].card.card.info,'restrauntdetailpage')
      setresinfo(json.data.cards[2].card.card.info)
      setresmenu(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
      console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards, 'itemcards')
      console.log(json,'cards recommended')
      setresCat(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }
    catch(e){
        console.error(e)
    }
    }
    
    return [resInfo, resMenu, resCat]
}

export default useRestraunt;