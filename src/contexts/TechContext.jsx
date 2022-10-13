import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/axios";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("register");
  const [techs, setTechs] = useState([]);
  const [currentTech, setCurrentTech] = useState({});
  const [listLoading, setListLoading] = useState(true);

  const submitTech = async (data) => {
    try {
      setListLoading(true);
      await api.post("/users/techs", data);
      toast.success("Tecnologia cadastrada com sucesso!");
      setModal(false);
      setListLoading(false);
    } catch (err) {
      toast.error(
        "Tecnologia já cadastrada, você pode atualiza-la ou deleta-la!"
      );
    }
  };

  const editTech = async (data) => {
    try {
      setListLoading(true);
      await api.put(`/users/techs/${currentTech.id}`, data);
      toast.success("Tecnologia editada com sucesso!");
      setModal(false);
      setListLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTech = async () => {
    try {
      setListLoading(true);
      await api.delete(`/users/techs/${currentTech.id}`);
      toast.success("Tecnologia deletada com sucesso!");
      setModal(false);
      setListLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function LoadTechs() {
      const token = localStorage.getItem("@KenzieHub:token");
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        try {
          const { data } = await api.get("/profile");
          setTechs(data.techs);
          setListLoading(false);
        } catch (err) {
          console.error(err);
          localStorage.removeItem("@KenzieHub:token");
          localStorage.removeItem("@KenzieHub:userId");
        }
      }
    }

    LoadTechs();
  }, [techs]);

  return (
    <TechContext.Provider
      value={{
        modal,
        setModal,
        submitTech,
        modalType,
        setModalType,
        techs,
        currentTech,
        setCurrentTech,
        editTech,
        deleteTech,
        listLoading,
        setListLoading,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
