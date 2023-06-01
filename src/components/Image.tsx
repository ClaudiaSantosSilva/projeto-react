type ImageProps ={
    src: string
    alt: string
    className: string
}

export function Image ({src, alt, className}: ImageProps){
    return(
        <img className={className} src={src} alt={alt} />

    )
}