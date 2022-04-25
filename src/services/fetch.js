// Fichero src/services/api.js
const getWordFromApi = () => {
  // Llamamos a la API
  return fetch('https://clientes.api.greenborn.com.ar/public-random-word')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      return data;
    });
};

const objectWord = {
  getWordFromApi: getWordFromApi,
};
export default objectWord;
