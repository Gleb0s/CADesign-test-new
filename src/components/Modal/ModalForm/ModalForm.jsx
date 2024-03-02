import { Link } from "react-router-dom";
import "./ModalForm.scss";

const ModalForm = ({setModalFormSucess}) => {
    return (
        <>
            <div className="container">
                <div className="modal__header">
                    <h2 className="modal__header-title">Отклик на вакансию</h2>
                    <form action="">
                        <input className="modal__input" type="text" placeholder="Желаемая вакансия *" required />
                        <input className="modal__input" type="text" placeholder="Фамилия, имя и отчество *" required />
                        <div className="modal__input-box">
                            <input className="modal__input-50" type="tel" placeholder="Мобильный телефон *" required />
                            <input className="modal__input-50" type="email" placeholder="E-mail" />
                        </div>
                        <input className="modal__input" type="text" placeholder="Образование *" required />
                        <input className="modal__input" type="text" placeholder="Адрес места жительства *" required />
                        <div className="modal__input-box">
                            <input className="modal__input-date" type="date" placeholder="Дата рождения" />
                            <input id="file" className="modal__input-file" type="file" />
                            <label className="modal__input-file-label" htmlFor="file">Загрузить резюме</label>
                            <div className="line"></div>
                        </div>
                        <textarea className="modal__input-comment" rows="5" cols="30" placeholder="Комментарий" />
                        <div className="modal__footer">
                            <input required id="check" className="modal__footer-checkbox" type="checkbox" />
                            <label id="check" className="modal__footer-text">Я принимаю условия
                                <Link>
                                    <span> передачи информации</span>
                                </Link></label>
                            <button onSubmit={() => setModalFormSucess(true)} className="modal__footer-button" type="submit">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
     );
}

export {ModalForm};