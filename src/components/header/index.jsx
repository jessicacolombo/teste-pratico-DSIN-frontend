import { useContext } from "react";
import { SchedulesContext } from "../../contexts/schedulesContext";
import { UserContext } from "../../contexts/userContext";
import { StyledHeader } from "../../styles/header";

export const Header = () => {
  const { user, logOut } = useContext(UserContext);
  const { setOpenCreateModal } = useContext(SchedulesContext);

  return (
    <StyledHeader>
      <div className="header-container">
        <p>✂️ Cabeleileila Leila {user.isAdm ? " - Administrador" : null}</p>
        <div className="buttons-container">
          {!user.isAdm && (
            <button onClick={() => setOpenCreateModal(true)}>Agendar</button>
          )}
          <button onClick={() => logOut()}>Sair</button>
        </div>
      </div>
    </StyledHeader>
  );
};
