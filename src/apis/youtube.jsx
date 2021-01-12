import axios from 'axios'

const KEY = 'AIzaSyC5O4rcTPjxpPgHr3kQIhqmmRnfUNmfvu8'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
})