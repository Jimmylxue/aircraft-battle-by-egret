interface EmemyStyle{
	hasCollision: boolean;
	value:egret.Bitmap
}

class Enemy extends egret.Sprite{
  private fnc: Fnc = new Fnc()
  private dispatcher: CustomDispatcher
  private store: Store


  private timer_enemy:egret.Timer = new egret.Timer(1000)
  
  private speed_enemy = 15

  constructor(dispatcher: CustomDispatcher, store: Store){
    super()
    this.dispatcher = dispatcher
    this.store = store
    this.store.that = this
    if (dispatcher) {
      this.dispatcher.addEventListener(CustomDispatcher.START, this.startGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.STOP, this.stopGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, this.continueGame, this)
    }  

    this.initEnemy()
  }

  private initEnemy():void{
    this.timer_enemy.addEventListener(egret.TimerEvent.TIMER,()=>{
      if(this.store.status === Store.STOP){
        this.timer_enemy.stop()
        return
      }
      this.createEnemy()
    },this)
  }

  private createEnemy():void{
    let enemy = this.fnc.createBitmapByName('enemy_png')
    enemy.width=100
    enemy.height = 100
    let x = Math.floor(Math.random()*(this.stage.stageWidth - enemy.width))
    // enemy.x = 10
    enemy.x = x
    enemy.y = 0
    this.store.addEnemy(enemy)
    this.addChild(enemy)
    this.moveEnemy(this.store.enemyList[this.store.enemyList.indexOf(enemy)])
  }

  private moveEnemy(enemy:egret.Bitmap):void{
    let timer = new egret.Timer(18)
    timer.addEventListener(egret.TimerEvent.TIMER,()=>{
      enemy.y+=this.speed_enemy
      if(enemy.y>=egret.MainContext.instance.stage.stageHeight){
        timer.stop()
        // 这里可优化
        console.log('暂停飞机飞行的定时器',this.store.enemyList)
      }
    },this)
    timer.start()
  }

  private startGame(): void {
    // console.log('jixu')
    this.timer_enemy.start()
  }

  private stopGame(): void {
  }

  private continueGame(): void {
  }
}