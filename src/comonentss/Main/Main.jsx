import btn from "../Button/Btn"
import rasm from "../../assets/IMAGE (7).png"
import surat from "../../assets/surat.png"
import "./main.css"
import Btn from "../Button/Btn"

const Main = () => {
  return (
    <section>
      <div className="container">
        <div className="big">
          <div className="left">
            <h1>Quality cleaning <br /> for your home</h1>
            <p>
            </p>
            <div className="yoz">
             
            <div className="nmadr">
              <Btn/>
            <img src={surat} alt="" />
            <span>(414) 567 - 2109</span>
            </div>
              
            </div>
          </div>
            <img src={rasm} alt="" />
          <div className="right">
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
