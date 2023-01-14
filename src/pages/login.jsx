import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { FieldFormDiv } from "../styles/loginAndRegister";

export const Login = () => {
  const { onSubmit, register, handleSubmit, errors } = useContext(UserContext);

  return (
    <FieldFormDiv>
      <div>
        <h1>Login</h1>
        <p>✂️</p>
        <span>Sua plataforma de agendamentos com a Cabeleileila Leila.</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email:
            <input
              type="email"
              placeholder="e-mail"
              id="email"
              {...register("email")}
            />
          </label>
          <p className="errors">{errors.email?.message}</p>
          <label>
            Senha:
            <input
              type="password"
              placeholder="senha"
              id="password"
              {...register("password")}
            />
          </label>
          <p className="errors">{errors.password?.message}</p>
          <button type="submit">Login</button>
        </form>
        <span className="register-here">
          Não tem uma conta? <Link to={"/register"}>Se registre aqui.</Link>
        </span>
      </div>
    </FieldFormDiv>
  );
};
