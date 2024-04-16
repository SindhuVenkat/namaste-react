import { useDispatch } from "react-redux";
import { CDN_URL } from "../utls/constants";
import { AddItem } from "../utls/Cartslice";

const Accordionbody = ({item}) => {
   const dispatch = useDispatch()

   const HandleAddBtn = (item) => {
      dispatch(AddItem(item))
   }
   return(
    <div>
      
       {item.map((c)=>
       <div  className="p-2 m-2  relative border-gray-200 border-b-2 text-left flex justify-between">
         
       <p>{c?.card?.info.name}</p>
     
      
       <div><img src={CDN_URL + c.card?.info?.imageId} alt="img not found" className="rounded-lg object-cover w-40 h-36" />
       </div>
      
       <button  className="p-2 right-0 bottom-1 absolute mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => HandleAddBtn(c)}>ADD</button>
        
       </div>
       )}
    </div>
   )
}

export default Accordionbody;