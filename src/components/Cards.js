import "./Cards.css";
import Card from "./Card";
import { useState } from "react";

function Cards({ courseData }) {

  const [likeBtn , setLikeBtn] = useState([]);
  




  function getAllCourse() {
    let courses = [];
    Object.values(courseData).forEach((array) => {
      array.forEach((el) => {
        courses.push(el);
      });
      // courses.push(array);
    });
    console.log("data of getting");
    console.log(courses);
    return courses;
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
