const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "index.bundle.js"
    },
    devServer: {
        port: 3000,
        contentBase: "./public"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "benchkatalog.html",
            template: "src/benchkatalog.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "etais-la-sauvin.html",
            template: "src/etais-la-sauvin.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "quizzy.html",
            template: "src/quizzy.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "competences.html",
            template: "src/competences.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "experiences.html",
            template: "src/experiences.pug"
        }),
        new MiniCSSExtractPlugin({
            filename: "./styles/styles.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-loader",
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    }
};
module.exports = (env, argv) => {
    if (argv.mode === "development") {
    }
    if (argv.mode === "production") {
    }
    return config;
};
