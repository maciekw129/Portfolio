import styled from 'styled-components/macro';

export const NavList = styled.ul`
    top: 25rem;
    left: -15rem;
    position: fixed;
    display: flex;
    transform: rotate(90deg);
    list-style-type: none;

    @media only screen and (max-width: 1050px) {
        transform: rotate(0deg);
        top: 6rem;
        width: 100%;
        left: 0;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 475px) {
        flex-wrap: wrap;
    }
`;

export const NavItem = styled.li`
    margin: 0 1.25rem;
    cursor: pointer;

    @media only screen and (max-width: 475px) {
        width: 50%;
        margin: 0.25rem 0;
        text-align: center;
    }
`;