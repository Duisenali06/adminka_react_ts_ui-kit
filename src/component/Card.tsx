interface CardProps {
    image: string,
    total:string ,
    title: string 
}

export function Card ( {image , total , title} : CardProps) {
    
    return(
        <>
        <div className="flex gap-x-6 items-center py-7 pl-7 pr-[88px] max-w-[300px]  bg-gray-100 rounded-md">
            <img src={image} alt="" />
            <div className="flex flex-col">
                <p className="font-medium text-xl">{total}</p>
                <p>{title}</p>
            </div>
        </div>
        </>
    )
}
