
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CourseInfo from './CourseInfo';

const Course = () => {

    const [course, setCourse] = useState({});
    const { id } = useParams();

    const courses = useLoaderData();

    useEffect(() => {
        const findCourses = courses.find(course => course.id === id)

        setCourse(findCourses);

    }, [])

    

    return (
        <div>
            <CourseInfo course={course}></CourseInfo>
        </div>
    );
};

export default Course;