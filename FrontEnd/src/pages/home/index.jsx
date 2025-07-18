import "./style.css";
import { useEffect, useState, useRef } from "react";
import Trash from "../../assets/trash.svg";
import api from "./../../../services/api.js";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    try {
      const response = await api.get("/usuarios");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  async function postUsers() {
    try {
      await api.post("/usuarios", {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value,
      });

      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";

      getUsers();
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  async function deleteUser(id) {
    try {
      await api.delete(`/usuarios/${id}`);
      getUsers(); // Atualiza a lista após deletar
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro Usuario</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName} />
        <input placeholder="Idade" name="idade" type="number" ref={inputAge} />
        <input placeholder="Email" name="email" type="email" ref={inputEmail} />
        <button type="button" onClick={postUsers}>
          Cadastrar
        </button>
      </form>
      {users.map((user) => (
        <div className="card" key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>

          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} alt="Excluir" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
