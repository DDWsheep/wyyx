day01
    1. 搭建脚手架
    npx create-react-app yanxuan

    npm i --save stylus stylus-loader
    npm run eject //弹出webpack所有配置

    在config文件夹下找到dev文件
    // 在module rules里面添加stylus-loader的规则
     module: {
        strictExportPresence: true,
        rules: [
            ...
             oneOf: [
                ...
                {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-loader', 'stylus-loader']
              },
             ]
        ]
        ...
      }

      在file-loader添加对.styl文件的解析
      // 在oneOf的最底部找到file-loader
        {
          exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.(styl|stylus)$/], // 添加styl文件的解析
          loader: require.resolve('file-loader'),
          options: {
              name: 'static/media/[name].[hash:8].[ext]',
          },
        },

