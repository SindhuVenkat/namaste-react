import Accordionbody from "./Accordionbody"
const Accordioncomponent = ({data, setShowIndex, showItems}) => {
console.log(data,'data')


const HandlecClick = () => {
    setShowIndex()
}
return(
    <div className=" mx-auto my-4 bg-gray-50 shadow-lg p-4" >
     <div  className="flex justify-between cursor-pointer" onClick={HandlecClick}>
 
     <li className="font-bold text-lg">{data.title}</li>
     </div>
  {showItems && <Accordionbody item={data.itemCards}></Accordionbody>}
    </div>
)


}

export default Accordioncomponent