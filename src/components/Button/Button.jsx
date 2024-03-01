
import "./Button.scss";


const Button = ({setModalInfoOpen}) => {



    return (
    <div>
        <button
        type="button"
        className="button"
        onClick={() => setModalInfoOpen(true)}
        >Стать частью команды</button>

    </div>

     );
}

export {Button};