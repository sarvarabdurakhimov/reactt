import rasm from "../../assets/IMAGE (9).png"
import "./Service.css"

const Service = () => {
  return (
    <div>
        <div className="nmadr">
        <h2>Our Services</h2>
        <button>Explore services</button>
        </div>
        <div className="katta">
            <div className="card">
                <img src={rasm} alt="" />
                <span>House cleaning</span>
                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="card">
                <img src={rasm} alt="" />
                <span>House cleaning</span>
                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
            <div className="card">
                <img src={rasm} alt="" />
                <span>House cleaning</span>
                <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
        </div>
    </div>
  )
}

export default Service