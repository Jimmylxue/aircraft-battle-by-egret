

class Enemy extends egret.Sprite{
  private fnc: Fnc = new Fnc()
  private dispatcher: CustomDispatcher
  private store: Store


  private timer_enemy:egret.Timer = new egret.Timer(1000)
  
  private speed_enemy = 15

  private boomMusic = null

  constructor(dispatcher: CustomDispatcher, store: Store){
    super()
    this.dispatcher = dispatcher
    this.store = store
    this.store.that = this
    if (dispatcher) {
      this.dispatcher.addEventListener(CustomDispatcher.START, this.startGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.STOP, this.stopGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.CONTINUE, this.continueGame, this)
      this.dispatcher.addEventListener(CustomDispatcher.OVER, this.gameOver, this)
      this.dispatcher.addEventListener(CustomDispatcher.RESTAR, this.restar, this)
    }  
    this.boomMusic = RES.getRes("boom_mp3");
    this.initEnemy()
    // this.timer_enemy.start()

    
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
    // enemy.x = 120
    enemy.x = x
    enemy.y = 0
    
    this.addChild(enemy)
    // this.moveEnemy(this.store.enemyList[this.store.enemyList.indexOf(enemy)])
    this.moveEnemy(enemy)
  }

  private moveEnemy(enemy:egret.Bitmap):void{
    let timer = new egret.Timer(18)
    let obj = {
      timer:timer,
      value:enemy
    }
    this.store.addEnemy(obj)
    console.log('xxx',this.store.enemyList)
    // this.store.enemyRemove = this.enemyFly.bind(this, enemy);
    // enemy.addEventListener(egret.Event.ENTER_FRAME,this.enemyFly.bind(this,enemy,1),this)
    // enemy.addEventListener(egret.Event.ENTER_FRAME,this.store.enemyRemove,this)
    // enemy.removeEventListener(egret.Event.ENTER_FRAME,this.enemyFly.bind(this,enemy,2),this)

    // setTimeout(() => {
    //   console.log('到时间了')
    //   // enemy.removeEventListener(egret.Event.ENTER_FRAME,this.enemyFly.bind(this,enemy),this)
    //   enemy.removeEventListener(egret.Event.ENTER_FRAME,this.store.enemyRemove,this)
    // }, 500);

    // enemy.addEventListener(egret.Event.ENTER_FRAME,()=>{
    //   enemy.y+=this.speed_enemy
    //   let rect1:egret.Rectangle = enemy.getBounds()
    //   let rect2:egret.Rectangle = this.store.hero.getBounds()
    //   rect1.x = enemy.x
    //   rect1.y = enemy.y
    //   rect2.x = this.store.hero.x-this.store.hero.width/2
    //   rect2.y = this.store.hero.y
    //   if(rect1.intersects(rect2)){
    //     // 主角战机被撞到 游戏结束
    //     if(this.store.enemyList.indexOf(obj)!==-1){
    //       // alert('飞机相撞了')
    //       console.log('飞机装了')
    //       this.fnc.blood(enemy,this,'hero')
    //       let channel = this.boomMusic.play(0,1)
    //       setTimeout(() => {
    //         channel.stop()
    //       }, 500);
    //       this.dispatcher.buckleBliid()
    //       this.store.outEnemy(obj)
    //       this.removeChild(obj.value)
    //       timer.stop()
    //     }
    //   }
    //   if(enemy.y>=egret.MainContext.instance.stage.stageHeight){
    //     timer.stop()
    //     // 这里可优化
    //     this.store.enemyList.splice(this.store.enemyList.indexOf(obj),1) // 有问题看这里
    //     console.log('暂停飞机飞行的定时器',this.store.enemyList)
    //   }
    // },this)
    timer.addEventListener(egret.TimerEvent.TIMER,()=>{
      enemy.y+=this.speed_enemy
      let rect1:egret.Rectangle = enemy.getBounds()
      let rect2:egret.Rectangle = this.store.hero.getBounds()
      rect1.x = enemy.x
      rect1.y = enemy.y
      rect2.x = this.store.hero.x-this.store.hero.width/2
      rect2.y = this.store.hero.y
      if(rect1.intersects(rect2)){
        // 主角战机被撞到 游戏结束
        if(this.store.enemyList.indexOf(obj)!==-1){
          // alert('飞机相撞了')
          console.log('飞机装了')
          this.fnc.blood(enemy,this,'hero')
          let channel = this.boomMusic.play(0,1)
          setTimeout(() => {
            channel.stop()
          }, 500);
          this.dispatcher.buckleBliid()
          this.store.outEnemy(obj)
          this.removeChild(obj.value)
          timer.stop()
        }
      }
      if(enemy.y>=egret.MainContext.instance.stage.stageHeight){
        timer.stop()
        // 这里可优化
        this.store.enemyList.splice(this.store.enemyList.indexOf(obj),1) // 有问题看这里
        console.log('暂停飞机飞行的定时器',this.store.enemyList)
      }
    },this)
    timer.start()
  }

  public enemyFly(enemy){
    console.log(enemy)
    // console.log('this',this)
    // console.log('obj',enemy)
    enemy.y+=this.speed_enemy
    let rect1:egret.Rectangle = this.getBounds()
    let rect2:egret.Rectangle = this.store.hero.getBounds()
    rect1.x = enemy.x
    rect1.y = enemy.y
    rect2.x = this.store.hero.x-this.store.hero.width/2
    rect2.y = this.store.hero.y
      // if(rect1.intersects(rect2)){
      //   // 主角战机被撞到 游戏结束
      //   if(this.store.enemyList.indexOf(this)!==-1){
      //     // alert('飞机相撞了')
      //     console.log('飞机装了')
      //     this.fnc.blood(enemy,this,'hero')
      //     let channel = this.boomMusic.play(0,1)
      //     setTimeout(() => {
      //       channel.stop()
      //     }, 500);
      //     this.dispatcher.buckleBliid()
      //     this.store.outEnemy(obj)
      //     this.removeChild(obj.value)
      //     timer.stop()
      //   }
      // }
      // if(enemy.y>=egret.MainContext.instance.stage.stageHeight){
      //   timer.stop()
      //   // 这里可优化
      //   this.store.enemyList.splice(this.store.enemyList.indexOf(obj),1) // 有问题看这里
      //   console.log('暂停飞机飞行的定时器',this.store.enemyList)
      // }
  }

  private startGame(): void {
    this.timer_enemy.start()
  }

  private stopGame(): void {
    // this.store.enemyList.forEach(item=>item.removeEventListener(egret.Event.ENTER_FRAME,this.store.enemyRemove,this))
    this.store.enemyList.forEach(item=>item.timer.stop(),this)
  }

  private continueGame(): void {
    this.store.enemyList.forEach(item=>item.timer.stop(),this)
  }

  private gameOver():void{
    this.timer_enemy.stop()
    this.store.enemyList.forEach(item=>item.timer.stop(),this)
  }

  private restar():void{
    this.removeChildren()
    this.timer_enemy.start()
  }
}