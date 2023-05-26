type ButtonProps={
    type?:"submit" | "button" | "reset";
    children: React.ReactNode;
    onClick?: ()=>number;
}

export function Button({type, children, onClick}:ButtonProps){
    return (
      <button 
      type={type}
      onClick={onClick}
        className="bg-blue-400 text-slate-50 font-bold uppercase py-1 px-3 mx-2 rounded-md"
      >
        {children}
      </button>
    );
}