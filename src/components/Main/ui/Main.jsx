import { Banner } from "@/components/Banner/Banner";
import "./Main.scss";
import { Advantages } from "@/components/Advantages/Advantages";
import { Slider } from "@/components/Slider/Slider";

const Main = () => {
    return (
        <main>
            <Banner/>
            <Advantages/>
            <Slider/>
        </main>
     );
}

export {Main};