import "./Item.css"

function Item(props){
    const itemName1 = props.name;
    return(
      <div>
        <p>{itemName1}</p>
        {props.children}
      </div>  
    );
}


export default Item;