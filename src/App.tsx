import './App.css'
import Axios from 'axios';
import { useState } from 'react';

function App() {
  const [resData, setresData] = useState();

  const getData = async () =>{
     try {
      const responseData = await Axios.get("http://localhost:3000/msg");
    const res = responseData.data.message;
    setresData(res);
    console.log(res);
     } catch (error) {
      console.log(`front error ${error}`);
     }
  }

  return (
    <>
       <div className='out'>
      <h1>Rajat Extension</h1>
      <button onClick={getData}>Click me!</button>
      <h3>{resData}</h3>
      </div>
    </>
  )
}

export default App
