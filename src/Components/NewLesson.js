import React, { useEffect, useState } from "react";
import {  ButtonBlue, ButtonGreen, ButtonRed, TextArea, TextFieldInput } from "./Input";

export const NewLesson = ({chapterIndex, lessonIndex, lessonForm, onChangeLesson, onAddLesson, onDelete, chapterForm }) => {

    // console.log("chapter index",chapterIndex)
    // console.log("lessonIndex",lessonIndex)

    return( 
        <div class="mt-6 block rounded-lg bg-gray-50 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form>
            <div className="flex justify-between">
                <div className="text-xl">Add Lesson</div>
                <ButtonGreen label="Add Lesson" onClick={()=>onAddLesson(chapterIndex)} />
                <ButtonRed label="Delete Lesson" onClick={()=>onDelete(chapterForm.id, lessonForm.id)} />
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