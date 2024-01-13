import React from "react"; 
import { ButtonBlue, ButtonRed } from "./Input";

export const Table = ({categories, onDelete, onSelect}) => {

    


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
                                <ButtonRed label="Delete" onClick={() => onDelete(category.id) } />
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