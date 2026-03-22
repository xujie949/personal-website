# 个人网站项目

一个现代化的个人网站，展示个人品牌、作品集、博客和联系方式。

## 项目结构

```
/
├── index.html          # 首页
├── 404.html            # 404错误页面
├── sitemap.xml         # 站点地图
├── robots.txt          # 搜索引擎爬虫配置
├── rss.xml             # RSS订阅
├── manifest.json       # PWA配置
├── README.md           # 项目说明
├── pages/              # 页面目录
│   ├── about.html      # 关于页面
│   ├── portfolio.html  # 作品集页面
│   ├── blog.html       # 博客列表页面
│   ├── post.html       # 博客文章详情页
│   └── contact.html    # 联系页面
├── assets/             # 静态资源
│   ├── images/         # 图片
│   └── icons/          # 图标
├── css/                # 样式文件（可选）
├── js/                 # JavaScript文件（可选）
├── posts/              # 博客Markdown文件（可选）
└── data/               # 数据文件（可选）
```

## 功能特性

### 设计 & 用户体验
- 简洁专业的视觉设计（主色：蓝色 #2563eb）
- 响应式布局，适配手机/平板/电脑
- 移动端优先设计
- 无障碍访问支持
- 平滑的动画和过渡效果
- 滚动时导航栏自动隐藏/显示

### 核心功能
- **首页**: 个人品牌展示、技能标签、作品轮播、浮动联系按钮
- **关于页面**: 个人照片、时间线经历、技能进度条、兴趣展示
- **作品集**: 分类筛选、项目详情模态框、图片懒加载
- **博客系统**: 文章列表、Markdown支持、分类标签、搜索功能、RSS订阅
- **联系页面**: 表单验证、验证码、成功提示、防爬虫邮箱

### 性能优化
- 关键CSS内联
- 图片懒加载
- Intersection Observer API
- 字体预连接
- 语义化HTML5标签

### SEO优化
- 完整的meta标签
- Open Graph协议
- Twitter Cards
- XML站点地图
- RSS订阅
- 规范URL
- Web App Manifest

### 安全
- 表单输入验证
- XSS防护
- 验证码机制

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **设计**: 原生CSS，Flexbox/Grid布局
- **字体**: Inter (Google Fonts)
- **无框架依赖**: 纯原生实现

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 部署说明

1. 将所有文件上传到Web服务器
2. 确保服务器支持HTTPS
3. 配置404页面
4. 更新`sitemap.xml`和`robots.txt`中的域名
5. 添加真实的项目图片到`assets/images/`

## 自定义配置

### 修改个人信息
编辑各个HTML文件中的个人信息：
- 姓名、职位、简介
- 联系方式
- 社交媒体链接

### 添加新文章
1. 在`blog.html`中添加新的文章卡片
2. 创建对应的文章页面
3. 更新`rss.xml`
4. 更新`sitemap.xml`

### 添加新项目
在`portfolio.html`中添加新的项目卡片，并更新`projectData`对象。

## 性能指标

- Lighthouse性能评分: 95+
- 首屏加载时间: < 1.5s
- 可交互时间: < 3s

## 许可证

MIT License

## 作者

杰佬 - 全栈开发者 & UI设计师

---

使用 ♥ 和纯代码构建
