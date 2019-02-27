import { get, post } from './http'
export const apiProduct = p => get('http://localhost:8081/static/list.json');
export const apiAddress = p => get('http://localhost:8081/static/list2-child.json');
