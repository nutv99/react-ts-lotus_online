import axios from 'axios';
import React = require('react');
import webConfig from './config';

const config = {
  api: 'https://jsonplaceholder.typicode.com',
  options: {
    headers: { 'content-type': 'application/json' },
  },
};

const configMall = {
  // api: 'https://lovetoshopmall.com',
  apiHost: webConfig.hostName,
  options: {
    headers: { 'content-type': 'application/json' },
  },
};


const axiosGet = (endpoint) => {
  // axios.get(`${config.api}${endpoint}`).then((res) => {
  //   // const persons = res.data;
  //   // this.setState({ persons });
  //   console.log(res);
  // });
  //const aa = webConfig ;
  
  
  console.log('webConfig', webConfig.hostName);
  return axios
    .get(`${configMall.apiHost}/${endpoint}`)
    .then((response) => handleResponseAxios(response))
    .then((data) => {
      // console.log('ApiService-', data.data);
      return data.data;
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};

const axiosPost = (endpoint, payload) => {
  axios.post(`${config.apiHost}${endpoint}`, { payload }).then((res) => {
    //console.log(res);
    //console.log(res.data);
  });
};

const axiosPatch = (endpoint, payload) => {
  axios.patch(`${config.apiHost}${endpoint}`).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};

const axiosDelete = (endpoint, payload) => {
  axios.delete(`${config.apiHost}${endpoint}`).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};

const httpGet = (endpoint) => {
  return fetch(`${configMall.api}/${endpoint}`, {
    ...config.options,
  })
    .then((response) => handleResponseFetch(response))
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
    .then((response) => handleResponseFetch(response))
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
    .then((response) => handleResponseFetch(response))
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
    .then((response) => handleResponseFetch(response))
    .then((response) => response)
    .catch((error) => {
      console.error(error);
      throw Error(error);
    });
};

const handleResponseFetch = (response) => {
  // You can handle 400 errors as well.
  if (response.status === 200) {
    return response.json();
  } else {
    throw Error(response | 'error');
  }
};

const handleResponseAxios = (response) => {
  // You can handle 400 errors as well.
  if (response.status === 200) {
    return response;
  } else {
    throw Error(response | 'error');
  }
}; 



export default {
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
  axiosGet,
  axiosPost,
  axiosPatch,
  axiosDelete,
};
