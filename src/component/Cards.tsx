import { cards } from "../data/cards"
import { Card } from "./Card"

export function Cards () {
    return (
        <>
        <div className="flex gap-x-[30px]">
            {cards.map((card , index) => (
                <Card key = {index} image = {card.img} total = {card.total} title = {card.title}/>
            ))}
        </div>
        </>
    )
}