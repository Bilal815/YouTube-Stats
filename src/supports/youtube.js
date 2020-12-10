import axios from 'axios'

const KEY = 'AIzaSyAjgQfdW4cXWABiEXHa6FQbxu9DDVoDnp4'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippetn statistics',
    key: KEY
  }
});