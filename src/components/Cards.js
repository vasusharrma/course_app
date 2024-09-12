import "./Cards.css";
import Card from "./Card";
import { useState } from "react";

function Cards({ courseData , filterCards}) {

  const [likeBtn , setLikeBtn] = useState([]);
  



  function getAllCourse() {

    let courses = [];
    if(filterCards === 'All'){
    Object.values(courseData).forEach((array) => {
      array.forEach((el) => {
        courses.push(el);
      });
    });
   return courses;
    }
    else{
      if(filterCards !== null){
         return courseData[filterCards]; 
      }

      else{
        return <div><h1>Loading</h1></div>
      }
    }
  }

  getAllCourse();

  return (
    <div className="cards_outside">
      {getAllCourse().map((c) => {
        return <Card allValue={c} id={c.id} likeBtn = {likeBtn} setLikeBtn = {setLikeBtn} />;
      })}
    </div>
  );
}

export default Cards;
