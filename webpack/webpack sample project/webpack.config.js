const path=require('path');
const webpack=require('webpack');
module.exports={
    //当前目录下的APP里面的main.js文件
    devtool: 'eval-source-map',
    entry:'./app/main.js',
    output:{
        path:path.resolve(__dirname,'public'),
        filename:"bundle.js"
    },
    /* 
        Webpack has an optional server for local development purposes. It is a smallnode.js expressapp
        that serves static files and builds your assets according to your webpack configuration, keeping 
        them in memory, and doing so automatically refreshing the browser as you change your source files.
        It's a separate npm modulethat should be installed as a project dependency:
        
        npm install --save-dev webpack-dev-server

        安装完成之后要把package.json里面的start后面改为webpack-dev-server --progress


    */
    devServer: {
        /* 
            By default, thewebpack-dev-serverwill serve the files in the root of the project. To serve files from 
            a different folder (such as the "public" folder in our sample project, you need to configure a specific 
            content base.
        */
        contentBase: "./public",
        // colors: true,

        /* 
            Useful during the development of single page applications that make use of the HTML5 history API. 
            When set to "true", all requests to thewebpack-dev-serverthat do not map to an existing asset will
            instead by routed straight to/, that is, theindex.htmlfile.
        */
        historyApiFallback: true,
        /* 
            Set to "true" to insert a small client entry to the bundle to refresh the page on change.
        */
        inline: true,

        /* 
            Which port to use. If omitted, defaults to "8080".
        */
        port:8000
      } ,
      /* 
            One of the most exciting features of Webpack are loaders. Through the use of loaders,
         webpack can preprocess the source files through external scripts and tools as it loads 
         them to apply all kinds of changes and transformations. These transformations are useful 
         in many circumstances, for example for parsing JSON files into plain JavaScript or turning 
         next generation's JavaScript code into regular JavaScript that current browsers can understand 
         (so you can use next generation features today). Loaders are also essential for React development,
         as they can be used to transform React's JSX into plain JavaScript.
      
      */
    loader:{
        loaders:[
            //配置json-loader来解析json文件
            {
                test:/\.json$/,
                loader:"json"
            },
            //配置babel来解析es6和raect的jsx语法
            {
                /* 
                    bable是用来编译js的一个平台，它可以让你使用最新的js语法，使用js语法扩展，
                    比如react的jsx语法之类的

                    Babel is modular and distributed in different npm modules. 
                    The core functionality is available in the "babel-core" npm package, 
                    the integration with webpack is available through the "babel-loader" npm package, 
                    and for every type of feature and extensions you want to make available to your code, 
                    you will need to install a separate package (the most common are babel-preset-es2015 and
                    babel-preset-react,  for compiling ES6 and React's JSX, respectively).
                
                    npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react


                */
                // 以下的这些是webpack1.x的语法，现在是webpack3了，语法有些不一样
                // A regular expression that matches the file extensions that should run through this loader (Required).
                test:/\.js$/,
                //The name of the loader (Required).
                exclude:/node_modules/,
                //Optional setting to manually set which folders and files the loader should explicitly add or ignore.
                loader:'babel',
                // The query setting can be used to pass Additional options to the loader.
                // presets可以从webpack的配置文件种抽离出来，放在一个后缀名为.babelrc的文件里，直接一个对象{presets:[]}
                query:{
                    presets:['es2015','react']
                }
            },
            //配置stylesheet来解决样式问题,css-loader解析@import和url，style-loader解析样式,
            // npm install --save-dev style-loader css-loader
            {
                test:/\.css$/,
                loader:'style!css'
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('copyright flying unnicorns inc')
    ]
}
/* 
    1、css Modules:With CSS modules, all class names and animation names are scoped locally by default.
    Webpack embraced the CSS modules proposal from the very beginning, it's built in the CSS loader 
    - all you have to do is activate it by passing the "modules" query string. With this feature enabled,
    you will be able to export class names from CSS into the consuming component code, locally scoped 
    (so you don't need to worry about having many classes with the same name across different components).
    在webpack里面配置好css Module,就可以在引入css文件的时候给这个模块来一个query string，这样在本模块中就算有
    相同的class名也不怕，因为css modules只在你所引用的模块中起效果,构建工具会把类名解析成一个哈希
    字符串，同时，css文件也会被同时编译成相同的哈希字符串
    2、如果要支持变量。需要引入PostCss
    3、插件：
        HtmlWebpackPlugin

*/