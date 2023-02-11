import { AiFillCheckCircle } from "react-icons/ai"
export default function BulletPoint({ header, text }) {
    return (
        <div className="signup-title">
            <AiFillCheckCircle className="check" color="#1675e1"></AiFillCheckCircle>
            <div className="signup-text">
                <h4 className="px-2">{header}</h4>
                <p className="px-2">{text}</p>
            </div>


        </div>
    )
}