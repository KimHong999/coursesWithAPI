import React, { useEffect, useState } from "react";
import {  ButtonBlue, TextArea, TextFieldInput, TextSelect } from "./Input";
import { NewChapter } from "./NewChapter";
import { uuidv4 } from "../util";
import CreatetableSelect from 'react-select/creatable'


const shift = [
       
    { value: 1, label: 'Morning' },
    { value: 2, label: 'Afternoon' },
    { value: 3, label: 'Evening' },
    { value: 4, label:'jfds'}
]


export const NewCourse = ({categories, onSave, selected, onUpdate}) => {

    const [selectedOptioins, setSelectedOptions] = useState([])
    // const [opts, setOpts] = useState(shift)
    const [opts, setOpts] = useState(shift.map(option => ({ value: option.value, label: option.label })));


    const [form, setForm] = useState({
        name:"", 
        category_id:"", 
        shift:[],
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
    console.log("form", form)
    console.log("sele",selected)


    // ***** onChange *****
    const onChangeCourse = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name] : value,
        })
    }

    const onChangeChapter = (e, chapterIndex) =>{
        const name = e.target.name;
        const value = e.target.value;

        setForm((pre)=>{
            pre.chapters[chapterIndex][name] = value
            return{
                ...pre
            }

        })
    }

    const onChangeLesson = (e, lessonIndex,  chapterIndex) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log("chaper", chapterIndex)
        // console.log("les",lessonIndex)

        setForm((pre)=>{
            // console.log(pre.chapters)
            pre.chapters[chapterIndex].lessons[lessonIndex][name] = value
            return{
                ...pre
            }
        })
        // console.log("form", form)
    }



    // ***** onSave *****
    const handleSaveCourse = () => {
        const data ={
            ...form,
            id : uuidv4()
        }
        onSave(data)
        setForm({
            name:"", 
            category_id:"", 
            shift:[],
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
        setSelectedOptions("")
    }
    // console.log("save ",form)



    const handleUpdateCourse = () =>{
        onUpdate(form)
        setForm({
            name:"", 
            category_id:"", 
            shift:[],
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
        setSelectedOptions([])
    }



    // ***** select *****
    useEffect(()=>{
        if(!selected){
            setForm({
                name:"", 
                category_id:"", 
                shift:[],
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
            setSelectedOptions([])
            return 
        }
        // const selectedOpt = {
        //     shift:selectedOptioins.map(sel=>sel.value)
        // }


        
        setForm(selected)
       

        setSelectedOptions(opts.filter((selOpt)=>selected.shift.includes(selOpt.value)))



        // setSelectedOptions(shift.filter((shiftOpt)=> shiftOpt.id === form.shift.value))
        // console.log("form select", form.shift)
         console.log("selectt",selected.shift)

        
    },[selected])
   
   
    // console.log("select sta", selectedOptioins)
    // console.log("save",form)

    const handleDeleteChapter = (id) => {
        setForm((pre)=>{
            return{
                ...pre,
                chapters : form.chapters.filter((chapter)=>chapter.id !== id)
            }
        })
    }

    const handleDeleteLesson = (chapterId, lessonId) => {
        const upChapter = form.chapters.map((chapter)=>{
            if(chapter.id === chapterId ){
               const uplesson = chapter.lessons.filter((lesson)=>lesson.id !== lessonId)
                return{
                    ...chapter,
                    lessons : uplesson
                }
            }   
            return chapter
        })
        setForm((pre)=>{
            return{
                ...pre,
                chapters : upChapter
            }
        })
    }
    
    const handleSelectedOptioins = (selectedOptioins) =>{

        setSelectedOptions(selectedOptioins)
        setForm((pre)=>{
            return{
                ...pre,
                shift : selectedOptioins.map(sel=>sel.value) 
            }
        })
        console.log("selected options", selectedOptioins)
        console.log("select opts", opts)
    }


    const  handleCreate = (inputValue) =>{
        const newOption = {
            value : inputValue,
            label : inputValue
        }
        setOpts([...opts, newOption])
    }
    // form.chapters.filter((chapter)=>chapter.id !== id)

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


                <label>choose study shift</label>
                <CreatetableSelect  options={opts} onCreateOption={handleCreate} isMulti value={selectedOptioins} onChange={handleSelectedOptioins} name="shift" closeMenuOnSelect={false} />



                <TextArea label="summarize" name="summarize" value={form.summarize} placeholder="please input field" onChange={onChangeCourse} />


                {
                    form?.chapters?.map((chapterForm, index)=>(
                    <NewChapter key={index} chapterIndex={index} chapterForm={chapterForm} onChangeChapter={onChangeChapter} onChangeLesson={onChangeLesson} setForm={setForm} form={form} onDelete={handleDeleteChapter} onDeleteLesson={handleDeleteLesson} />
                    ))
                }

                
                
                <div className="flex justify-evenly item-center mt-10">
                    <ButtonBlue label="Save Course" onClick={handleSaveCourse}  />
                    <ButtonBlue label="Update Form" onClick={handleUpdateCourse} />
                </div>
            </form>

        </div>
    )
}