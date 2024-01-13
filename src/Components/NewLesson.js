import React, { useEffect, useState } from "react";
import {  ButtonBlue, ButtonGreen, TextArea, TextFieldInput } from "./Input";


export const NewLesson = ({chapterIndex, lessonIndex, lessonForm, onChangeLesson}) => {
    const [form, setForm] = useState({name:"", content:""});
    const [lesson, setlesson] = useState([])

    return( 
        <div class="mt-6 block rounded-lg bg-gray-50 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form>
            <div className="flex justify-between">
                <div className="text-xl">Add Lesson</div>
                <ButtonGreen label="Add Lesson"  />
            </div>         
            <TextFieldInput label="name:" name="name" value={lessonForm.name} placeholder="name" onChange={(e) => onChangeLesson(e, lessonIndex, chapterIndex)} />
            <TextArea label="content" name="content" value={lessonForm.content} placeholder="input field" onChange={(e) => onChangeLesson(e, lessonIndex, chapterIndex)} />
                         
            <div className="mt-5">
                {/* <ButtonBlue label="Save Lesson" onClick={handleSaveLesson} /> */}
                
            </div>
        </form>
    </div>
       
    )
}