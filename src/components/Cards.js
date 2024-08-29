import "./Cards.css";
import Card from "./Card";


function Cards({courseData}){

    function getAllCourse(){
        let courses = [];
        Object.values(courseData).forEach(array => {
            array.forEach((el) =>{
                courses.push(el);
            })
            // courses.push(array);
        })
        console.log("data of getting")
        console.log(courses);
        return courses;
    }

    getAllCourse();

    return(
        <div className="cards_outside">
             {
                getAllCourse().map((c) =>{
                    return <Card allValue = {c}  id = {c.id}/>
                })
             }
        </div>
    )
}

export default Cards;