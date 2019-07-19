const merge = require('webpack-merge');
const customCompile = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    }
};

export default {
    public: './docs/assets',
    title: 'React MUI UI',
    description: 'This is React Material UI, UI Projects',
    themeConfig: {
        colors: {
            primary: 'tomato',
        },
    },
    files: './docs/mdx/*.{md,markdown,mdx}',
    plugins: [],
    dest: './../../docs',
    modifyBundlerConfig: config => {
        return merge(config, customCompile);
    }
}
