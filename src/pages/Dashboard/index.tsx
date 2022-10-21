import { Header, TechsAdd, TechsList, DivStyled } from "./style";
import Logo from "../../assets/Logo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Loading } from "../../components/Loading";
import { Modal } from "../../components/Modal";
import { ModalAdd } from "../../components/ModalAdd";
import { TechContext } from "../../contexts/TechContext";
import { ModalEdit } from "../../components/ModalEdit";
import { ListLoading } from "../../components/ListLoading/ListLoading";

export const Dashboard = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const {
    modal,
    setModal,
    modalType,
    setModalType,
    techs,
    setCurrentTech,
    listLoading,
    loading,
  } = useContext(TechContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:userId");
    navigate("/");
  };

  const setEditTech = (id: string) => {
    const tech = techs.find((item) => item.id === id);
    setCurrentTech(tech);
    setModalType("edit");
    setModal(true);
  };

  if (loading) {
    return <Loading />;
  }

  return user ? (
    <DivStyled>
      <nav>
        <div className="container">
          <figure>
            <img src={Logo} alt="Logo da Kenzie Hub" />
          </figure>
          <button onClick={() => logout()}>Sair</button>
        </div>
      </nav>
      <Header>
        <div className="container">
          <p>Olá, {user?.name}</p>
          <span>{user?.course_module}</span>
        </div>
      </Header>
      <main>
        <TechsAdd>
          <div className="container">
            <p>Tecnologias</p>
            <button
              type="button"
              className="buttonAdd"
              onClick={() => {
                setModalType("register");
                setModal(true);
              }}
            >
              +
            </button>
          </div>
        </TechsAdd>
        <TechsList>
          {listLoading ? (
            <ListLoading></ListLoading>
          ) : (
            techs.map((item) => {
              return (
                <li
                  onClick={() => {
                    setEditTech(item.id);
                  }}
                  key={item.id}
                >
                  <p>{item.title}</p>
                  <span>{item.status}</span>
                </li>
              );
            })
          )}
        </TechsList>
      </main>
      {modal && (
        <Modal>
          {modalType === "register" ? (
            <ModalAdd></ModalAdd>
          ) : (
            <ModalEdit></ModalEdit>
          )}
        </Modal>
      )}
    </DivStyled>
  ) : (
    <Navigate to={"/"}></Navigate>
  );
};
