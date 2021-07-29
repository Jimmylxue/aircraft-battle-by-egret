class Bullet extends egret.Sprite{
  private fnc: Fnc = new Fnc()
  private dispatcher: CustomDispatcher
  private store: Store
  private hero:egret.Bitmap

  private timer_launch:egret.Timer = new egret.Timer(200)

  private speed_launch:number = 10 // 子弹的射速

  constructor(dispatcher: CustomDispatcher, store: Store,hero:egret.Bitmap){
    super()
    this.dispatcher = dispatcher
    this.store = store
    this.hero = hero
    if (dispatcher) {
      this.dispatcher.addEventListener(CustomDispatcher.START, this.startGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.STOP, this.stopGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, this.continueGame, this)
    }
    
    this.init_launch()
  }

  private init_launch():void{

    this.timer_launch.addEventListener(egret.TimerEvent.TIMER,()=>{
      if(this.store.status === Store.STOP){
        this.timer_launch.stop()
        return
      }
      this.createBullet()
    },this)
  }

  private createBullet():void{
    let bullet = this.fnc.createBitmapByName('bullet_png')
    bullet.width = 20
    bullet.height = 20
    bullet.x = this.hero.x
    bullet.y = this.hero.y
    bullet.anchorOffsetX = bullet.width/2
    bullet.anchorOffsetY = 70
    this.addChild(bullet)
    
    this.moveBullet(bullet)
  }

  private moveBullet(bullet:egret.Bitmap):void{
    // 发射出去 -- 这里可能有个优化点 创建了太多的 timer 了  不知道是不是可以使用 setInterval 来做
    let timer = new egret.Timer(1)
    timer.addEventListener(egret.TimerEvent.TIMER,()=>{
      
      if(this.store.status === Store.STOP){
        return
      }
      bullet.y -= this.speed_launch

      this.store.enemyList.some(enemy=>{
        let rect1:egret.Rectangle = bullet.getBounds()
        let rect2:egret.Rectangle = enemy.getBounds()
        rect1.x = bullet.x
        rect1.y = bullet.y
        rect2.x = enemy.x
        rect2.y = enemy.y
        if(rect1.intersects(rect2)){
          // 子弹打中就可以停了
          console.log('打中了')
          this.removeChild(bullet)
          this.store.that.removeChild(enemy)
          this.store.outEnemy(enemy)
          
          
          timer.stop()
          return true
          // timer.stop()
        }
      })

      if(bullet.y<=20){
        console.log('暂停发射子弹的定时器')
        this.removeChild(bullet)
        timer.stop()
      }
    },this)
    timer.start()
  }

  private startGame(): void {
    console.log('jixu')
    this.timer_launch.start()
  }

  private stopGame(): void {
  }

  private continueGame(): void {
  }
}