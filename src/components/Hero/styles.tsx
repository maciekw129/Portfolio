import styled from 'styled-components/macro';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TextContainer = styled.div`
    padding: 5rem;
`

export const MainText = styled.h2`
    font-size: 300%;
`;

export const Text = styled.p`
    font-size: 125%;
    margin-top: 1rem;
`

export const ImportantColor = styled.span`
    color: #027353;
    //text-shadow: 2.5px 2.5px 0.5px hsl(0, 0%, 10%);
`;
//#BF982A
export const ResumeButton = styled.button`
    background-color: #027353;
    color: hsl(0, 0%, 85%);
    text-shadow: 2px 2px 0.5px hsl(0, 0%, 10%);
    border: 1.4px solid black;
    box-shadow: 1.5px 1.5px hsl(0, 0%, 10%);
    font-weight: bold;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    cursor: pointer;
    text-align: center;
    margin-top: 1rem;
    font-size: 120%;

    &:active {
        box-shadow: none;
        transform: translate(1.5px, 1.5px);
    }
`;

export const ScrollDown = styled.div`
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;