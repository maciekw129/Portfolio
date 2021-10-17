import styled from 'styled-components/macro';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;

export const ResumeButton = styled.button`
    background-color: #BFB734;
    border: 1px solid black;
    box-shadow: 1.5px 1.5px hsl(0, 0%, 10%);
    font-weight: bold;
    border-radius: 10px;
    height: 1.5rem;
    padding: 0 1.5rem;
    cursor: pointer;
`;