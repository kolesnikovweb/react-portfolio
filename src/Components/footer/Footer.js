
import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg"
import "./style.css"


function Footer () {
    return(
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk}/></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram}/></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub}/></a></li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer;