import "./ModalSucess.scss";
import X from "@/assets/img/icons/x.svg?react";

const ModalSucess = ({isOpen, onClose, children}) => {
    return (

<>
    {isOpen && (
        <div className="modal">
                <div className="modal__wrapper">
                    <div className="modal__content">
                    <button onClick={()=> onClose()} className="modal-close-button">
                    <X className="x"/>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )}
</>
     );
}

export {ModalSucess};