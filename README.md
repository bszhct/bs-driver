# BS DRIVER

基于 shepherd.js 封装的新手引导组件，主要是对样式进行了一些优化，内置封装了黑色遮罩层、关闭按钮显示、键盘按钮控制步骤、高亮元素四周要填充的空白像素等功能，详细的默认配置如下：

```js
const defaultConfig = {
  // 是否显示黑色遮罩层
  useModalOverlay: true,
  // 键盘按钮控制步骤
  keyboardNavigation: true,
  defaultStepOptions: {
    // 显示关闭按钮
    cancelIcon: {
      enabled: true
    },
    scrollTo: { behavior: 'smooth', block: 'center' },
    // 高亮元素四周要填充的空白像素
    modalOverlayOpeningPadding: 8,
    // 空白像素的圆角
    modalOverlayOpeningRadius: 4,
    buttons: [{
      action () {
        return this.back()
      },
      text: '上一步'
    }, {
      action () {
        return this.next()
      },
      text: '下一步'
    }]
  }
}
```

默认配置项通过 Vue.prototype.$shepherd.defaultConfig 挂载出去的，外部也可以直接修改。


## 快速使用




### 开发

```bash
# 启动开发环境
yarn dev

# 启动打包项目
yarn build

# 启动打包组件
yarn build:lib
```

