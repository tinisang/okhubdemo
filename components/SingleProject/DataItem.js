import Image from "next/image";
export const DataItem = props => {
    return (
        <li className="problem__data--item">
            <div className="problem__data--up">
                <div className="problem__data--title">{props.title}</div>
                <Image src = {props.image}/>
            </div>
            <div className="problem__data--down">
                <p className="problem__data--txt">{props.txt}</p>
            </div>
        </li>
    )
}