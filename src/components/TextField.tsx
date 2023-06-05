type TextFieldProps = {
    placeholder: string;
    //value:string;
    name: string;
    className?:string;
    type?:string
    defaultValue?:string
    //onChange: (event:React.ChangeEvent<HTMLInputElement>)=> void
}

export function TextField({placeholder,name, className, type, defaultValue}:TextFieldProps){
    return(
        <input
        placeholder={placeholder}
        name={name}
        //value={value}
        type= {type}
        //onChange={onChange}
        className={className} 
        defaultValue={defaultValue}/>
    )
}