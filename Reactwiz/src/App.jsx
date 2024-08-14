import Hello from './components/Hello';
function App() {
const person = {
name:'Adetola',
message:'Hi there',
emoji:'',
seatNumbers: [1, 4, 6]

}
  return (
<div className="App">
      <Hello person={person} />
    </div>
  )
   
    
}

export default App;
