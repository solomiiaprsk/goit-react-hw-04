import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (query, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      page: currentPage,
      per_page: 16,
      client_id: "vX-p8-lENvSnnDRxpxCTXxulCLp5zeXELm-q_0Vls6Q",
      orientation: "landscape",
    },
  });

  return response.data;
};
    
