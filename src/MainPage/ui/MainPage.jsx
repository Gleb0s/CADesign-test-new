import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Confidecial } from "../../components/Confidecial/Confidecial";


const MainPage = () => {
    return (
        <div className="app">
            <Header/>
            <Confidecial/>
             <Main />
            <Footer/>
        </div>
     );
}

export {MainPage};