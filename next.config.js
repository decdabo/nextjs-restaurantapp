const debug = process.env.NODE_ENV !== "production";

module.exports = {
  rectStrictMode: true,
  assetPrefix: !debug ? '/nextjs-restaurantapp/' : '',
  basePath: !debug ? "/nextjs-restaurantapp" : '' 
}
