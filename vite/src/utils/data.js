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

dataLoader.getSavedArticles = () => {
  return new Promise((resolve) => {
    resolve([
      {
        keyword: "yahoo",
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Todd Feathers",
        title:
          "NSO Group Found Liable for Hacking WhatsApp Users in ‘Huge Win for Privacy’",
        description:
          "A federal judge ruled in favor of WhatsApp in a lawsuit the company brought against Israeli spyware maker linked to hacking of diplomats, human rights activists, and journalists.",
        url: "https://gizmodo.com/nso-group-found-liable-for-hacking-whatsapp-users-in-huge-win-for-privacy-2000542405",
        urlToImage:
          "https://gizmodo.com/app/uploads/2024/12/nso-whatsapp-lawsuit.jpg",
        publishedAt: "2024-12-23T15:55:00Z",
        content:
          "A federal court has found NSO Group, an Israeli spyware company, liable for reverse engineering WhatsApp in order to install malware on the phones of more than 1,400 people around the world, includin… [+2590 chars]",
      },
      {
        keyword: "google",
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Brett LoGiurato",
        title:
          "Stock market today: Dow ekes out gains, bitcoin slumps as 'Santa Claus' rally takes a pause",
        description:
          "US stocks were set to open post-Christmas trading with a bit of a hangover.",
        url: "https://finance.yahoo.com/news/live/stock-market-today-dow-ekes-out-gains-bitcoin-slumps-as-santa-claus-rally-takes-a-pause-175235354.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/VqjzhRsOuDfI1uCTtLnoZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/271990f0-5e7b-11ef-ab67-afc2b15399da",
        publishedAt: "2024-12-26T17:52:35Z",
        content:
          'US stocks struggled to meaningfully extend a "Santa Claus" rally the day after Christmas while Wall Street digested one of the only significant economic data points of the week.\r\nThe S&amp;P 500 (^GS… [+7385 chars]',
      },
      {
        keyword: "sun",
        source: {
          id: null,
          name: "The Desert Sun",
        },
        author: "Sam Morgen, Palm Springs Desert Sun",
        title:
          "Santa be warned: Wind gusts of up to 60 mph expected on Christmas Eve in Coachella Valley",
        description:
          "Strong winds on the night of Christmas Eve could make driving difficult, the National Weather Service warns. Especially if you're in a sleigh.",
        url: "https://www.desertsun.com/story/weather/2024/12/23/christmas-eve-weather-windy-night-expected-in-palm-springs-area/77175327007/",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/SdfaDi5ueqUqjneJNI5OKA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/the-desert-sun/9c30c5ccd695bf2b92736dfbab9cd2bd",
        publishedAt: "2024-12-23T17:09:01Z",
        content:
          'Strong winds on the night of Christmas Eve could make driving difficult, the National Weather Service warns, especially for "high profile vehicles."\r\nCould that mean Santa\'s sleigh?\r\nProbably not, co… [+1172 chars]',
      },
    ]);
  });
};
export default dataLoader;
