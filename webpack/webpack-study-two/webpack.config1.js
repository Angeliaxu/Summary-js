const path=require('path');
const htmlWebpackPlaugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },
    plugins:[
        new htmlWebpackPlaugin({
            template:'src/index.html'
        })
    ],
    devServer:{
        open:true,
        port:9000
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['react']
                    }
                }
            }
        ]
    }
}