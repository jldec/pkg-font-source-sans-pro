var opts = module.exports = {

  'pub-pkg': 'pub-pkg-font-source-sans-pro',

  staticPaths: [
    { path:'./source-sans-pro.css', route:'/css', inject:true },
    { path:'./node_modules/npm-font-source-sans-pro/fonts', route:'/css/fonts', glob:'**/*.{eot,otf.woff}', maxAge:'1000d' }
  ]

}
