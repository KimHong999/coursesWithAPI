import React, { useEffect, useState } from "react";
import {  ButtonBlue, TextArea, TextFieldInput, TextSelect } from "./Input";
import { NewChapter } from "./NewChapter";
import { uuidv4 } from "../util";

export const NewCourse = ({categories, onSave}) => {
    const [form, setForm] = useState({
        name:"", 
        category_id:"", 
        summarize:"",
        chapters:[{
            id:uuidv4(),
            name:"",
            summarize:"",
            lessons:[{
                id:uuidv4(),
                name:"",
                content:""
            }]
        }]
    })

    const onChangeCourse = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name] : value
        })
    }

    const onChangeChapter = (e, indexChapter) =>{
        const name = e.target.name;
        const value = e.target.value;

        setForm((pre)=>{
            pre.chapters[indexChapter][name] = value
            return{
                ...pre
            }

        })
    }

    const onChangeLesson = (e, indexChapter, indexLesson) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log("chaper", indexChapter)
        // console.log("les",indexLesson)

        setForm((pre)=>{
            pre.chapters[indexChapter].lessons[indexLesson][name] = value
            return{
                ...pre
            }
        })
    }



    const handleSaveCourse = () => {
        const data ={
            ...form,
            id : uuidv4()
        }
        onSave(data)
        // setForm({name:"", category_id:"", summarize:""})
    }
    console.log("save",form)

   
    // console.log("save",form)

    return (
        <div class="mt-6 block w-7/12 rounded-lg bg-gray-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <form className="shadow-md rounded px-6 pt-6 pb-6 ">
                <div className="text-xl">Add Course</div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <TextFieldInput label="name" name="name" value={form.name} placeholder="name" onChange={onChangeCourse} />
                    </div>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <TextSelect label="Categories: " name="category_id" value={form.category_id} placeholder="select category" options={categories} onChange={onChangeCourse} />
                    </div>          
                </div>
                <TextArea label="summarize" name="summarize" value={form.summarize} placeholder="please input field" onChange={onChangeCourse} />

                {
                    form?.chapters?.map((chapterForm, index)=>(
                    <NewChapter key={index} chapterIndex={index} chapterForm={chapterForm} onChangeChapter={onChangeChapter} onChangeLesson={onChangeLesson}  />
                    ))
                }

                
                
                <div className="flex justify-center item-center mt-10">
                    <ButtonBlue label="Save Course" onClick={handleSaveCourse}  />
                </div>
            </form>

        </div>
    )
}