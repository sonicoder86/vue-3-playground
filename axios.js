const axios = require('axios');

axios.get('http://localhost:3000', { headers: { 'Accept': 'text/html, text/plain, application/json' } })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  });

