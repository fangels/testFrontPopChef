import API from '../../config/axios'

export const requestAllProducts = async () => {
  try {
    const request = await API.get('/private/products/all')
    return request.data
  } catch (error) {
    return false
  }
}

export const requestProduct = async payload => {
  try {
    const request = await API.get('/private/products', {
      params: {
        id: payload.productId,
      },
    })
    return request.data
  } catch (error) {
    return false
  }
}

export const requestCreateProduct = async payload => {
  try {
    const request = await API.post('/private/products', {
      ...payload,
    })
    return request.data
  } catch (error) {
    return false
  }
}

export const requestUpdateProduct = async payload => {
  try {
    const request = await API.put('/private/products', {
      ...payload,
    })
    return request.data
  } catch (error) {
    return false
  }
}

export const requestDeleteProduct = async payload => {
  try {
    const request = await API.delete('/private/products', {
      params: {
        id: payload.id,
      },
    })
    return request.data
  } catch (error) {
    return false
  }
}
