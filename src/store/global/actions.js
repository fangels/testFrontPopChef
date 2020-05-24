import API from '../../config/axios'

export const requestToken = async payload => {
  try {
    const request = await API.get('/auth', {
      params: {
        userName: payload.userName,
        password: payload.password,
      },
    })
    return request.data
  } catch (error) {
    return false
  }
}
