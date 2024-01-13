import React, { useState } from "react";
import { ButtonBlue, ButtonGreen, TextArea, TextFieldInput } from "./Input";
import { NewLesson } from "./NewLesson";


export const NewChapter = ({onChangeChapter, onChangeLesson, chapterIndex, chapterForm}) => {

    return( 
        <div class="mt-6 block rounded-lg bg-gray-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form>
            <div className="flex justify-between">
                <div className="text-xl">Add Chapter</div>
                <ButtonGreen label="Add Chapter" />
            </div>
            <TextFieldInput label="name:" name="name" value={chapterForm.name} placeholder="name" onChange={(e)=>onChangeChapter(e, chapterIndex)} />
            <TextArea label="summarize" name="summarize" value={chapterForm.summarize} placeholder="input field" onChange={(e)=>onChangeChapter(e, chapterIndex)} /> 

            {
                chapterForm.lessons.map((lessonForm, index)=>(
                    <NewLesson  key={index} lessonIndex={index} chapterIndex={chapterIndex} onChangeLesson={onChangeLesson} lessonForm={lessonForm} />)
                )
            }           
        </form>
        
    </div>
       
    )
}