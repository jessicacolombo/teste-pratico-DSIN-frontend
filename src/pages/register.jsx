import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { FieldFormDiv, StyledLink } from "../styles/loginAndRegister";

export const Register = () => {
  const {
    registerHandleSubmit,
    onSubmitRegister,
    registerRegister,
    registerErrors,
  } = useContext(UserContext);

  return (
    <FieldFormDiv>
      <div>
        <StyledLink to={"/"}>«</StyledLink>
        <h1>Cadastro</h1>
        <form onSubmit={registerHandleSubmit(onSubmitRegister)}>
          <label>
            Nome:
            <input
              type="text"
              placeholder="Digite seu nome"
              id="name"
              {...registerRegister("name")}
            />
          </label>
          <p className="errors">{registerErrors.name?.message}</p>
          <label>
            Email:
            <input
              type="email"
              placeholder="Digite seu e-mail"
              id="email"
              {...registerRegister("email")}
            />
          </label>
          <p className="errors">{registerErrors.email?.message}</p>
          <label>
            Celular:
            <input
              type="text"
              placeholder="Digite seu telefone"
              id="cellphone"
              {...registerRegister("cellphone")}
            />
          </label>
          <p className="errors">{registerErrors.cellphone?.message}</p>
          <label>
            Senha:
            <input
              type="password"
              placeholder="password"
              id="password"
              {...registerRegister("password")}
            />
          </label>
          <p className="errors">{registerErrors.password?.message}</p>
          <label>
            Confirme a senha:
            <input
              type="password"
              placeholder="password"
              id="confirm_password"
              {...registerRegister("confirm_password")}
            />
          </label>
          <p className="errors">{registerErrors.confirm_password?.message}</p>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </FieldFormDiv>
  );
};
