const initialState = {
  i18n: window.localStorage.getItem('i18n')
}

function changeI18n({ payload, put }) {
  const { value } = payload.target
  put({ i18n: value })
  window.localStorage.setItem('i18n', value)
}

export default {
  initialState,
  changeI18n
}
