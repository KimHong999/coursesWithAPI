import React from "react"; 
import { ButtonBlue, ButtonRed } from "./Input";
import {  destroy } from "../service/category";

export const Table = ({categories, onDelete, onSelect, setCategories}) => {

    // console.log("id", categories.id)

    // const handleDeleteCategoy = () =>{
    //     DELETE_CATEGORY_BY_ID(categories.id).then((response)=>{alert("deleted")}).catch((error)=>console.log("error delete : ",error))
    // }


    // console.log("cat",categories)
    return(
        <table className="table-auto">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody class="text-center">

                {
                    categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.code}</td>
                            <td>
                                <ButtonBlue label="Edit" onClick={()=> onSelect(category.id)} />
                            </td>
                            <td>
                                <ButtonRed label="Delete" onClick={()=>{
                                    destroy(category.id).then((response)=>onDelete(category.id)).catch((error)=>console.log("error delete : ",error))
                                }} />
                            </td>
                        </tr>
                    ))
                }

                {/* <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    <td>

                    </td>
                </tr> */}
            </tbody>
        </table>
    )
}