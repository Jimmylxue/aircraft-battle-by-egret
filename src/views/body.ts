class Body extends egret.Sprite {
	private dispatcher: CustomDispatcher
	private store: Store

	private fnc: Fnc = new Fnc()

	private hero: egret.Bitmap

	private boomMusic = null

	private speed_enemy = 10 // 飞机飞行的速度
	private speed_launch: number = 15 // 子弹的射速

	constructor(dispatcher: CustomDispatcher, store: Store) {
		super()
		this.dispatcher = dispatcher
		this.store = store
		if (dispatcher) {
			this.dispatcher.addEventListener(
				CustomDispatcher.START,
				this.startGame,
				this
			)
			this.dispatcher.addEventListener(
				CustomDispatcher.STOP,
				this.stopGame,
				this
			)
			this.dispatcher.addEventListener(
				CustomDispatcher.CONTINUE,
				this.continueGame,
				this
			)
			this.dispatcher.addEventListener(
				CustomDispatcher.OVER,
				this.gameOver,
				this
			)
			this.dispatcher.addEventListener(
				CustomDispatcher.RESTAR,
				this.restar,
				this
			)
		}
		this.boomMusic = RES.getRes("boom_mp3");
		this.initHero()
	}

	private initHero() {
		this.hero = this.fnc.createBitmapByName('hero_png')
		this.hero.width = 150
		this.hero.height = 100
		this.hero.x = egret.MainContext.instance.stage.stageWidth / 2
		this.hero.y =
			egret.MainContext.instance.stage.stageHeight + this.hero.height / 2
		this.addChild(this.hero)
		this.hero.touchEnabled = true
		// 这两行非常的重要，等于将这个元素的锚点设置到这个元素的正中心
		this.hero.anchorOffsetX = this.hero.width / 2
		this.hero.anchorOffsetY = this.hero.height / 2
		this.hero.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveHero, this)
		this.store.hero = this.hero
		let bullet = new Bullet(this.store, this.hero)
		this.addChild(bullet)
	}

	private moveHero(e): void {
		if (this.store.status === Store.STOP) {
			return
		}
		// 移动飞机
		this.hero.x = e.stageX
		this.hero.y = e.stageY
	}

	private startGame(): void {
		egret.Tween.get(this.hero).to(
			{ y: egret.MainContext.instance.stage.stageHeight - 200 },
			200
		)
		this.addEventListener(egret.Event.ENTER_FRAME,this.checkCollision,this)
		this.store.timer_launch.start()
		this.store.timer_enemy.start()
	}

	private checkCollision(){
		this.store.enemyList.forEach(enemy=>{
			enemy.y+=this.speed_enemy
			let rect1:egret.Rectangle = enemy.getBounds()
			let rect2:egret.Rectangle = this.store.hero.getBounds()
			rect1.x = enemy.x
			rect1.y = enemy.y
			rect2.x = this.store.hero.x-this.store.hero.width/2
			rect2.y = this.store.hero.y
			if(rect1.intersects(rect2)){
        // 主角战机被撞到 游戏结束
        if(this.store.enemyList.indexOf(enemy)!==-1){
          console.log('飞机相撞了')
					let channel = this.boomMusic.play(0, 1)
						setTimeout(() => {
							channel.stop()
						}, 500)
          this.fnc.blood(enemy,this,'hero')
          this.dispatcher.buckleBliid()
          this.store.outEnemy(enemy)
					if(this.store.that.$children.indexOf(enemy)!=-1){
						this.store.that.removeChild(enemy)
					}
        }
				return
      }
      if(enemy.y>=egret.MainContext.instance.stage.stageHeight){
        this.store.enemyList.splice(this.store.enemyList.indexOf(enemy),1) // 有问题看这里
      }
		})
		this.store.bulletList.forEach(bullet=>{
			bullet.y-=this.speed_launch

			this.store.enemyList.some(enemy => {
				let rect1: egret.Rectangle = bullet.getBounds()
					let rect2: egret.Rectangle = enemy.getBounds()
					rect1.x = bullet.x
					rect1.y = bullet.y
					rect2.x = enemy.x
					rect2.y = enemy.y
					if (rect1.intersects(rect2)) {
						// 子弹打中就可以停了
						console.log('打中了')
						this.store.addScore()
						this.fnc.blast(enemy, this)
						// 优化点
						let channel = this.boomMusic.play(0, 1)
						setTimeout(() => {
							channel.stop()
						}, 500)
						if(this.store.that_bullet.$children.indexOf(bullet)!=-1){
							console.log('存在2')
							this.store.that_bullet.removeChild(bullet)
							this.store.outBullet(bullet)
							this.store.that.removeChild(enemy)
						}
						this.store.outEnemy(enemy)
						
						return true
					}
				})

			if(bullet.y <= 100){
				if(this.store.that_bullet.$children.indexOf(bullet)!=-1){
					this.store.that_bullet.removeChild(bullet)
					this.store.outBullet(bullet)
				}
			}
		})
	}

	private stopGame(): void {
		console.log('游戏暂停了')
		this.removeEventListener(egret.Event.ENTER_FRAME,this.checkCollision,this)
		this.store.timer_enemy.stop()
		this.store.timer_launch.stop()

	}

	private continueGame(): void {
		console.log('游戏继续了')
		this.addEventListener(egret.Event.ENTER_FRAME,this.checkCollision,this)
	}

	private gameOver(): void {
		console.log('主机 -- 销毁主机')
		this.removeEventListener(egret.Event.ENTER_FRAME,this.checkCollision,this)
		this.fnc.blast(this.hero, this, 'hero')
		this.removeChild(this.hero)
		this.store.enemyList.forEach(enemy=>{
			if(this.store.that.$children.indexOf(enemy)!=-1){
				this.store.that.removeChild(enemy)
			}
		})
		this.store.enemyList = []
		this.store.bulletList.forEach(bullet=>{
			if(this.store.that_bullet.$children.indexOf(bullet)!=-1){
				this.store.that_bullet.removeChild(bullet)
			}
		})
		this.store.bulletList = []
		this.store.clearScore() // 清空得分数据
		this.store.timer_launch.stop()
		this.store.timer_enemy.stop()
	}

	private restar(): void {
		console.log('重新开始 -- 创建战机')
		this.hero.x = egret.MainContext.instance.stage.stageWidth / 2
		this.hero.y =
			egret.MainContext.instance.stage.stageHeight + this.hero.height / 2
		this.addChild(this.hero)
		this.startGame()
		this.store.timer_enemy.start()
		this.store.timer_launch.start()
	}
}
