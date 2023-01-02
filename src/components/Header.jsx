import styled from "styled-components";
import { useState, useEffect } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Container } from "./Container";

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  text-decoration: none;
  font-size: 14px;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ModeSwitcherText = styled.span`
  margin-left: 8px;
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where in the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? <IoMoonOutline /> : <IoMoon />}
            <ModeSwitcherText>{theme} Mode</ModeSwitcherText>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};
