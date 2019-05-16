import { stringify } from "qs";
import request from "../utils/request";

export async function getNews(params) {
  return request(`/web/interview?${stringify(params)}`);
}