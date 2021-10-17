import {
    HeaderContainer,
    LogoBorder,
    ResumeButton,
} from './styles';

const Header: React.FC = () => {
    return(
        <HeaderContainer>
            <LogoBorder>
                <h1>M</h1>
            </LogoBorder>
            <ResumeButton>Resume</ResumeButton>
        </HeaderContainer>
    )
};

export default Header;