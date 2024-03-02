import "./ModalContent.scss";

const ModalContent = ({setmodalFormIsOpen}) => {
    return (
<>
    <div className="container">
        <div className="modal__header">
            <h2 className="modal__header-title">Бухгалтер по расчету заработной платы </h2>
            <div className="modal__header-text">от 30 000 до 60 000 руб. до вычета налогов</div>
            <button onClick={() => setmodalFormIsOpen(true)} className="modal-btn" type="button">Откликнуться</button>
        </div>
        <div className="modal__main">
            <div className="modal__main-1">
            <div className="modal__main-title">Обязанности
            </div>
            <ul className="modal__main-list">
                <li className="modal__main-list-item">
                Ведение бухгалтерского учета ООО и ИП "под ключ"(от обработки первичной документации до сдачи всей отчетности)
                </li>
                <li className="modal__main-list-item">Составление отчетности как регламентированной так и управленческой.</li>
                <li className="modal__main-list-item">Постановку учета с нуля,восстановление учета.</li>
                <li className="modal__main-list-item">Консультирование в выборе формы налогообложения,оптимизация налогообложения.</li>
                <li className="modal__main-list-item">Подготовку и сдачу отчетности в ИФНС и фонды.</li>
                <li className="modal__main-list-item">Ввод первичной документации в 1с:реализация,поступление,банк,касса.</li>
                <li className="modal__main-list-item">Работу с клиент-банк(проведение платежей)</li>
            </ul>
            </div>

            <div className="modal__main-2">
            <div className="modal__main-title">Требования
            </div>
            <ul className="modal__main-list">
                <li className="modal__main-list-item">
                Опыт работы бухгалтером
                </li>
                <li className="modal__main-list-item">Уверенный пользователь ПК.</li>
                <li className="modal__main-list-item">Личные качества(аккуратность,внимательность,нацеленность на результа</li>
            </ul>
            </div>

            <div className="modal__main-3">
            <div className="modal__main-title">Условия
            </div>
            <ul className="modal__main-list">
                <li className="modal__main-list-item">
                <span className="list-item-bg">З/плата от 30 000</span>
                </li>
                <li className="modal__main-list-item">от 30 000 до 60 000 руб. до вычета налогов</li>
            </ul>
            </div>

            <p className="modal__main-footer-text">Вакансия добавлена 16 февраля 2020</p>
            <button onClick={() => setmodalFormIsOpen(true)} className="modal-btn" type="button">Откликнуться</button>
        </div>
    </div>
</>
     );
}

export {ModalContent};