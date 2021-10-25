import {
    AboutMeContainer,
    TextContainer,
    MyImage,
} from './styles';
import myImage from '../../images/myImage.jpg';

const AboutMe: React.FC = () => {
    return(
        <AboutMeContainer>
            <TextContainer>
                <h2>1. About Me</h2>
                <p>I'm 21 years old student of gastronomy and hospitality from Warsaw (Poland). Because of the gastronomy lockdown due to the covid-19 pandemic, I decided to change my carrier path and try myself in coding.</p>
            </TextContainer>
            <MyImage src={myImage} alt='me' />
        </AboutMeContainer>
    )
};

export default AboutMe;