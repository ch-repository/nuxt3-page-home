import requester from "~/server/axios/request";

export default {
  //用户登录
  sendEmail({ name, email, message }) {
    return requester({
      url: `/email`,
      method: "post",
      data: {
        name,
        email,
        message,
      },
    });
  },
};
