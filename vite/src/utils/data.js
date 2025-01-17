import { newsApiBaseUrl, useLiveData } from "./constants";
import sampleNewsResponse from "/public/SampleNewsResponse.json";

const dataLoader = {
  isBookMarked: (url) => {
    return Promise.resolve(true);
  },
};

dataLoader.searchNews = function (term) {
  var from = new Date();
  from.setDate(from.getDate() - 7);
  const url =
    `${newsApiBaseUrl}?q=${term}&apiKey=647f4309b2b247bc8c741267672f86b6` +
    `&pageSize=100&to=${new Date().toLocaleDateString("en-US")}` +
    `&from=${from.toLocaleDateString("en-US")}`;
  if (useLiveData) {
    return fetch(url).then((response) => response.json());
  } else {
    return Promise.resolve(sampleNewsResponse);
  }
};

export default dataLoader;
