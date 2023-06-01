type TitleProps = {
    children: React.ReactNode
    className?: string
}

export function Title ({children, className}:TitleProps){
    return(
        <h1 className={`text-xl font-bold lg:text-2xl ${className}`}>{children}</h1>
    )
}