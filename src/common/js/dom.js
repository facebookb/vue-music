/* 操作dom的方法 */
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

let elementStyle = document.createElement('div').style
console.log(elementStyle)
/* 创建一个div dom */
/* verdor即时函数 页面加载的时候立即执行
    * 1.自定义对象属性
    * 2.如果value值存在 返回key值
    * 3.否则返回false
    * */
/*
  *vendor 判定浏览器供应商
  * -webkit -moz -ms -o
  * -ms-transform:rotate(7deg); //-ms代表ie内核识别码
  * -moz-transform:rotate(7deg); //-moz代表火狐内核识别码
  * -webkit-transform:rotate(7deg); //-webkit代表谷歌内核识别码
  * -o-transform:rotate(7deg); //-o代表欧朋【opera】内核识别码
  * transform:rotate(7deg); //统一标识语句。。。最好这句话也写下去，符合w3c标准
  * */
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()
/*
  *返回三种情况
    * false
    * transform
    * 举例：传入的值为transitionDuration 返回webkitTransitionDuration
  * */
export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
  /*
   * webkit
   * */
}
