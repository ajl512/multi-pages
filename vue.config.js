// -----------------------------pages config all----------------------------------
// const fs = require('fs')
// let pages = {}
// const getEntryPages = async function () {
//   await fs.readdirSync('./src/pages/').forEach((val) => {
//     pages[val] = {
//       entry: `src/pages/${val}/main.js`,
//       template: 'public/index.html',
//       filename: `${val}.html`
//     }
//   })
// }
// getEntryPages('./src/pages/') // readdirSync

// -----------------------------单独打包某一个----------------------------------
const dirName = 'instance-table'
let pages = {}
function getEntryPages (val) {
  pages[val] = {
    entry: `src/pages/${val}/main.js`,
    template: 'public/index.html',
    filename: `index.html`,
    title: `${val}`
  }
}
getEntryPages(dirName) // readdirSyncc

// ---------------------------vue config------------------------------------
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const gzipSourceList = ['css', 'js']
module.exports = {
  publicPath: '/',
  outputDir: `./dist/${dirName}`, // build path
  pages: pages, // more pages config
  productionSourceMap: false, // don·t use map
  devServer: {
    port: 1314, // port
    open: true, // default browser
    overlay: {
      warnings: true, // eslint show warnings
      errors: true // eslint show errors
    }
  },
  configureWebpack: config => { // open gzip
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      return {
        plugins: [
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]', // 目标资源文件名称
            algorithm: 'gzip',
            test: new RegExp(
              '\\.(' + gzipSourceList.join('|') + ')$'
            ), // 匹配所有对应的文件
            threshold: 10240, // 多少kb 配置10kb
            minRatio: 0.8, // 压缩比例
            deleteOriginalAssets: false // 是否删除原始资源
          })
        ]
      }
    }
  }
}
