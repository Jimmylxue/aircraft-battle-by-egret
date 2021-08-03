class Enemy extends egret.Sprite{
  private fnc: Fnc = new Fnc()
  private store: Store

  constructor(store: Store){
    super()
    this.store = store
    this.store.that = this
    this.initEnemy()
  }

  private initEnemy():void{
    this.store.timer_enemy.addEventListener(egret.TimerEvent.TIMER,()=>{
      if(this.store.status === Store.STOP){
        this.store.timer_enemy.stop()
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
    enemy.x = x
    enemy.y = 0
    this.addChild(enemy)
    this.store.addEnemy(enemy)
  }

}