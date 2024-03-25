import Accordionbody from "./Accordionbody"
const Accordioncomponent = ({data, setShowIndex, showItems}) => {
console.log(data,'data')


const HandlecClick = () => {
    setShowIndex()
}
return(
    <div >
     <div className="cardTitle" onClick={HandlecClick}>
 
     <li>{data.title}</li>
     </div>
  {showItems && <Accordionbody item={data.itemCards}></Accordionbody>}
    </div>
)


}

export default Accordioncomponent