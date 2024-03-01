import "./Modal.scss";
import X from "@/assets/img/icons/x.svg?react";

const Modal = () => {

    return (
        <> (
                <div className="modal">
                    <div className="modal__wrapper">
                        <button className="x" type="button"><X/></button>
                    </div>
                </div>
        )

        </>

     );
}

export {Modal};