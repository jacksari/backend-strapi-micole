module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6aabe11401f76bb28dc7f3342b2a8888'),
  },
});
