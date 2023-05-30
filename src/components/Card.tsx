type CardProps={
    children:React.ReactNode
}

export function Card({ children }: CardProps){
    return (
    <div className="bg-white mx-4 my-14 rounded-lg shadow-md p-4 max-w-screen-md md:mx-auto">
        {children}
    </div>
    )
}