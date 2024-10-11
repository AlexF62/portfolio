import './App.css';
import Header from './layout/header/Header';
import AboutMe from './layout/sections/aboutme/AboutMe';
import Main from './layout/sections/main/Main';
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
        </>
    );
}

export default App;
