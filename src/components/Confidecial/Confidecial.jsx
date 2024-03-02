import { Link } from "react-router-dom";
import "./Confidecial.scss";
import { useState } from "react";

const Confidecial = () => {

    const [isOpen, setOpen] = useState(true)

    return (
            <>
                {isOpen && (
                    <div className="confidecial">
                        <p className="confidecial__text">
                            Продолжая использовать наш сайт, вы даете <Link to={"/"}><span>согласие на обработку файлов cookie, </span> </Link> которые обеспечивают правильную работу сайта. Благодаря им мы улучшаем сайт,обслуживание и товары.
                        </p>
                        <div onClick={() => setOpen(!isOpen)} className="confidecial__button" typeof="button">
                            Согласен
                        </div>
                    </div>
                )}
            </>
            )

}

export {Confidecial};