type TextFieldProps = {
    defaultText: string;
    value:string;
}

export function TextField({defaultText,value}:TextFieldProps){
    return(
        <input
        placeholder={defaultText}
        value={value}
        type="text"
        className="border rounded-lg outline-none focus:border-green-500 py-1 px-2" />
    )
}