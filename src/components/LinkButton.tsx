import { Link } from "react-router-dom"

type LinkButtonProps = {
  to: string
  children: React.ReactNode;
  className?: string;
  onClick?:()=>void
};

export function LinkButton({
  to,  
  children,
  className = " ",
  onClick
}: LinkButtonProps) {
  return (
    <Link
      to={to} 
      onClick={onClick} 
      className={`bg-blue-400 text-slate-50 font-bold uppercase py-1 px-3 mx-2 rounded-md ${className}`}
    >
      {children}
    </Link>
  );
}
