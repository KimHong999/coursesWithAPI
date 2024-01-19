import { useEffect, useState } from "react"
import { ButtonBlue, ButtonGreen, TextInput } from "./Input"
import { create,  update } from "../service/category"
import { ThreeDots } from "react-loader-spinner"

export const  CategoryManagement = ({onSave, selected, onUpdate , categories}) => {

    const [form, setForm] = useState({name:"", code:""})
    const [isLoading, setIsLoading] = useState(false)

    // const handleSaveCategory = () => {
    //     onSave(form)
    //     setForm({name:"", code:""})
    // }

    // const handleSaveCategory =()=>{
    //     setIsLoading(true)
    //     Create(form)
    //     .then((response)=>onSave(response), setForm({name:"", code:""}), setIsLoading(false))
    //     .catch((error)=>console.log("error",error), setIsLoading(false)  );
    // }


    const handleSaveCategory = async () =>{
        try{
            setIsLoading(true);

            const response = await create(form);
            onSave(response);
        }
        catch(error){
            console.log("error",error);
            setIsLoading(false);
        }
    }


    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleUpdateCategory = async (id) => {
        try{
            const response = await update(id, form);
            console.log("response: ", response)
            onUpdate(form);
            setForm({name:"", code:""})
        } catch(error) {
            console.log("error", error);
        }
    }


    useEffect(()=>{
        setForm(selected)
    },[selected])


    const buttonStatus = form.name && form.code ? false : true;
   
    // console.log("form",form)
    // console.log("cate",categories)

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
                {/* <ButtonBlue label="Save" onClick={handleSaveCategory}>

                {
                    isLoading ? <></> : "Save"
                }
                    
                </ButtonBlue> */}

                <button onClick={handleSaveCategory} disabled={buttonStatus}  className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded">
                    {
                        isLoading ? <>
                            <ThreeDots
                                visible={true}
                                height="20"
                                width="35"
                                color="white"
                                radius="9"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                             />
                        </> : "Save"
                    }
                </button>


                    {/* <button onClick={handleUpdateCategory}>update</button> */}
                <ButtonGreen label="Update" onClick={()=>handleUpdateCategory(form.id)} />
               </div>
            </form>
        </div>
    )
}