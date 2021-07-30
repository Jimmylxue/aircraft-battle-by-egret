// 继承一个派生类之后才可以 使用 this.addChild() 往canvas中画元素
class Bg extends egret.Sprite {
  private dispatcher: CustomDispatcher

  private fnc: Fnc = new Fnc()

  private sky: egret.Bitmap[] = []

  private speed_bg: number = 10

  private startTimer: egret.Timer = new egret.Timer(18)

  constructor(dispatcher: CustomDispatcher) {
    super()
    this.dispatcher = dispatcher
    if (dispatcher) {
      this.dispatcher.addEventListener(CustomDispatcher.START, this.startGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.STOP, this.stopGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, this.continueGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.OVER, this.gameOver, this)
      this.dispatcher.addEventListener(CustomDispatcher.RESTAR, this.restat, this)
    }
    this.initBg()
  }

  private initBg(): void {
    for (let i = 0; i < 2; i++) {
      this.sky[i] = this.fnc.createBitmapByName("bg_jpg");
      this.sky[i].width = egret.MainContext.instance.stage.stageWidth;
      this.sky[i].height = egret.MainContext.instance.stage.stageHeight;
    }
    this.addChild(this.sky[0])
    this.addChild(this.sky[1])

    this.sky[1].y = -egret.MainContext.instance.stage.stageHeight;

    this.startTimer.addEventListener(egret.TimerEvent.TIMER, () => {
      this.moveBg(this.sky, this.speed_bg)
    }, this)
  }

  private moveBg(obj: egret.Bitmap[], speed): void {
    obj.forEach((item, index) => {
      item.y += this.speed_bg
      if (item.y > item.height - this.speed_bg - 5) {
        item.y = -item.height
      }
    })
  }

  private startGame(): void {
    this.startTimer.start()
  }

  private stopGame():void{
    this.startTimer.stop()
  }

  private continueGame():void{
    this.startTimer.start()
  }

  private gameOver():void{
    this.startTimer.stop()
  }

  private restat():void{
    this.startTimer.reset()
    this.startTimer.start()
    // this.removeChildren()
  }
}
