import { Link } from "react-router-dom"

type BreadcrumbsProps = {
    links:{
        href:string,
        label: React.ReactNode,
    }
}

export function Breadcrumbs({links}: BreadcrumbsProps){
    return(
        <div className="flex gap-1 items-center p-3">
            {links.map((link, index)=>(
                <div key={index} className="flex gap-1 items-center">
                    <Link to={link.href}
                    className=" text-blue-600 hover:text-blue-800 hover:underline font-bold md:block">
                        {link.label}
                    </Link>
                    {index < links.length - 1 && (<span className="font-bold tect-md">{">"}</span>)}
                </div>

            ))}
           
        </div>
    )
}