import './App.css';
import Header from './layout/header/Header';
import AboutMe from './layout/sections/aboutme/AboutMe';
import Main from './layout/sections/main/Main';
import { BackgroundWrapper } from './styles/theme/WrapperBackground';

function App() {
    return (
        <>
            <BackgroundWrapper>
                <Header />
                <Main />
            </BackgroundWrapper>
            <AboutMe />
        </>
    );
}

export default App;
