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
    title: 'TM React',
    description: 'This is React Material UI, UI Projects',
    themeConfig: {
        colors: {
            primary: 'tomato',
        },
    },
    base: "/tm-react-doc/",
    files: '**/*.{md,markdown,mdx}',
    plugins: [],
    dest: './../../docs',
    modifyBundlerConfig: config => {
        return merge(config, customCompile);
    }
}
