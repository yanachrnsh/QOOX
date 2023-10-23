import axios from 'axios'
import { core } from './config'

export const api = axios.create({ baseURL: `${core.apiHost}` })
