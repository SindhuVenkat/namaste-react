const Accordionbody = ({item}) => {
    console.log(item,'item')
   return(
    <div>
       {item.map((c)=><li>{c.card.info.name}</li>)}
    </div>
   )
}

export default Accordionbody;