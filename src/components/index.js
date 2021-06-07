import Shepherd from 'shepherd.js'

import './driver.less'

// 设置初始化参数
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

const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  Vue.prototype.$shepherd = (args = {}) => {
    // 设置初始化参数
    const props = {
      ...defaultConfig,
      ...args
    }
    return new Shepherd.Tour(props)
  }
  // 将默认配置挂上去
  Vue.prototype.$shepherd.defaultConfig = defaultConfig
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
