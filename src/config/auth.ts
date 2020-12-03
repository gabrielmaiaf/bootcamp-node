export default {
  jwt: {
    secret: process.env.APP_SECRET || 'f8ba93a1e70f4b5467bcadd863570dda',
    expiresIn: '1d',
  },
};
