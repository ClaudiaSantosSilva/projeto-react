type ButtonProps={
    type?:"submit" | "button" | "reset";
    children: string;
    onClick?: ()=>void;
}

export function Button(props:ButtonProps){
    return (
      <button 
      type={props.type}
      onClick={props.onClick}
        className="bg-blue-400 text-slate-50 font-bold uppercase py-1 px-3 mx-2 rounded-md"
      >
        {props.children}
      </button>
    );
}