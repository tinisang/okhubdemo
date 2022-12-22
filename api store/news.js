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
            name
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
            slug
          }
        }
        tags {
          nodes {
            link
            name
            slug
          }
        }
      }
    }
    `;
    return Grapql(query);
  };





  export const getRelatedNews = (size = 3, categories) => {
    if (size == null) {
      size = 3;
    }
  
    const results = "[" + categories.map((value) => '"' + value + '"') + "]";

  
    const query = `
    query AllPosts {
      posts(first: ${size},where: {taxQuery: {taxArray: {taxonomy: CATEGORY, field: SLUG, operator: IN, terms: ${results}}}, orderby: {field: DATE, order: DESC}, status: PUBLISH}) {
        nodes {
          date
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          excerpt
          slug
          title
          content
          categories {
            nodes {
              link
              name
              slug
            }
          }
          tags {
            nodes {
              link
              name
              slug
            }
          }
        }
        
      }
    }
    `;
  
    return Grapql(query);
  };
  

  
  export const getMarqueePosts = (size = 5) => {
    if (size == null) {
      size = 5;
    }
  
    const query = `
    query AllPosts {
  posts(where: {orderby: {field: DATE, order: DESC}}, first: ${size}) {
    nodes {
      slug
      title
    }
  }
}
    `;
  
    return Grapql(query);
  };







  

  

  export const getFilterNews = (size = 5, categoryId=null, offset = 0) => {
    if (size == null) {
      size = 5;
    }

    const query = `
    query AllPosts {
      posts(first: ${size},where: {
          categoryId: ${categoryId}, 
          taxQuery: {taxArray: {taxonomy: CATEGORY, terms: "uncategorized", field: SLUG, operator: NOT_IN}},
          orderby: {field: DATE, order: DESC}, 
          status: PUBLISH,
          offsetPagination: {offset: ${offset}, size: ${size}}
            }
        ) 
        {
        nodes {
          
          date
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          excerpt
          slug
          title
          content
          categories {
            nodes {
              link
              name
              slug
            }
          }
          tags {
            nodes {
              link
              name
              slug
            }
          }
        }
        pageInfo {
          offsetPagination {
            total
          }
        }
        
      }
    }
    `;
  
    return Grapql(query);
  };
  

  export const getAllPostCagtegories = () => {
 
    const query = `
    query NewQuery {
      categories(where: {exclude:1}) {
        edges {
          node {
            categoryId
            name
            count
          }
        }
      }
    }
    `;
  
    return Grapql(query);
  };
  