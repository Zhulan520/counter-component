// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.export.js', // 输入文件
  output: [
    {
      file: 'dist/index.js', // 输出 CommonJS 格式的文件
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js', // 输出 ES 模块格式的文件
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // 确保对等依赖不会被打包
    resolve(), // 解析第三方模块
    commonjs({
      exclude: 'src/**',
    }), // 将 CommonJS 模块转换为 ES6 模块
    babel({
      babelHelpers: 'bundled', // 或者 'runtime'，根据你的需求选择
      presets: ['@babel/preset-react'],
    }), // 使用 Babel 处理 JSX
    terser(), // 压缩代码
  ],
};
