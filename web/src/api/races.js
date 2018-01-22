import { johnapi } from "./init";

export function getRaceDataByEvent(id) {
  return johnapi.get(`./pos-by-event/${id}`);
}

export function getRaceDataByMusher(id) {
  return johnapi.get(`./pos-by-musher/${id}`);
}
