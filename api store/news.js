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

export const getAllPostSlug = () => {
    const query = `
    query NewQuery {
      posts {
        nodes {
          slug
        }
      }
    }
    `;
    return Grapql(query);
  };


export const getPostContentBySlug = (slug) => {
    const query = `
    query NewQuery {
      post(id: "${slug}", idType: SLUG) {
        date
        author {
          node {
            username
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        excerpt
        title
        content
        categories {
          nodes {
            link
            name
          }
        }
        tags {
          nodes {
            link
            name
          }
        }
      }
    }
    `;
    return Grapql(query);
  };





