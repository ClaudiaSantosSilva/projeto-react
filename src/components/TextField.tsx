type TextFieldProps = {
    placeholder: string;
    value:string;
    className?:string
    type?:string
    onChange: (event:React.ChangeEvent<HTMLInputElement>)=> void
}

export function TextField({placeholder,value, onChange, className, type}:TextFieldProps){
    return(
        <input
        placeholder={placeholder}
        value={value}
        type= {type}
        onChange={onChange}
        className={className} />
    )
}