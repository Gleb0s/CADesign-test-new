import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";


const MainPage = () => {
    return (
        <div className="app">
            <Header/>
             <Main />
            <Footer/>
        </div>
     );
}

export {MainPage};