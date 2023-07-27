import httpRequest from './request'

/**
 * @description 发送邮件
 * @returns {null}
*/

export const sendEmailFetch = (data) => {
  return httpRequest.post('/email', data)
}