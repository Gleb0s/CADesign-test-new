import { Button } from "../Button/Button";
import "./Banner.scss";
import humans from "@/assets/img/humans.png"


const Banner = ({setModalInfoOpen}) => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner__wrapper">
                    <div className="banner__info">
                        <h1 className="banner__info-title">Энергия твоего роста! – заряжаем твою карьеру</h1>
                        <Button setModalInfoOpen={setModalInfoOpen} />
                        <div className="banner__images-humans">
                            <img className="banner__images-humans-photo" src={humans} alt="humans" />
                        </div>
                    </div>
                    <div className="banner__triangle">
                    </div>
                    <div className="banner__back"></div>
                </div>
            </div>
        </div>
     );
}

export {Banner};