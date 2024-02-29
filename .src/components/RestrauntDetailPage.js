
import { useParams } from "react-router";
import useRestraunt from '../../utls/useRestraunt';

const RestrauntDetailPage = () => {

    const {resId} = useParams()
    console.log(resId)
const [resInfo, resMenu] = useRestraunt(resId)

    return(
        <div>

           <h1> {resInfo.name}</h1>
            <h4>{resInfo.areaName}</h4>  
        <h4>{resInfo.cuisines}</h4>
 {resMenu?.map((res)=>{
          return <li>{res.card?.info?.name}</li>
          
        })}   
        </div>
    )
}

export default RestrauntDetailPage;