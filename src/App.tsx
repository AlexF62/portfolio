import './App.css';
import Header from './layout/header/Header';
import AboutMe from './layout/sections/aboutme/AboutMe';
import Brands from './layout/sections/brands/Brands';
import Main from './layout/sections/main/Main';
import Portfolio from './layout/sections/portfolio/Portfolio';
import Reviews from './layout/sections/reviews/Reviews';
import { Slider } from './layout/sections/slider/Slider';

import { BackgroundWrapper } from './styles/theme/WrapperBackground';

function App() {
    return (
        <>
            <BackgroundWrapper>
                <Header />
                <Main />
            </BackgroundWrapper>
            <AboutMe />
            <Slider />
            <Portfolio />
            <Brands />
            <Reviews />
        </>
    );
}

export default App;
