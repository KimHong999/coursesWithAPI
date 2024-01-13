export const TextInput = ({label, type="text", onChange, name, value, placeholder }) => {
return(
<div className="relative w-full min-w-[200px] h-10">
    <input type={type} onChange={onChange} name={name} value={value} placeholder={placeholder}
        className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-indigo-500" /><label
        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-indigo-500 before:border-blue-gray-200 peer-focus:before:!border-indigo-500 after:border-blue-gray-200 peer-focus:after:!border-indigo-500">
        {label} </label>
</div>
)
}

export const TextFieldInput = ({label, type="text", onChange, name, value, placeholder }) => {
    return(
        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username"> {label} </label>
            <input type={type} onChange={onChange} name={name} value={value} placeholder={placeholder} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"></input>
        </div>  
    )
}


export const ButtonBlue = ({type="button", label, onClick }) => {
return(
<button type={type} onClick={onClick}
    className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded">
    {label}
</button>
)
}

export const ButtonRed = ({type="button", label, onClick}) => {
return(
<button type={type} onClick={onClick}
    className=" bg-red-500 text-white font-bold py-2 px-4 ml-3 border-b-4 border-red-700 rounded">
    {label}
</button>
)
}

export const ButtonGreen = ({type="button", label, onClick}) => {
return(
<button type={type} onClick={onClick}
    className=" bg-green-500 text-white font-bold py-2 px-4 ml-3 border-b-4 border-green-700 rounded">
    {label}
</button>
)
}

export const TextSelect = ({label, name, value, placeholder, options, onChange}) =>{
// console.log("options", options)
return(
<div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <select name={name} value={value} onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {options.length>0?(
                <>
                    <option value="">{placeholder}</option>
                    {options?.map((item )=> <option key={item.id} value={item.id}> {item.name} </option> ) }
                </> 
            ) : <option value="">No Categories</option> } 
        
    </select>
</div>
)
}

export const TextArea = ({label, name, value, placeholder, onChange, type="text" }) => {
return (
<div>
    <form >
        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <textarea name={name} value={value} placeholder={placeholder} onChange={onChange} type={type} id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
    </form>
</div>
)
}
