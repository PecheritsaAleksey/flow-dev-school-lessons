import { getRequest } from "./service";

const API_URL = "articles/";

export async function getAllArticles() {
  const articles = await getRequest(`${API_URL}`);

  return articles;
}
