import { useEffect, useState } from "react"

const ApiFetch = () => {

    const [data,setData]=useState([]);
    const getData=async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await  res.json(); // here the promise gets and it returns a json
        const data = await result; // here the json also returns a promise so we need to await result.
        setData(data);
    }
  useEffect(()=>{
    setTimeout(()=>{
      getData();
    },1000)
  },[])  
  return (
    <div>
    {data.length===0 ? 
      <h1>Loading.....</h1>
      : data.map((item) => (
        <div key={item.id}>
            <h2>{item.title} | {item.userId}</h2>
            <p>{item.body}</p>
        </div>
    ))}  
    </div>
  )
}

export default ApiFetch