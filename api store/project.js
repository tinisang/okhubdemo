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



export const getProjectSlugs = () => {
    const query = `
    query NewQuery {
        projects {
          nodes {
            slug
          }
        }
      }
    `;
    return Grapql(query);
  };



export const getProjectDataBySlug = (slug) => {
    const query = `
    query NewQuery {
        project(id: "${slug}", idType: URI) {
          title
          projectCategories {
            nodes {
              name
            }
          }
          projectFields {
            nodes {
              name
            }
          }
          projectSection {
            achievement {
              title
              description
            }
            bannerImage {
              mediaItemUrl
            }
            clientProblems {
              description
              problem {
                problemItem
              }
            }
            finalSection {
              title
              liveSite
              description
            }
            logo {
              mediaItemUrl
            }
            member {
              name
            }
            mobileVersion {
              mediaItemUrl
            }
            pcVersion {
              mediaItemUrl
            }
            previewImages {
              mediaItemUrl
            }
            quote {
              name
              position
              content
            }
            whyOkhub {
              reason
              detail
            }
          }
        }
      }
    `;
    return Grapql(query);
  };

