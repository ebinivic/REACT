export default function Fruits() {
    const Fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapples"];
    return <div> 
        <ul>
            {Fruits.map((Fruit)=>(<li key={Fruit}>{Fruit}</li>))}
             </ul>
    </div>;
}