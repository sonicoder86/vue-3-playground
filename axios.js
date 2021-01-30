const axios = require('axios');

axios.get('https://localhost:3000')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  });

