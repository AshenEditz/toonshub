export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const truncate = (str, length = 50) => {
  return str.length > length ? str.substring(0, length) + '...' : str
}

export const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}