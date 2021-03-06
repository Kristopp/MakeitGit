const path = require("path")

module.exports = { 
    watch:true,
    entry: "./src/index.js",
    output: { 
        filename: "true.js",
        path:path.resolve(__dirname, "alpha")
    },
    module: { 
        rules: [ 
            { 
                test:/\.css$/,
                use:["style-loader","css-loader"]

            }
        ]
    }
};