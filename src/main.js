requirejs.config({
  baseUrl: './libs',
  paths: {
    modules: '../modules',
    configs: '../configs'
  }
})

requirejs(['domReady'], function (dom) {
  requirejs(['modules/robert'], function (Rob) {
    const rob = new Rob('James')
    rob.sayHi()
  })
})
