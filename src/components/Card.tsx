type CardProps={
    children:React.ReactNode,
    className?:string,
}

export function Card({ children, className }: CardProps){
    return (
      <div className={`pb-6 md:w-1/2 md:inline-block lg:w-1/3 lg:mb-6 ${className}`}>
        <div className= {`bg-white my-10 rounded-lg shadow-md p-4 gap-4 w-80 mx-auto ${className}`}>
          {children}
        </div>
      </div>
    );
}

//max-w-screen-md md:mx-auto 