const path=require('path');
module.exports={
    //当前目录下的APP里面的main.js文件
    devtool: 'eval-source-map',
    entry:'./app/main.js',
    output:{
        path:path.resolve(__dirname,'public'),
        filename:"bundle.js"
    },
    devServer: {
        contentBase: "./public",
        // colors: true,
        historyApiFallback: true,
        inline: true
      } 
}