import { Banner } from "@/components/Banner/Banner";
import "./Main.scss";
import { Advantages } from "@/components/Advantages/Advantages";
import { Slider } from "@/components/Slider/Slider";
import { ModalWrapper } from "../../Modal/ModalWrapper/ModalWrapper";
import { useState } from "react";
import { ModalContent } from "../../Modal/ModalContent/ModalContent";
import { ModalWrapperForm } from "../../Modal/ModalWrapperForm/ModalWrapperForm";
import { ModalForm } from "../../Modal/ModalForm/ModalForm";
import { ModalSucess } from "../../Modal/ModalSucess/ModalSucess";
import { ModalSucessContent } from "../../Modal/ModalSucessContent/ModalSucessContent";

const Main = () => {

    const [modalInfoIsOpen, setModalInfoOpen] = useState(false)
    const [modalFormIsOpen, setmodalFormIsOpen] = useState(false)
    const [modalFormSucess, setModalFormSucess] = useState(false)

    return (
        <main>
            <ModalWrapper isOpen={modalInfoIsOpen} onClose={()=> setModalInfoOpen(false)}>
                <ModalContent setmodalFormIsOpen={setmodalFormIsOpen}/>
            </ModalWrapper>

            <ModalWrapperForm isOpen={modalFormIsOpen} onClose={()=> setmodalFormIsOpen(false)} >
                <ModalForm setModalFormSucess={setModalFormSucess}/>
            </ModalWrapperForm>

            <ModalSucess isOpen={modalFormSucess} onClose={()=> setModalFormSucess(false)}>
                <ModalSucessContent/>
            </ModalSucess>

            <Banner setModalInfoOpen={setModalInfoOpen}/>
            <Advantages/>
            <Slider/>
        </main>
     );
}

export {Main};