import {
    HeaderContainer,
    LogoBorder,
    IconsContainer,
} from './styles';
import {
    faFacebook,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {
    return(
        <HeaderContainer>
            <header>
                <LogoBorder>
                    <h1>M</h1>
                </LogoBorder>
                <IconsContainer>
                    <a href='https://www.facebook.com/maciek.walecki.7' target='_blank'><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                    <a href='https://www.linkedin.com/in/maciej-walecki-51b76a1b7/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
                    <a href='https://github.com/maciekw129?tab=repositories' target='_blank'><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                </IconsContainer>
            </header>
        </HeaderContainer>
    )
};

export default Header;