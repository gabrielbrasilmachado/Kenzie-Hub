import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/axios";
import { HeadersDefaults } from "axios";
import { iTechs, iUser } from "./UserContext";

interface CommonHeaderProperties extends HeadersDefaults {
  authorization: string;
}

interface iTechsContextProps {
  children: ReactNode;
}

interface iTechContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  submitTech: (data: iSubmitTech) => void;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  techs: iTechs[];
  setTechs: React.Dispatch<React.SetStateAction<iTechs[]>>;
  currentTech: iTechs | undefined;
  setCurrentTech: React.Dispatch<React.SetStateAction<iTechs | undefined>>;
  editTech: (data: iEditTech) => void;
  deleteTech: () => void;
  listLoading: boolean;
  setListLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iSubmitTech {
  title: string;
  status: string;
}

export interface iEditTech {
  status: string;
}

interface iSubmitTechResponse {
  id: string;
  title: string;
  status: string;
  user: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}

type iEditTechResponse = Omit<iSubmitTechResponse, "user">;

export const TechContext = createContext<iTechContext>({} as iTechContext);

export const TechProvider = ({ children }: iTechsContextProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("register");
  const [techs, setTechs] = useState<iTechs[]>([]);
  const [currentTech, setCurrentTech] = useState<iTechs | undefined>(undefined);
  const [listLoading, setListLoading] = useState<boolean>(true);

  const submitTech = async (body: iSubmitTech): Promise<void> => {
    try {
      setListLoading(true);
      const { data } = await api.post<iSubmitTechResponse>(
        "/users/techs",
        body
      );
      toast.success("Tecnologia cadastrada com sucesso!");
      setModal(false);
      setTechs([...techs, data]);
      setListLoading(false);
    } catch (err) {
      toast.error(
        "Tecnologia já cadastrada, você pode atualiza-la ou deleta-la!"
      );
    }
  };

  const editTech = async (data: iEditTech): Promise<void> => {
    try {
      setListLoading(true);
      await api.put<iEditTechResponse>(`/users/techs/${currentTech?.id}`, data);
      toast.success("Tecnologia editada com sucesso!");
      setModal(false);
      setListLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTech = async (): Promise<void> => {
    try {
      setListLoading(true);
      await api.delete(`/users/techs/${currentTech?.id}`);
      toast.success("Tecnologia deletada com sucesso!");
      setModal(false);
      setListLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function LoadTechs(): Promise<void> {
      const token = localStorage.getItem("@KenzieHub:token");
      if (token) {
        api.defaults.headers = {
          authorization: `Bearer ${token}`,
        } as CommonHeaderProperties;
        try {
          const { data } = await api.get<iUser>("/profile");
          setTechs(data.techs);
        } catch (err) {
          console.error(err);
          localStorage.removeItem("@KenzieHub:token");
          localStorage.removeItem("@KenzieHub:userId");
        }
      }
      setListLoading(false);
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
        setTechs,
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
