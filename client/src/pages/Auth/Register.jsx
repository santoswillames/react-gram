import "./Auth.css";

// Components
import { Link } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

const Register = () => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user = Object.fromEntries(formData);
  };

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          onChange={handleInputChange}
          value={formValues.name || ""}
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleInputChange}
          value={formValues.email || ""}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleInputChange}
          value={formValues.password || ""}
        />
        <input
          type="password"
          placeholder="Confirme sua senha"
          name="confirmPassword"
          onChange={handleInputChange}
          value={formValues.confirmPassword || ""}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já possui uma conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </div>
  );
};

export default Register;
