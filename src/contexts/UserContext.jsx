import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/axios";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const submitRegister = async (body) => {
    try {
      setLoading(true);
      await api.post("/users", body);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
      setLoading(false);
    } catch (err) {
      toast.error("O e-mail já está cadastrado!");
      setLoading(false);
    }
  };

  const submitLogin = async (body) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", body);
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
    async function LoadUser() {
      const token = localStorage.getItem("@KenzieHub:token");
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        try {
          const { data } = await api.get("/profile");
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
