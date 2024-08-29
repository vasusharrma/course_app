import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Filter from './components/Filter';
import { filterData , apiUrl} from './data';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

 const[courseData , setCourseData] = useState([]);  

  useEffect(()=>{

    const fetchCourses = async () => {
      try{

        const dataIs = await fetch(apiUrl);
        const dataResponse = await dataIs.json();
        console.log("in app.js" , dataResponse);
        setCourseData(dataResponse.data);
      }
      catch(e){
        console.log(e);
      }
    }

    fetchCourses();

  },[])

  return (
    <div className="App">
      <Nav/>
      <div className='app_wrapper'>
        <Filter filterData={filterData}/>
        <Cards courseData = {courseData}/> 
      </div>
    </div>
  );
}

export default App;
