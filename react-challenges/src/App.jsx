import {Routes , Route} from 'react-router-dom'
import Home from './Day-4 Routing/Pages/Home'
import Contact from './Day-4 Routing/Pages/Contact'
import About from './Day-4 Routing/Pages/About'
import { useEffect , useState} from "react";
import ProductDetailed from './Day-4 Routing/ProductDetailed';

function App() {

  const [fakeData,setFakeData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await res.json();
      setFakeData(data);
    } catch (error) {
      alert('Error fetching data:', error);
    }
  };
  
  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <h1>React Challenges</h1>
      <Routes>
        <Route path='/' element={<Home fakeData={fakeData}/>}/>
        <Route path='/product/:id' element={<ProductDetailed fakeData={fakeData}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
