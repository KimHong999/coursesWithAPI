import React, { useMemo } from "react";
import { ButtonBlue, ButtonRed } from "./Input";

export const MainTable = ({courses, categories, onDelete}) => {

     // ***** count data *****
     const data = useMemo (()=>{
        const result = courses.map(course=> { 
            // const totalallLesson = course.chapters.reduce((sum, chaper)=> sum + chaper.lesson.length, 0 )
            const totalLessons = course.chapters.reduce(
                (sum, chapter) => sum + chapter.lessons.length,
                0
              );

            return {
                ...course,
                category:categories.find(cate=>cate.id===course.category_id).name,
                totalChaper : course.chapters.length,
                totalLesson : totalLessons
            }
            
        })
        return result;
        
    },[courses, categories])
    


    return (
        <div>
            <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-6 py-4">id</th>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">summarize</th>
                        <th scope="col" className="px-6 py-4">Categories</th>
                        <th scope="col" className="px-6 py-4">Total Chapter</th>
                        <th scope="col" className="px-6 py-4">Total Lesson</th>
                        <th scope="col" className="px-6 py-4" >Edit</th>
                        <th scope="col" className="px-6 py-4" >Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((item)=>(
                                <tr key={item.id} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600" >
                                    <td className="whitespace-nowrap px-6 py-4" >{item.id}</td>
                                    <td className="whitespace-nowrap px-6 py-4" >{item.name}</td>
                                    <td className="whitespace-nowrap px-6 py-4" >{item.summarize}</td>
                                    <td className="whitespace-nowrap px-6 py-4" >{categories.find(cate=> cate.id === item.category_id).name}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{item.totalChaper}</td>
                                    <td className="whitespace-nowrap px-6 py-4">{item.totalLesson}</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <ButtonBlue label="Edit"   />
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <ButtonRed label="Delete" onClick={() => onDelete(item.id)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}