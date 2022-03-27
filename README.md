# Vue 3 + Typescript + Vite

## 目录结构

```python
├── README.md
├── package.json
├── index.html
├── src
│   ├── api  # 请求接口
│   ├── assets  # 静态资源
│          └── style # 全局样式
│   ├── components  # 通用业务组件
│   ├── directives # 指令集
│   ├── hooks # 全局hooks
│   ├── layout  # 布局
│   ├── mock  # 模拟数据
│   ├── views  # 页面模板
│   ├── router # 路由配置
│   ├── store  # 状态管理中心
│          ├── modules
│                  └── user #具体模块，以实际项目为准
│                       ├── index.ts #store定义
│                       └── index.ts #store类型
│          └── index.ts #用于导出store
│   ├── types  # Typescript 类型
│   └── utils  # 工具库
│   └── App.vue  # 视图入口
│   └── main.ts  # 入口文件
└── tsconfig.json
```
