import React from 'react';

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>

          {course.parts.map((part) => (
            <p key={part.name}>
              {part.name} {part.exercises}
            </p>
          ))}

          <p>Total {course.parts.reduce((sum, current) => sum + current.exercises, 0)} exercises</p>
        </div>
      ))}
    </>
  );
};

export default Course;
