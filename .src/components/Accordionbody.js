import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utls/constants";
import { AddItem } from "../../utls/Cartslice";

const Accordionbody = ({item}) => {
   const dispatch = useDispatch()

   const HandleAddBtn = (item) => {
      dispatch(AddItem(item))
   }
   return(
    <div>
       {item.map((c)=>
       <div className="card-body">
       <li>{c.card.info.name}</li>
       <button onClick={() => HandleAddBtn(c)}>ADD</button>
       <img src={CDN_URL + c.card.info.imageId} className="w-full" />
       </div>
       )}
    </div>
   )
}

export default Accordionbody;