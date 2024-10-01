import styled from "styled-components"
import mobileBg from "../../assets/images/pattern-bg-mobile.png"
import desktopBg from "../../assets/images/pattern-bg-desktop.png"

const HeaderContainer = styled.header`
    background: url(${mobileBg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 18rem;
    width: 100%;
    padding-top: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media screen and (min-width: 768px) {
      background: url(${desktopBg});
      height: 13.5rem;
    }
`

const AppTitle = styled.h1`
    font-family: "Rubik";
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
`

export { HeaderContainer, AppTitle }