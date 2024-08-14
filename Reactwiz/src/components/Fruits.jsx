export default function Fruits() {
    //const Fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapples"];
    const Fruits =[ 
        {name:"Apple", price:10, emoji:''},
        {name:"Peas", price:13, emoji:''},
        {name:"Oranges", price:14, emoji:''},
    
]
    return <div> 
        <ul>
            {Fruits.map((Fruit)=>(<li key={Fruit}>{''}{Fruit.emoji} {Fruit.name} ${Fruit.price}</li>))}
             </ul>
    </div>;
}