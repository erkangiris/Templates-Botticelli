// eslint-disable-next-line import/no-extraneous-dependencies

import axios from "axios";
import jwt from "jsonwebtoken";


const apikey = "600a9a61fbcc35fc7e748bced76609844cbd76cb359b3f8d3b03fba2dcff677f7fcc6722519b53c66568df569388024d6f5628429452c3e27bf84d23a144320c9e17bfcba12f3e5523268c3fb066f4427f78ec5aa707cb5ef328167c97c192048b850089cea8ae8eb2483ec5cd06e43662de5b5f78fadf3d4763d7bea4f5ac95"
const apiurl = "https://contentapi-dev.biletinial.com/api/"
const apiuser = "cinemapinkapi@biletinial.com"
const apipass = "4574747"
const apicinm = "9"

let token = apikey
const authparams = {
  username: apiuser,
  password: apipass
}



const WebServices = {

  get: async (endpoint, params) => {

    try {
      const response = await axios.get(`${apiurl + endpoint}`, {
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
        `${apiurl + endpoint}`, params,
        params,
        {
          headers: {
            authorization: `Bearer ${token}`,
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

    const auth = await axios.post(`${apiurl + 'Auth/Token'}`, authparams,
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
