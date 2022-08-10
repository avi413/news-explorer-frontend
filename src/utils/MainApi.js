

export const BASE_URL = "https://ec2-54-85-147-173.compute-1.amazonaws.com";

export const register = ( password, email, name ) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email, name }),
  })
    .then(checkResponse)
    .then((data) => {
      return data;
    });
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};

export const addArticle = (keyword, title, text, source, image, date, link ) => {
    return fetch(`${BASE_URL}/articles`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        authorization :  localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyword, title, text, source, image, date, link }),
    })
      .then(checkResponse)
      .then((data) => {
        return data;
      });
  };

  export const getArticles = () => {
    return fetch(`${BASE_URL}/articles`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        authorization :  localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
    })
      .then(checkResponse)
      .then((data) => {
        return data;
      });
  };



export const checkToken = (token) => {

  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(checkResponse)
    .then((data) => data);
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}  ${res.statusText}`);
}
