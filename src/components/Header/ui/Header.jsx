import Logo from "@/assets/img/logo.svg?react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Burger from "@/assets/img/icons/burger-menu.svg?react";
import Closest from "@/assets/img/icons/x.svg?react";

const Header = () => {
    const [isOpen, setOpen] = useState();
    return (
    <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <div className="header__logo">
                    <Link to={"/"}>
                        <Logo/>
                    </Link>
                </div>
                <nav className={`header__nav ${isOpen ? "active" : ''}`}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <Link to={"/"}>О нас</Link></li>
                        <li className="header__nav-item"> <Link to={"/"}>Наши ценности</Link></li>
                        <li className="header__nav-item"> <Link to={"/"}>Вакансии</Link></li>
                        <li className="header__nav-item"> <Link to={"/"}>Начало карьеры</Link></li>
                        <li className="header__nav-item"> <Link to={"/"}>Контакты</Link></li>
                        <li className="header__nav-item"> <Link to={"/"}>Социальные сети</Link></li>
                        <Closest onClick={()=> setOpen(!isOpen)} className="closest"/>
                    </ul>
                </nav>
                <button
                onClick={()=> setOpen(!isOpen)}
                className="header__menu-button">
                    <Burger/>
                </button>
            </div>
        </div>
        <div className="header__line"></div>
    </header>
     );
}

export {Header};