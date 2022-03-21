module.exports = {
    // 避免 ESLint 往父级目录查找配置文件
    root: true,
    // 指定环境 env, 指定不同的环境可以给对应环境下提供预设的全局变量
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    // 业内大家普通使用的、遵循的编码规范
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
    ],
    parser: 'vue-eslint-parser',
    // 额外配置解析器参数 parserOption
    parserOptions: {
        // 指定要使用的 ECMAScript 版本，默认值 5
        ecmaVersion: 12,
        // 指定解析器 parser
        parser: '@typescript-eslint/parser',
        // script (默认) 或 module（如果你的代码是 ECMAScript 模块)
        sourceType: 'module',
        // 这是个对象，表示你想使用的额外的语言特性,所有选项默认都是 false
        ecmafeatures: {
            // 是否允许在全局作用域下使用 return 语句
            globalReturn: false,
            // 是否启用全局 strict 模式（严格模式）
            impliedStrict: false,
            // 是否启用JSX
            jsx: false,
        },
    },
    // rules和extends 只是检查 JS 语法。无法检查例如 Vue 中的 template 或者 React 中的 jsx。所以引入插件的目的就是为了增强 ESLint 的检查能力和范围。
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'quotes': [1, 'single']
    },
    // 全局变量
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
}
