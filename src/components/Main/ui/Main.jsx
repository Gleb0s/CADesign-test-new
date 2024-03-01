import { Banner } from "@/components/Banner/Banner";
import "./Main.scss";
import { Advantages } from "@/components/Advantages/Advantages";
import { Slider } from "@/components/Slider/Slider";
import { SimpleModal } from "../../SimpleModal/SimpleModal";
import { useState } from "react";
import { ModalContent } from "../../ModalContent/ModalContent";

const Main = () => {

    const [modalInfoIsOpen, setModalInfoOpen] = useState(false)

    return (
        <main>
            <SimpleModal isOpen={modalInfoIsOpen} onClose={()=> setModalInfoOpen(false)}>
                <ModalContent/>
            </SimpleModal>
            <Banner setModalInfoOpen={setModalInfoOpen}/>
            <Advantages/>
            <Slider/>
        </main>
     );
}

export {Main};