// eslint-disable-next-line import/no-extraneous-dependencies

import axios from "axios";
import jwt from "jsonwebtoken";

const API_URL = "https://contentapi-dev.biletinial.com/api/";

// cinemapinkapi@biletinial.com
// 4574747

let token = process.env.API_TOKEN
const apiurl = process.env.API_URL
const authparams = {
  username: process.env.API_USERNAME,
  password: process.env.API_PASSWORD
}



const WebServices = {

  get: async (endpoint, params) => {

    console.log("GET", token)
    try {
      const response = await axios.get(`${API_URL + endpoint}`, {
        headers: {
          authorization: `Bearer ${token}`,
          XApiKey: `TPJDtRG0cP`
        },
        params,
      });

      return response.data;
    } catch (error) {

      if (error.response.status === 401) {
        const newToken = await WebServices.getToken()
        if (newToken.data.status_code === 200) {
          process.env.API_TOKEN = newToken.data.token.access_token
          token = newToken.data.token.access_token
          console.log("TOKEN", token)
          const data = await WebServices.get(endpoint, params)
          return data
        }
      } else {
        return { status_code: 500 }
      }
    }
  },



  post: async (endpoint, params) => {
    try {
      const response = await axios.post(
        `${API_URL + endpoint}`, params,
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

    const auth = await axios.post(`${API_URL + 'Auth/Token'}`, authparams,
      {
        headers: {
          XApiKey: `TPJDtRG0cP`
        }
      })

    return auth;
  },

  getAllSlider: (params) => WebServices.get(`Cinema/GetSliders`, params),
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
  getSettings: (params) => WebServices.get('Settings/Get', params),
  getGetBySeoUrl: (params) => WebServices.get(`Content/GetBySeoUrl`, params),




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
