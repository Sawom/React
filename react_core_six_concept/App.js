import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
function App() {
  // array
  const gadget = ['phone','mobile', 'desktop','watch','ear phone']
  const players = [ 
    {name: 'Mahi' , age: '24years', highest: 141 } ,
    {name: 'Sawom' , age: '24years', highest: 175 } ,
    {name: 'Afjal' , age: '25years', highest: 126 }
  ]
  return (
    <div className="App">
      <ul>
        {
          gadget.map(gad  => <li>{gad}</li>)
        }
      </ul>
      <h1> <u>my best friends</u> </h1>
      <LoadUsers></LoadUsers>
      <Friend1></Friend1>
      <Friend2></Friend2>
      <Friend3 name = "Hand watch" color = 'black' type = 'digital'></Friend3>
      {
      players.map(batsman => <Partnership name={batsman.name} age={batsman.age} highest={batsman.highest} ></Partnership>)
      }
      <Counter></Counter>
    </div>
    
  );
}
// api part
function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div className="user">
      <h2>Name: {props.name}</h2>
      <p>Call me... {props.phone}</p>
    </div>
  )
} 
//api end

// count 
function Counter(){
  const [count, setCount] = useState(69);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div style={{
      backgroundColor: '#7B0A3C',
      color: 'white',
      margin: '5%',
      padding: '2%',
      border: '5px solid #0F1885' ,
      borderRadius: '10px'
    }} >
      <h1>count: {count} </h1>
      <button onClick={handleIncrease}>increase</button> <br /> <br />
      <button onClick={handleDecrease}>decrease</button>
    </div>
  );
}
function Friend1(){
  return (
    <div className='friend1'>
        <h2>Name: Desktop</h2>
        <h3>Ram: 16gb </h3>
        <h3>Hard-disk-1: 240gb ssd </h3>
        <h3>Hard-disk-2: 1TB</h3>
    </div>
  );
}
function Friend2(){
  const friend2 = {
    backgroundColor: '#066D31',
    color: 'white',
    margin: '5%',
    padding: '2%',
    border: '5px solid #C03FA1' ,
    borderRadius: '10px'
  }
  return (
      <div style={friend2}>
          <h2>Name: Redmi note 9</h2>
          <h3>Ram: 4gb </h3>
          <h3>Storage: 64Gb </h3>
          <h3>Camera: 48MP</h3>
      </div>
  );
}
function Friend3(props){
  return (
    <div style={{
      backgroundColor: '#7B0A3C',
      color: 'white',
      margin: '5%',
      padding: '2%',
      border: '5px solid #0F1885' ,
      borderRadius: '10px'
    }} >
        <h2>Name: {props.name} </h2>
        <h3>Color: {props.color} </h3>
        <h3>Type: {props.type} </h3>
    </div>
  );
}
function Partnership(props){
  return(
    <div className='friend1'>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Highest: {props.highest} </h2>
    </div>
  );

}
export default App;