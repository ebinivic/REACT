import Fruit from "./Fruit";
export default function Fruits() {
    //const Fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapples"];
    const Fruits =[ 
        {name:"Apple", price:10, emoji:''},
        {name:"Peas", price:13, emoji:''},
        {name:"Oranges", price:14, emoji:''},
    
]
    return <div> 
        <ul>
            {Fruits.map((Fruit)=>(
                <Fruit 
                key={Fruit.name}
                name={Fruit.name} 
                price={Fruit.price} 
                emoji={Fruit.emoji}
                />
                ))}
             </ul>
    </div>;
}