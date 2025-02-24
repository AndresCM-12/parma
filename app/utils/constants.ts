export const URL = "https://wp.parma.mx/graphql";

//Sections
export const featuredProducts = "featured-products";
export const featuredRecipes = "featured-recipes";
export const featuredBlogs = "featured-blogs";
export const whereFindUs = "where-find-us";
export const featuredReviews = "featured-reviews";
export const homePage = "home-featured";

//Pages
export const brandPage = "marca";
export const recipesPage = "recetas";
export const productsPage = "productos";
export const foroProvokerFAQ = "foro-provoker-faq";
export const foroInfo = "foro-provoker-faq-info";
export const foroProvokerUsers = "foro-provoker-users";
export const maridajePage = "maridaje";
export const reviewsPage = "resenas";
export const blogsPage = "blog";

//MetaData
export const homeMD = "home";
export const adminMD = "admin";
export const blogMD = "blog-2";
export const contactoMD = "contacto";
export const dondeMD = "donde";
export const foroMD = "foro";
export const marcaMD = "marca-2";
export const maridajesMD = "maridajes-2";
export const productosMD = "productos-2";
export const recetasMD = "recetasMD";
export const resenasMD = "resenas";
export const detallesRecetasMD = "detalles-recetas";
export const detallesProductosMD = "productos-2-2";
export const detallesProductosIndividualMD = "productos-2-2-2";

export const getMetaDataGraphqlQuery = (postName: string) => {
  return `
    query get_post_by_name {
      categories(where: {name: "metadata"}) {
        edges {
          node {
            id
            posts(where: {name: "${postName}"}) {
              edges {
                node {
                  content
                }
              }
            }
          }
        }
      }
    }
    `;
};

export const getSectionsGraphqlQuery = (postName: string) => {
  return `
    query get_post_by_name {
      categories(where: {name: "sections"}) {
        edges {
          node {
            id
            posts(where: {name: "${postName}"}) {
              edges {
                node {
                  content
                }
              }
            }
          }
        }
      }
    }
    `;
};

export const gePageInfo = (pageName: string) => {
  return `
    query get_page_by_name {
      categories(where: {name: "pages"}) {
        edges {
          node {
            id
            posts(where: {name: "${pageName}"}) {
              edges {
                node {
                  content
                }
              }
            }
          }
        }
      }
    }
    `;
};

export const getDetailPageInfo = (pageName: string) => {
  return `
    query get_detail_page_by_name {
      categories(where: {name: "detail-pages"}) {
        edges {
          node {
            id
            posts(where: {name: "${pageName}"}) {
              edges {
                node {
                  content
                }
              }
            }
          }
        }
      }
    }
    `;
};

export interface FeaturedProductsInterface {
  image: string;
  link: string;
}

export interface RecipeInterface {
  backgroundImage: string;
  link: string;
  image: string;
  dificulty: number;
  time: string;
  description: string;
  title: string;
}

export interface BlogItem {
  backgroundImage: string;
  title: string;
  body: string;
  ctaLink: string;
  ctaText: string;
  img: string;
}

export interface Store {
  link: string;
  icon: string;
}

export interface Review {
  title: string;
  description: string;
  score: number;
  image: string;
}
