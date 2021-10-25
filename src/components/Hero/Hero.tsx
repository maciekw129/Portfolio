import {
    HeroContainer,
    MainText,
    TextContainer,
    ImportantColor,
    ResumeButton,
    Text,
    ScrollDown,
} from './styles';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero: React.FC = () => {
    return(
        <HeroContainer>
            <TextContainer>
                <MainText>Hello!<br/> My name is <ImportantColor>Maciej Walecki.</ImportantColor></MainText>
                <Text>I am self-taught frontend developer from Warsaw, Poland.<br/> I am specializing in HMTL, CSS, React and accualy learning TypeScript.</Text>
                <ResumeButton>Download resume</ResumeButton>
            </TextContainer>
            <ScrollDown>
                <p>Scroll down</p>
                <FontAwesomeIcon icon={faArrowDown} />
            </ScrollDown>
        </HeroContainer>
    )
};

export default Hero;