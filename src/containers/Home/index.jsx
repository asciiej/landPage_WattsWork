
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  font-family: 'Lexend', sans-serif;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px; /* Espaçamento extra na margem esquerda */
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const LogoText = styled.h1` 
  color: black;
  font-size: 20px;
  margin-left: 8px;
  text-decoration: none;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavLink = styled.a`
  color: blue;
  font-size: 20px;
  font-weight: 400; /* Fonte mais fina */
  text-decoration: none;
  letter-spacing: 1.5px;

  &:hover {
    color: darkblue;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-right: 20px; /* Espaçamento extra na margem direita */
`;

const SocialIcon = styled.a`
  width: 30px;
  height: 30px;
`;

const Header = () => {
  return (
    // Header 
    <HeaderContainer>
      <LogoContainer>
        <a href='#'><LogoImage src="./src/img/LogoHeader.png" alt="Logo" /></a>
        <a href='#'><LogoText>Wattworks</LogoText></a>
      </LogoContainer>
      
      <NavLinks>
        <NavLink href="#sobre-nos">Sobre Nós</NavLink>
        <NavLink href="#solucoes">Soluções</NavLink>
        <NavLink href="#contato">Contato</NavLink>
        <NavLink href="#duvidas-frequentes">Dúvidas Frequentes</NavLink>
      </NavLinks>

      <SocialMediaContainer>
        <SocialIcon href="https://www.instagram.com/wattworks.energia/?hl=pt-br" target="_blank">
          <img src="./src/img/Logo Instagram.png" alt="Instagram" />
        </SocialIcon>
        <SocialIcon href="https://youtube.com" target="_blank">
          <img src="./src/img/Logo YouTube.png" alt="YouTube" />
        </SocialIcon>
        <SocialIcon href="https://linktr.ee/wattworks?fbclid=PAZXh0bgNhZW0CMTEAAaaYqkFQTiQdwICwGllKn67IhEK7xVfrofMwwx893r3sN9G5_FJzh0SYFMM_aem_SVZKrBYYNwWC2JqMrXWB6g" target="_blank">
          <img src="./src/img/LinkedIn.png" alt="LinkedIn" />
        </SocialIcon>
      </SocialMediaContainer>
    </HeaderContainer>
// Fim do Header


  );
};

export default Header;
