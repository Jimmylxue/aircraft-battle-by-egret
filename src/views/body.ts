class Body extends egret.Sprite {
	private dispatcher: CustomDispatcher
	private store: Store

	private fnc: Fnc = new Fnc()

	private hero: egret.Bitmap

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
		this.initHero()
	}

	private initHero() {
		// if(this.hero){
		// 	console.log('有飞机了')
		// 	this.removeChild(this.hero)
		// }
		this.hero = this.fnc.createBitmapByName('hero_png')
		this.hero.width = 150
		this.hero.height = 100
		this.hero.x = egret.MainContext.instance.stage.stageWidth / 2
		this.hero.y =
			egret.MainContext.instance.stage.stageHeight + this.hero.height / 2

			this.addChild(this.hero)
		
		// if(!this.hero){
		// 	this.addChild(this.hero)
		// }
		this.hero.touchEnabled = true
		// 这两行非常的重要，等于将这个元素的锚点设置到这个元素的正中心
		this.hero.anchorOffsetX = this.hero.width / 2
		this.hero.anchorOffsetY = this.hero.height / 2
		this.hero.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveHero, this)
		this.store.hero = this.hero
		let bullet = new Bullet(this.dispatcher, this.store, this.hero)
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
	}

	private stopGame(): void {}

	private continueGame(): void {}

	private gameOver(): void {
		console.log('主机 -- 销毁主机')
		this.fnc.blast(this.hero, this, 'hero')
		this.removeChild(this.hero)
		this.store.clearScore() // 清空得分数据
		// this.removeChildren()
		
	}

	private restar(): void {
		console.log('重新开始 -- 创建战机')
		// this.initHero()  卡了很久 清除掉其实没有必要重新创建再加入 这样会造成实际上有很多个主机
		this.hero.x = egret.MainContext.instance.stage.stageWidth / 2
		this.hero.y =
			egret.MainContext.instance.stage.stageHeight + this.hero.height / 2
		this.addChild(this.hero)
		this.startGame()
	}
}
