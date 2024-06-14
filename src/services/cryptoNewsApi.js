import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders= {
    
        'x-rapidapi-key': '7c83fd2604msh721c6f065a263c5p1fd41cjsn0506d16567c7',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'X-BingApis-SDK': 'true'
      }

      const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
      const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

      export const cryptoNewsApi = createApi({
        reducerPath: 'cryptoNewsApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) => ({
          getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
          }),
        }),
      });


      export const { useGetCryptoNewsQuery } = cryptoNewsApi;