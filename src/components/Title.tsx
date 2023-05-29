type TitleProps = {
    children: React.ReactNode
}

export function Title ({children}:TitleProps){
    return(
        <h1 className="text-2xl font-bold">{children}</h1>
    )
}