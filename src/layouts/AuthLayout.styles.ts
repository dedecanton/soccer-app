import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .auth-background, main{
        flex: 1;
        position: relative;
    }

    .auth-background{
        background-color: red;
    }

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media screen and (min-width: 1024px){
        flex-direction: row;
    }
`