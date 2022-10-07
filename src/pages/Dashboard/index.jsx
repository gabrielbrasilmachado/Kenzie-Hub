import { MainStyled, UserSection, SectionStyled } from "./style";
import Logo from "../../assets/Logo.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/axios";

export const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@KenzieHub:token");

  useEffect(() => {
    api
      .get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [token, setUser]);

  const logout = () => {
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:userId");
    navigate("/");
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <MainStyled>
      <header>
        <div className="container">
          <figure>
            <img src={Logo} alt="Logo da Kenzie Hub" />
          </figure>
          <button onClick={() => logout()}>Sair</button>
        </div>
      </header>
      <main>
        <UserSection>
          <div className="container">
            <p>Olá, {user?.name}</p>
            <span>{user?.course_module}</span>
          </div>
        </UserSection>
        <SectionStyled>
          <div className="container">
            <p>Que pena! Estamos em desenvolvimento :(</p>
            <span>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </span>
          </div>
        </SectionStyled>
      </main>
    </MainStyled>
  );
};
