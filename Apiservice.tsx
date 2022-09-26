import axios from 'axios';

const config = {
  api: 'https://jsonplaceholder.typicode.com',
  options: {
    headers: { 'content-type': 'application/json' },
  },
};

const configMall = {
  api: 'https://lovetoshopmall.com',
  options: {
    headers: { 'content-type': 'application/json' },
  },
};

const axiosGet = (endpoint) => {
  axios.get(`${config.api}${endpoint}`).then((res) => {
    // const persons = res.data;
    // this.setState({ persons });
    console.log(res);
  });
};

const axiosPost = (endpoint, payload) => {
  axios.post(`${config.api}${endpoint}`, { payload }).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};

const axiosPatch = (endpoint, payload) => {
  axios.patch(`${config.api}${endpoint}`).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};

const axiosDelete = (endpoint, payload) => {
  axios.delete(`${config.api}${endpoint}`).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};

const httpGet = (endpoint) => {
  return fetch(`${configMall.api}/${endpoint}`, {
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const httpPost = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: 'post',
    body: data ? JSON.stringify(data) : null,
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const httpPut = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: 'put',
    body: data ? JSON.stringify(data) : null,
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const httpDelete = (endpoint, data) => {
  return fetch(`${config.api}${endpoint}`, {
    method: 'delete',
    ...config.options,
  })
    .then((response) => handleResponse(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const handleResponse = (response) => {
  // You can handle 400 errors as well.
  if (response.status === 200) {
    return response.json();
  } else {
    throw Error(response.json() | 'error');
  }
};

export default { httpGet, httpPost, httpPut, httpDelete };
