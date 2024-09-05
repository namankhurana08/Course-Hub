import React, { useState } from 'react'
import Card from './Card';


const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    const [likedcourses,setlikedcourses]=useState([]);

    function getcourses(){
        if(category=="All"){
        let allcourses=[];
        Object.values(courses).forEach(Array =>{
            Array.forEach(courseData =>{
                allcourses.push(courseData);
                })
        })
        return allcourses;
    }
    else{
        return courses[category];
    }
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
        getcourses().map((course)=>(
            <Card key={courses.id} course={course} likedcourses={likedcourses} setlikedcourses={setlikedcourses}/>
        ))
    }
    </div>
  )
}

export default Cards
