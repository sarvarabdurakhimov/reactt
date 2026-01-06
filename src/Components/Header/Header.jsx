import logo from "../../assets/rasm.png"
import "./Header.css"

const Header = () => {
  return (
    <div>
        <header>
            <div className="container">
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                    <span>Cart 0</span>
                    <button>Get a free quote</button>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header   