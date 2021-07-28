// 继承一个派生类之后才可以 使用 this.addChild() 往canvas中画元素
class Btn extends egret.Sprite {
  private dispatcher: CustomDispatcher
  private fnc: Fnc = new Fnc()

  private btn: eui.Button
  private go: egret.Bitmap
  private stop: egret.Bitmap

  constructor(dispatcher) {

    super()

    this.dispatcher = dispatcher
    if (dispatcher) {
      this.dispatcher.addEventListener(CustomDispatcher.START, this.startGame, this)
      // this.dispatcher.addEventListener(CustomDispatcher.OVER, this.gameOver, this)
    }

    this.init()
  }

  private init(): void {
    this.btn = new eui.Button()
    this.btn.label = '开始游戏'
    // console.log(egret.MainContext.instance.stage.stageWidth / 2, this.btn, this.btn.width)
    this.btn.x = egret.MainContext.instance.stage.stageWidth / 2 - 100 / 2
    this.btn.y = egret.MainContext.instance.stage.stageHeight / 2
    this.addChild(this.btn)

    this.go = this.fnc.createBitmapByName('go_png')
    this.go.width = 60
    this.go.height = 60
    this.go.x = egret.MainContext.instance.stage.stageWidth - this.go.width - 10
    this.go.y = 10
    this.go.visible = false
    this.addChild(this.go)

    this.stop = this.fnc.createBitmapByName('stop_png')
    this.stop.width = 60
    this.stop.height = 60
    this.stop.x = egret.MainContext.instance.stage.stageWidth - this.stop.width - 10
    this.stop.y = 10
    this.stop.visible = false
    this.addChild(this.stop)
    // this.go.visible = false
  }

  private startGame(): void {
    this.btn.visible = false // 隐藏
  }
}
