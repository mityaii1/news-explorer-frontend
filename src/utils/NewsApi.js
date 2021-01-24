const NEWS_URL= 'https://nomoreparties.co/news/v2/everything?';
const API_KEY= '18cd1f78b56748ec82711cd5fb67b8a8';

const date = new Date();
const currentDate = date.toISOString().slice(0, 10);
date.setDate(date.getDate() - 7);
const fromDate = date.toISOString().slice(0, 10);

export const getNewsArticle = (keyword) => {
  return fetch(`${NEWS_URL}q=${keyword}&from=${fromDate}&to=${currentDate}&pageSize=100&apiKey=${API_KEY}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error ${res.status}`);
    });
}
