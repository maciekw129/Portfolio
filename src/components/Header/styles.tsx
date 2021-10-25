import styled from 'styled-components/macro';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;

    & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    padding: 0.75rem 10rem;
    position: fixed;
    background-color: hsl(0, 0%, 85%);
    border: 1.5px solid black;
    border-top: none;
    box-shadow: 1.5px 1.5px hsl(0, 0%, 50%);
    z-index: 9999;
    
    @media only screen and (max-width: 1050px) {
        padding: 0 5rem;
    }

    @media only screen and (max-width: 600px) {
        padding: 0 2rem;
    }
}
`;

export const LogoBorder = styled.div`
    justify-self: flex-start;
    border: 2px solid black;
    box-shadow: 1.5px 1.5px hsl(0, 0%, 10%);
    border-radius: 3px;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const IconsContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-evenly;

    @media only screen and (max-width: 650px) {
        width: 50%;
    }
`

