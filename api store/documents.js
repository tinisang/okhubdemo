import axios from "axios";
var API_URL = process.env.NEXT_PUBLIC_HOSTNAMEA;
const Grapql = (query, token = "", session = "") => {
  let headers = {};
  if (token !== "") {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }
  if (session !== "") {
    headers = {
      ...headers,
      "woocommerce-session": `Session ${session}`,
    };
  }
  return axios({
    method: "POST",
    url: `${API_URL}/graphql`,
    data: {
      query: query,
    },
    headers: headers,
    timeout: 90000,
  }).catch((e) => console.log("e", process.env.NEXT_PUBLIC_HOSTNAMEA));
};

export const getAllDocuments = () => {
    const query = `
    query NewQuery {
        documents(where: {orderby: {field: DATE, order: DESC}}, first: 10) {
          nodes {
            title
            date
            File {
              file {
                mediaItemUrl
              }
            }
          }
        }
      }
    `;
    return Grapql(query);
  };

