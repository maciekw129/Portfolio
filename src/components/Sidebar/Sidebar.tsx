import {
    NavItem,
    NavList,
} from './styles';

const Sidebar: React.FC = () => {
    return(
        <div>
            <NavList>
                <NavItem>1. About Me</NavItem>
                <NavItem>2. My skills</NavItem>
                <NavItem>3. My projects</NavItem>
                <NavItem>4. Contact</NavItem>
            </NavList>
        </div>
    )
};

export default Sidebar;