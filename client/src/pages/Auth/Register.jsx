import "./Auth.css";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { register, reset } from "../../slices/authSlice";

const Register = () => {
  const [formValues, setFormValues] = useState({});

  // Permite utilizar as funções do Redux
  const dispatch = useDispatch();

  // Extraindo os state do slice
  const { loading, error } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user = Object.fromEntries(formData);

    dispatch(register(user));
  };

  // Clean all auth state
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

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
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>
        Já possui uma conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </div>
  );
};

export default Register;
