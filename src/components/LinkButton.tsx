import { Link } from "react-router-dom"

type LinkButtonProps = {
  to: string
  children: React.ReactNode;
  className?: string;
};

export function LinkButton({
  to,  
  children,
  className = " ",
}: LinkButtonProps) {
  return (
    <Link
      to={to}  
      className={`bg-blue-400 text-slate-50 font-bold uppercase py-1 px-3 mx-2 rounded-md ${className}`}
    >
      {children}
    </Link>
  );
}
