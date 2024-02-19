// eslint-disable-next-line import/no-extraneous-dependencies

import axios from "axios";
import jwt from "jsonwebtoken";


// cinemapinkapi@biletinial.com
// 4574747

const token = process.env.API_TOKEN
const apiurl = process.env.API_URL
const secretKey = "SecretKeyCmsApi."


const WebServices = {
  get: async (endpoint, params) => {

    async function fetchData() {
      try {
        const response = await fetch(apiurl);
        if (response.status === 401) {
          const tokenResponse = await fetch(`${apiurl}Auth/Token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "username": "kinomediteranapi@biletinial.com",
              "password": "kinomediteran1!"
            })
          });
          if (tokenResponse.status === 200) {
            const tokenData = await tokenResponse.json();
            process.env.TOKEN = tokenData.token;

            const newResponse = await fetch('ana_api_url', {
              headers: {
                Authorization: `Bearer ${tokenData.token}`
              }
            });


            // check token geçerli ise devam et değilse login ol yei token  env.API_TOKENa setle

            const response = await axios
              .get(`${apiurl + endpoint}`, {
                headers: {
                  // authorization: `Bearer ${sessionStorage.getItem('accessprocess.env.API_TOKEN')}`,
                  authorization: `Bearer ${process.env.API_TOKEN}`,
                  XApiKey: `TPJDtRG0cP`
                },
                params,
              })
              .then((response) => response.data);

            return response;

          } else {
            throw new Error('Token alınamadı');
          }
        } else {
          return response;
        }
      } catch (error) {
        console.error('Hata:', error);
        throw error;
      }
    }






















  },
  post: async (endpoint, params) => {
    try {
      const response = await axios.post(
        `${apiurl + endpoint}`, params,
        params,
        {
          headers: {
            authorization: `Bearer ${process.env.API_TOKEN}`,
            XApiKey: `TPJDtRG0cP`,
            "Content-Type": "application/json",
          },
        }
      );
      return { success: true, response: response.data };
    } catch (error) {
      return { success: false, response: error };
    }
  },

  getToken: async () => {

  },


  getAllSlider: (params) => WebServices.get(`Cinema/GetSliders?langId=1`, params),
  getAllVision: (params) => WebServices.get(`Cinema/Visions?CinemaId=${process.env.CINEMA_ID}`, params),
  getAllBanner: (params) => WebServices.get("Banner/Get", params),
  getAllHighligts: (params) => WebServices.get(`Cinema/GetHighlights`, params),
  getAllNextProgram: (params) => WebServices.get("Cinema/NextProgram", params),
  getAllFilmDetail: (params) => WebServices.get(`Cinema/FilmDetail?langId=1&filmId=${params.id}`, params),
  getContent: (params) => WebServices.get(`Content/Get`, params),
  getContentbyId: (params) => WebServices.get(`Content/GetById?Id=${params.id}`, params),
  getAllBranches: (params) => WebServices.get("Branch/Get", params),
  getAllBranchDetail: (params) => WebServices.get(`Cinema/GetBranchDetail?Id=${params.id}`, params),
  postMail: (params) => WebServices.post(`Cinema/CreateSubscribe`, params),
  getAllNews: (params) => WebServices.get(`Cinema/GetNewsList`, params),
  getNewsById: (params) => WebServices.get(`News/GetNewsById`, params),
  getAllCampaigns: (params) => WebServices.get('Campaign/Get', params),




  getAllContent: (params) => WebServices.get(`Cinema/GetContent?contentTypes=${params.id}`, params),
  getAllCampaigns: (params) => WebServices.get('Campaign/Get', params),
  getAllVision: (params) => WebServices.get(`Cinema/Visions?CinemaId=9&langId=1&OrganizerType=1`, params),
  getAllSubscribe: (params) => WebServices.get("Subscribe/Get", params),
  getAllHakkimizda: (params) => WebServices.get("Content/GetById?Id=3", params),
  getAllHighligts: (params) => WebServices.get(`Cinema/GetHighlights`, params),
  getAllNews: (params) => WebServices.get(`Cinema/GetNewsList`, params),



  // getAllVisionProgram: (params) => WebServices.get('Branch/Get',params),
};

export { WebServices };
