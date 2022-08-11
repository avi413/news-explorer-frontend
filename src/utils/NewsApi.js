import { addDays, dateFormat } from './dateHandler.js';

class Api {
  constructor(baseUrl, apiKey) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
    this._from = dateFormat(new Date());
    this._to = dateFormat(addDays(new Date(), 7));
  }

  getNews(q) {
    return fetch(
      `${this._baseUrl}?apiKey=${this._apiKey}&sortBy=publishedAt&from=${this._from}&to=${this._to}&pageSize=100&q=${q}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }
}

export const newsApi = new Api(
  'https://nomoreparties.co/news/v2/everything',
  '83e76145aed04bcda17ba0869ea48940'
);
