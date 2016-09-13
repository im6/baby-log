var webpack = require('webpack');
var path = require('path');

var isWatch = false;
var entryPath = './src/entries/index.js';
var ENV = 'build';  ////  build   VS.   dev
if(typeof process.env.npm_lifecycle_event != "undefined"){
    ENV = process.env.npm_lifecycle_event
}

process.argv.forEach((val, index, array) => {
    // come with watch mode
    if(index === 4 && val === '--watch'){
        ENV = 'dev';
        isWatch = true;
    }
});



/*=======================================================================*/
/*=============  environment variable is determined  ====================*/
/*=======================================================================*/
console.log('=================================');
console.log('=========  ENV: ' + ENV + "  ==========");
if(isWatch){
    console.log('=========  IS WATCHING  ==========');
}
console.log('=================================');

var wPlugin = ENV == 'build' ? [
    // plugin for the production
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        mange:{
            "screw-ie8" : true
        },
        compress : {
            "screw_ie8" : true
        }
    })
]: isWatch ? [
    // no plugin for watching mode
]: [
    // plugin for the debug
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

module.exports = {
    devtool: ENV === 'build' ? 'cheap-module-source-map' : 'inline-source-map',
    entry: {
        app: ENV === 'build' ? [
            entryPath
        ] : isWatch ? [
            entryPath
        ]: [
            'webpack-dev-server/client?http://127.0.0.1:8081/',
            'webpack/hot/only-dev-server',
            entryPath
        ]
    },

    output: {
        path: path.join(__dirname, isWatch ? 'temp' : 'public'),
        filename: 'bundle.js'
    },
    resolve:{
        modulesDirectories:['node_modules',  './src/modules/'],
        extensions: ['','.js', '.jsx']
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders:[
            { test: /\.jsx?$/,exclude: /node_modules/,loaders: ['babel?presets[]=es2015'] },
            //{test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
            { test: /\.jade$/, loader: "jade" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader" },
            { test: /\.less$/,loader: "style!css!less"}
        ]
    },
    plugins: wPlugin,
    eslint: {
        configFile: './.eslintrc'
    }
};



