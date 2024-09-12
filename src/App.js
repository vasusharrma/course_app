import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Filter from './components/Filter';
import { filterData , apiUrl} from './data';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

 const[courseData , setCourseData] = useState(null);  

 const [preCards , setPreCards] = useState(false);

 const [filterCards , setFilterCards] = useState('All');

  useEffect(()=>{

    const fetchCourses = async () => {
      try{

        const dataIs = await fetch(apiUrl);
        const dataResponse = await dataIs.json();
        console.log("in app.js" , dataResponse);
        setCourseData(dataResponse.data);
        setPreCards(true);
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
        <Filter filterData={filterData} filterCards={filterCards} setFilterCards={setFilterCards}/>
        {
      preCards? (<Cards courseData = {courseData} filterCards = {filterCards}/> ):( <div>Finding Cards</div>)
        }
      </div>
    </div>
  );
}

export default App;
