import { URL, gePageInfo, getSectionsGraphqlQuery } from "./constants";

//We use this method to obtain an array of objects from a specific post
export async function fetchArrayInPost(postName: string) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: getSectionsGraphqlQuery(postName),
      }),
    });

    const data = await response.json();
    const post: string =
      data.data.categories.edges[0].node.posts.edges[0].node.content;
    const decodedPost = post
      .split("<code>")[1]
      .split("</code>")[0]
      .replaceAll("&#91;", "[");
    return JSON.parse(decodedPost);
  } catch (error) {
    console.error("Error fetching data for:", postName);
    console.log("error:", error);
    return [];
  }
}

export async function fetchPageInfo(pageName: string) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gePageInfo(pageName),
      }),
    });

    const data = await response.json();
    const post: string =
      data.data.categories.edges[0].node.posts.edges[0].node.content;
    const decodedPost = post
      .split("<code>")[1]
      .split("</code>")[0]
      .replaceAll("&#91;", "[");
    return JSON.parse(decodedPost);
  } catch (error) {
    console.error("Error fetching data for:", pageName);
    console.log("error:", error);
    return [];
  }
}

export async function fetchPageDetailInfo(pageName: string) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gePageInfo(pageName),
      }),
    });

    const data = await response.json();
    const post: string =
      data.data.categories.edges[0].node.posts.edges[0].node.content;
    const decodedPost = post
      .split("<code>")[1]
      .split("</code>")[0]
      .replaceAll("&#91;", "[");
    return JSON.parse(decodedPost);
  } catch (error) {
    console.error("Error fetching data for:", pageName);
    console.log("error:", error);
    return [];
  }
}
