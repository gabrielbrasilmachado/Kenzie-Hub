import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/axios";
import { HeadersDefaults } from "axios";

interface CommonHeaderProperties extends HeadersDefaults {
  authorization: string;
}

interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  submitRegister: (body: iSubmitRegister) => void;
  submitLogin: (body: iSubmitLogin) => void;
  loading: boolean;
}

interface iUserContextProps {
  children: ReactNode;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTechs[];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: null;
}

export interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface iSubmitLogin {
  email: string;
  password: string;
}

export interface iSubmitRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface iLoginResponse {
  course_module: ReactNode;
  name: ReactNode;
  user: iUser;
  token: string;
}

type iRegisterResponse = Omit<iUser, "techs" | "works">;

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const submitRegister = async (body: iSubmitRegister): Promise<void> => {
    try {
      setLoading(true);
      await api.post<iRegisterResponse>("/users", body);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
      setLoading(false);
    } catch (err) {
      toast.error("O e-mail já está cadastrado!");
      setLoading(false);
    }
  };

  const submitLogin = async (body: iSubmitLogin): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await api.post<iLoginResponse>("/sessions", body);
      toast.success("Login realizado com sucesso!");
      localStorage.setItem("@KenzieHub:token", data.token);
      localStorage.setItem("@KenzieHub:userId", data.user.id);
      setUser(data.user);
      navigate("/dashboard", { replace: true });
      setLoading(false);
    } catch (err) {
      toast.error("Combinação de email / senha incorretos");
      setLoading(false);
    }
  };

  useEffect(() => {
    async function LoadUser(): Promise<void> {
      const token = localStorage.getItem("@KenzieHub:token");
      if (token) {
        api.defaults.headers = {
          authorization: `Bearer ${token}`,
        } as CommonHeaderProperties;
        try {
          const { data } = await api.get<iUser>("/profile");
          setUser(data);
        } catch (err) {
          console.error(err);
          localStorage.removeItem("@KenzieHub:token");
          localStorage.removeItem("@KenzieHub:userId");
        }
      }
      setLoading(false);
    }

    LoadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        submitRegister,
        submitLogin,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
