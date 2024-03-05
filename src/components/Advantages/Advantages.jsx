import "./Advantages.scss";
import First from "@/assets/img/icons/1.svg?react";
import Second from "@/assets/img/icons/2.svg?react";
import Fird from "@/assets/img/icons/3.svg?react";
import Fourth from "@/assets/img/icons/4.svg?react";
import Fifth from "@/assets/img/icons/5.svg?react";
import Sixth from "@/assets/img/icons/6.svg?react";

const firstBlock = [
    {
        id: 1,
        icon: <First/>,
        text: "Развитие",
    },
    {   id: 2,
        icon: <Second/>,
        text: "Обучение",
    },
    {   id: 3,
        icon: <Fird/>,
        text: "Ответственность",
    },
    {   id: 4,
        icon: <Fourth/>,
        text: "Динамика",
        description: "Общего центра обслуживания. Современные технологии, проекты, рабочие группы"
    },
    {   id: 5,
        icon: <Fifth/>,
        text: "Комфорт",
    },
    {   id: 6,
        icon: <Sixth/>,
        text: "Надежность",
    },
]

const advantagesBlock = firstBlock.map((item) => {
    return (
        <div key={item.id} className={item.id === 4 ? "advantages__block-active" : "advantages__block"}>
            <div className="advantages__block-icon">{item.icon}</div>
            <h3 className="advantages__block-text">{item.text}</h3>
            {item.description ? <p className="advantages__block-description">{item.description}</p> : ''}
        </div>
    )
})



const Advantages = () => {
    return (
        <section className="advantages">
            <div className="container">
                <div className="advantages__first">
                    {advantagesBlock}
                </div>
                <div className="ellipses">
                    <div className="ellipses__first"></div>
                    <div className="ellipses__second"></div>
                    <div className="ellipses__third"></div>
                </div>
            </div>
        </section>
        )
}

export {Advantages};