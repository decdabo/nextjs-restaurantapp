const path = require('path');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/burguer": { page: "/[food]" },
      "/pizza": { page: "/[food]" },
      "/coffee": { page: "/[food]" },
      "/oriental": { page: "/[food]" },
      "/deserts": { page: "/[food]" }
    }
  },
  assetPrefix: !debug ? '/nextjs-restaurantapp/' : '',
}

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}