import axios from 'axios'
import { baseURL } from "../config";

//创建axios实例
const request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'*'
  }
})
export default request
