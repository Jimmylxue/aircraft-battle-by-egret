class Bullet extends egret.Sprite {
	private fnc: Fnc = new Fnc()
	private dispatcher: CustomDispatcher
	private store: Store
	private hero: egret.Bitmap

	private timer_launch: egret.Timer = new egret.Timer(500)

	private speed_launch: number = 10 // 子弹的射速

	private boomMusic = null

	private bulletMusic = null

	constructor(dispatcher: CustomDispatcher, store: Store, hero: egret.Bitmap) {
		super()
		console.log('创建子弹')
		this.dispatcher = dispatcher
		this.store = store
		this.hero = hero
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
		this.boomMusic = RES.getRes('boom_mp3')
		this.bulletMusic = RES.getRes('bullet_mp3')
		this.init_launch()
	}

	private init_launch(): void {
		this.timer_launch.addEventListener(
			egret.TimerEvent.TIMER,
			() => {
				if (this.store.status === Store.STOP) {
					this.timer_launch.stop()
					return
				}
				this.createBullet()
				let channel = this.bulletMusic.play(0, 1)
				setTimeout(() => {
					channel.stop()
				}, 500)
			},
			this
		)
	}

	private createBullet(): void {
		let bullet = this.fnc.createBitmapByName('bullet_png')
		bullet.width = 20
		bullet.height = 20
		bullet.x = this.hero.x
		bullet.y = this.hero.y
		bullet.anchorOffsetX = bullet.width / 2
		bullet.anchorOffsetY = 70
		this.addChild(bullet)
		this.moveBullet(bullet)
	}

	private moveBullet(bullet: egret.Bitmap): void {
		// 发射出去 -- 这里可能有个优化点 创建了太多的 timer 了  不知道是不是可以使用 setInterval 来做
		let timer = new egret.Timer(1)
		timer.addEventListener(
			egret.TimerEvent.TIMER,
			() => {
				if (this.store.status === Store.STOP) {
					return
				}
				if (this.store.status === Store.OVER) {
					// return
					timer.stop()
				}
				bullet.y -= this.speed_launch

				this.store.enemyList.some(enemy => {
					let rect1: egret.Rectangle = bullet.getBounds()
					let rect2: egret.Rectangle = enemy.value.getBounds()
					rect1.x = bullet.x
					rect1.y = bullet.y
					rect2.x = enemy.value.x
					rect2.y = enemy.value.y
					if (rect1.intersects(rect2)) {
						// 子弹打中就可以停了
						console.log('打中了')
						this.store.addScore()
						this.fnc.blast(enemy.value, this)
						// 优化点
						let channel = this.boomMusic.play(0, 1)
						setTimeout(() => {
							channel.stop()
						}, 500)
						if(this.$children.indexOf(bullet)!=-1){
							console.log('存在2')
							this.removeChild(bullet)
							this.store.that.removeChild(enemy.value)
						}
						// this.removeChild(bullet)
						// this.store.that.removeChild(enemy.value)
						// this.store.enemyRemove = this.enemyFly.bind(this, enemy);
						// enemy.removeEventListener(egret.Event.ENTER_FRAME,this.store.enemyRemove,this)
						enemy.timer.stop()
						this.store.outEnemy(enemy)
						
						timer.stop()
						return true
					}
				})

				if (bullet.y <= -120) {
					// 飞机高度是 100 再另外加 20的安全距离
					console.log('暂停发射子弹的定时器')
					if(this.$children.indexOf(bullet)!=-1){
						console.log('存在')
						this.removeChild(bullet)
					}
					timer.stop()
				}
			},
			this
		)
		timer.start()
	}

	private startGame(): void {
		this.timer_launch.start()
	}

	private stopGame(): void {}

	private continueGame(): void {}

	private gameOver(): void {
		console.log('游戏结束了')
		this.timer_launch.stop()
	}

	private restar(): void {
		console.log('重新开始了')
		this.removeChildren()
		this.store.restar()
		this.hero = this.store.hero
		this.timer_launch.start()
	}
}
