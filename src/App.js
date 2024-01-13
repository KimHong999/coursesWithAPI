
import { React, useMemo, useState } from 'react';
import './App.css';
import { CategoryManagement } from './Components/CategoryManagement';
import { Table } from './Components/Table';
import {uuidv4} from './util/index'
import { MainTable } from './Components/MainTable';
import { NewCourse } from './Components/NewCourse';
import categoryData from './data/categories';
import courseData from './data/courses'

function App() {

  const [categories, setCategories] = useState(categoryData)
  const [courses, setCourses] = useState(courseData)

  const [selected, setSelected] = useState({})


 



  // ***** Categories *****
  const handleSaveCategory = (param) => {  
    const newCategory = {
      ...param,
      id : uuidv4()
    }
    setCategories(categories.concat(newCategory))
  }

  const handleSelectedCategory = (id) => {
    setSelected(categories.find((category)=>category.id === id))
  }

  const handleUpdateCategory = (param) => {
    setCategories(categories.map((category)=> category.id === param.id ? {...category, ...param} : category))
    // console.log("updateCategory", param)
  }

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category)=>category.id !== id))
  }
  // ***** End Categories *****


 
  // ***** Courses *****
  const handleSaveCourse = (form) => {
    setCourses(courses.concat(form))
  }

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id))
  }

  console.log("course",courses)

  return (
    <div>
      <div className="grid grid-cols-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Table categories={categories} onDelete={handleDeleteCategory} onSelect={handleSelectedCategory} />
        <CategoryManagement onSave={handleSaveCategory} selected={selected} onUpdate={handleUpdateCategory}  />
      </div>
      <div>
        <div className='text-xl font-bold mt-8'>Course Management</div>
          <MainTable courses={courses} categories={categories} onDelete={handleDeleteCourse}  />
          <div className='flex justify-center item-center'>
            <NewCourse categories={categories} onSave={handleSaveCourse} />
          </div>
      </div>
    </div>
    
  );
}

export default App;
