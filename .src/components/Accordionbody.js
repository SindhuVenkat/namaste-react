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
       <div  className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
       <li>{c.card.info.name}</li>
       <button  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => HandleAddBtn(c)}>ADD</button>
       <img src={CDN_URL + c.card.info.imageId} className="w-full" />
       </div>
       )}
    </div>
   )
}

export default Accordionbody;