export const api = "http://localhost:5000/api";
export const uploads = "http://localhost:5000/uploads";

export const requestConfig = (method, data, token = null, image = null) => {
  let config;

  //Qaundo Tem dados e a Imagem -> Requisição FormData
  if (image) {
    config = {
      method,
      body: data,
      headers: {},
    };
    // Qundo o método é delite ou não tem dados
  } else if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {},
    };
    // Quando tem dados no corpo da req -> req em JSON
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  // Quando vier o token adicionamos no headers
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
