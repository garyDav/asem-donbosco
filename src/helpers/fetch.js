const baseUrl = 'http://localhost:3500/api'

const fetchSinToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`

  if (method === 'GET') {
    return fetch(url)
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}

const fetchConToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage.getItem('token') || ''

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } else {
    return fetch(url, {
      method,
      /*headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },*/
      body: JSON.stringify(data),
    })
  }
}

const fileUploadFormData = async (endpoint, data) => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage.getItem('token') || ''

  const formData = new FormData()
  const filesLength = data.length
  for (let i = 0; i < filesLength; i++) {
    formData.append('files', data[i])
  }

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })

    if (resp.ok) {
      const cloudResp = await resp.json()
      return cloudResp
    } else {
      throw await resp.json()
    }
  } catch (err) {
    throw err
  }

  // return url de la imagen
}

export { fetchSinToken, fetchConToken, fileUploadFormData }
