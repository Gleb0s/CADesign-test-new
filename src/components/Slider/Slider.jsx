import "./Slider.scss";
import director from "@/assets/img/director.png";
import RightArrow from "@/assets/img/right-arrow.svg?react";
import LefttArrow from "@/assets/img/left-arrow.svg?react";

const Slider = () => {
    return (
        <section className="director-bg">
                    <div className="arrows">
                        <LefttArrow className="left-arrow"/>
                        <RightArrow
                        className="right-arrow"/>
                    </div>
            <div className="container">
                <div className="director">
                    <div className="director__info">

                        <h3 className="director__info-name">
                        Евдокимова Майя
                        </h3>
                        <h4 className="director__info-position">
                        Генеральный директор
                        </h4>
                        <p className="director__info-description">
                        Цель нашей работы обеспечить высочайший сервис нашим клиентам. Дать возможность бизнесу сосредоточиться на своих ключевых задачах, передав функции управления персоналом, казначейства, финансового учёта и отчётности нам.
                        </p>
                    </div>
                    <div className="director__img">
                        <img src={director} alt="director" />
                    </div>
                </div>
                <div className="ellipses">
                    <div className="ellipses__first"></div>
                    <div className="ellipses__second"></div>
                    <div className="ellipses__third"></div>
                </div>
            </div>
        </section>
     );
}

export {Slider};