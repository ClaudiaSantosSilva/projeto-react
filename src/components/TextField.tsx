type TextFieldProps = {
    placeholder: string;
    //value:string;
    name: string;
    className?:string;
    type?:string
    //onChange: (event:React.ChangeEvent<HTMLInputElement>)=> void
}

export function TextField({placeholder,name, className, type}:TextFieldProps){
    return(
        <input
        placeholder={placeholder}
        name={name}
        //value={value}
        type= {type}
        //onChange={onChange}
        className={className} />
    )
}