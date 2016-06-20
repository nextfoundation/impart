import store from 'react-native-simple-store'
import {
  USER_KEY,
  NAME_KEY,
  EMAIL_KEY,
  PHONE_NO_KEY,
} from '../../common/constants/api'

export default {
  getUserId() {
    return store.get(USER_KEY)
      // .then(result => JSON.parse(result))
  },
  setUserId(userId) {
    // if (typeof value !== 'object') return Promise.reject(new Error('Value must be a JS Object'))
    // const userObj = JSON.stringify(value)
    return store.update(USER_KEY, userId)
  },
  getName() {
    return store.get(NAME_KEY)
      .then(name => (
        typeof name === 'string' ? name : ''
      ))
  },
  setName(name) {
    return store.update(NAME_KEY, name)
  },
  getEmail() {
    return store.get(EMAIL_KEY)
      .then(email => (
        typeof email === 'string' ? email : ''
      ))
  },
  setEmail(email) {
    return store.update(EMAIL_KEY, email)
  },
  getPhoneNo() {
    return store.get(PHONE_NO_KEY)
      .then(phoneNo => (
        typeof phoneNo === 'string' ? phoneNo : ''
      ))
  },
  setPhoneNo(phoneNo) {
    return store.update(PHONE_NO_KEY, phoneNo)
  },
}
