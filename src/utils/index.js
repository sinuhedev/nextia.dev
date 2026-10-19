import { getVersion } from 'nextia'

const env = Object.freeze({
  VERSION: getVersion(),
  VIEW_TRANSITION_NAME: 'fade'
})

export { env }
