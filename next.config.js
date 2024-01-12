/** @type {import('next').NextConfig} */
module.exports = {
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
      };
    },
  };
  