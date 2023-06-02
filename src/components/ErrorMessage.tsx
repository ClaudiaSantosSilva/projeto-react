type ErrorMessageProps= {
    children: React.ReactNode
}

export function ErrorMessage({children}: ErrorMessageProps){
    return(
        <span className="text-sm text-red-500 leading-tight ml-2">{children}</span>
    )
}