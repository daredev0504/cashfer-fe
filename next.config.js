/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret:
      "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "https://localhost:44351/api/v1" // development api
        : "http://localhost:3000/api", // production api
  },
  env: {
   cliend_id: '781874983307-o1arh0g2p0irfhc3d5sq5drnduqc1vdf.apps.googleusercontent.com',
  },
 
};