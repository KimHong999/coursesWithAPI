import { useEffect, useState } from "react"
import { ButtonBlue, ButtonGreen, TextInput } from "./Input"

export const  CategoryManagement = ({onSave, selected, onUpdate }) => {

    const [form, setForm] = useState({name:"", code:""})

    const handleSaveCategory = () => {
        onSave(form)
        setForm({name:"", code:""})
    }

    // const handleClear = () => {
    //     setForm({name:"", code:""})
    // }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleUpdateCategory = () => {
        onUpdate(form)
        setForm({name:"", code:""})
    }

    useEffect(()=>{
        setForm(selected)
    },[selected])


    // console.log("form",form)

    return(
        <div className="w-full max-w-lg ml-40">
            <div className="text-xl font-bold flex items-center justify-center"> Add Category</div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
               <div className="flex flex-wrap -mx-3 mb-6">
                <div  className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <TextInput label="name" name="name" value={form.name} onChange={onChange} placeholder="name" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <TextInput label="code" name="code" value={form.code} onChange={onChange} placeholder="code" />
                </div>      
               </div>
               <div className="flex justify-center item-center">
                <ButtonBlue label="Save" onClick={handleSaveCategory} />
                <ButtonGreen label="Update" onClick={handleUpdateCategory} />
               </div>
            </form>
        </div>
    )
}