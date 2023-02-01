import { RiShutDownLine } from "react-icons/ri";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/ellenbessa.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Ellen Bessa</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
