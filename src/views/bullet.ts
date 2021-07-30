class Bullet extends egret.Sprite{
  private fnc: Fnc = new Fnc()
  private dispatcher: CustomDispatcher
  private store: Store
  private hero:egret.Bitmap

  private timer_launch:egret.Timer = new egret.Timer(500)

  private speed_launch:number = 10 // 子弹的射速

  private boomMusic = null

  private bulletMusic = null

  constructor(dispatcher: CustomDispatcher, store: Store,hero:egret.Bitmap){
    super()
    this.dispatcher = dispatcher
    this.store = store
    this.hero = hero
    if (dispatcher) {
      this.dispatcher.addEventListener(CustomDispatcher.START, this.startGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.STOP, this.stopGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, this.continueGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.OVER, this.gameOver, this)
      this.dispatcher.addEventListener(CustomDispatcher.RESTAR, this.restar, this)
    }
    this.boomMusic = RES.getRes("boom_mp3");
    this.bulletMusic = RES.getRes("bullet_mp3");
    this.init_launch()
  }

  private init_launch():void{

    this.timer_launch.addEventListener(egret.TimerEvent.TIMER,()=>{
      console.log('qqq')
      if(this.store.status === Store.STOP){
        this.timer_launch.stop()
        return
      }
      this.createBullet()
      let channel = this.bulletMusic.play(0,1)
      setTimeout(() => {
        channel.stop()
      }, 500);
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
    console.log('move')
    // 发射出去 -- 这里可能有个优化点 创建了太多的 timer 了  不知道是不是可以使用 setInterval 来做
    let timer = new egret.Timer(1)
    timer.addEventListener(egret.TimerEvent.TIMER,()=>{
      
      if(this.store.status === Store.STOP){
        return
      }
      if(this.store.status === Store.OVER){
        // return
        timer.stop()
      }
      bullet.y -= this.speed_launch

      this.store.enemyList.some(enemy=>{
        let rect1:egret.Rectangle = bullet.getBounds()
        let rect2:egret.Rectangle = enemy.value.getBounds()
        rect1.x = bullet.x
        rect1.y = bullet.y
        rect2.x = enemy.value.x
        rect2.y = enemy.value.y
        if(rect1.intersects(rect2)){
          // 子弹打中就可以停了
          console.log('打中了')
          this.store.addScore()
          this.fnc.blast(enemy.value,this)
          let channel = this.boomMusic.play(0,1)
          setTimeout(() => {
            channel.stop()
          }, 500);
          this.removeChild(bullet)
          this.store.that.removeChild(enemy.value)
          enemy.timer.stop()
          this.store.outEnemy(enemy)
          timer.stop()
          return true
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

  private gameOver():void{
    this.timer_launch.stop()
  }

  private restar():void{
    this.removeChildren()
    this.store.restar()
    this.hero = this.store.hero
    this.timer_launch.start()
  }
}