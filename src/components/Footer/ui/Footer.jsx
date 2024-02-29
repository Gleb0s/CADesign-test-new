import "./Footer.scss";
import Logo from "@/assets/img/logo-grey.svg?react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-info">
            © 1998–2019,«Компания», 53002, Иваново, Лежневская 34 корпус 1
            </p>
            <div className="footer-link">
                <Link to={"/"}>Политика обработки персональных данных</Link>
            </div>
            <div className="footer-logo">
                    <Logo/>
                </div>
        </footer>
     );
}

export {Footer};