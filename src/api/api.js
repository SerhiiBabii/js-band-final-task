const API_URL = 'https://js-band-api.glitch.me';

export const fetchApi = (url, option = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, option)
      .then((response) => {
        if (response.status < 400) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        resolve(data);
      })
      .catch((response) => {
        response.json().then((error) => {
          reject(error);
        });
      });
  });
};

export default class CallApi {
  static get(url, token) {
    return fetchApi(`${API_URL}${url}`, {
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
