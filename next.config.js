/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //set to true to use strict rule from react but when logging it's will log two times
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
