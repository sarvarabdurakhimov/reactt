import rasm from "../../assets/IMAGE (8).png"
import Btn from "../Button/Btn"
import "./Section.css"

const Section = () => {
  return (
    <div>
        <h2>About Us</h2>
        <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <div className="big">
            <div className="small">
                <img src={rasm}alt="" />
                <h1>1. Schedule online</h1>
                <span>Sagittis nibh scelerisque vitae egetolment <br /> vulputate sem elementum sed n.</span>
            </div>
            <div className="small">
                <img src={rasm}alt="" />
                <h1>1. Schedule online</h1>
                <span>Sagittis nibh scelerisque vitae egetolment <br /> vulputate sem elementum sed n.</span>
            </div>
            <div className="small">
                <img src={rasm}alt="" />
                <h1>1. Schedule online</h1>
                <span>Sagittis nibh scelerisque vitae egetolment <br /> vulputate sem elementum sed n.</span>
            </div>
        </div>
        <div className="kck">
            <Btn/> <button className="btn1">Explore services</button>
        </div>
    </div>
  )
}

export default Section