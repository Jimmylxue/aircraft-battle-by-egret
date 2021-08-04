// 继承一个派生类之后才可以 使用 this.addChild() 往canvas中画元素
class Btn extends egret.Sprite {
	private dispatcher: CustomDispatcher
	private store: Store
	private fnc: Fnc = new Fnc()
	private stop: egret.Bitmap

	private lifeArr: egret.Bitmap[] = []

	private nowLift: number = 3 // 剩余生命

	constructor(dispatcher, store: Store) {
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
				CustomDispatcher.BLOOD,
				this.buckleBlood,
				this
			)
			this.dispatcher.addEventListener(
				CustomDispatcher.RESTAR,
				this.reStar,
				this
			)
		}

		this.init()
		this.initLift() // 初始化生命
	}

	private init(): void {

		this.stop = this.fnc.createBitmapByName('stop_png')
		this.stop.width = 60
		this.stop.height = 60
		this.stop.x =
			egret.MainContext.instance.stage.stageWidth - this.stop.width - 10
		this.stop.y = 10
		this.stop.visible = false
		this.stop.touchEnabled = true
		this.addChild(this.stop)

		this.stop.addEventListener(
			egret.TouchEvent.TOUCH_TAP,
			() => {
				this.dispatcher.gameStop()
			},
			this
		)
	}

	private initLift(): void {
		for (let i = 0; i < this.nowLift; i++) {
			let lift = this.fnc.createBitmapByName('life_png')
			lift.width = 40
			lift.height = 40
			lift.y = 10
			lift.x = i * lift.width + 10
			lift.visible = false
			this.lifeArr.push(lift)
			console.log(lift)
			this.addChild(lift)
		}
	}

	private startGame(): void {
		this.stop.visible = true
		this.lifeArr.forEach((lift,index) => index<this.nowLift?lift.visible = true:'')
		this.store.start()
	}

	private stopGame(): void {
		// 暂停游戏
		this.stop.visible = false
		this.store.stop()
	}

	private continueGame(): void {
		// 继续游戏
		this.stop.visible = true
		this.store.start()
		this.dispatcher.startGame()
	}

	private buckleBlood(): void {
		// 扣血
		this.nowLift--
		if (this.nowLift === 0) {
			console.log('触发游戏结束')
			this.dispatcher.gameOver()
			this.store.over()
		}
		this.lifeArr.forEach((item, index) =>
			index + 1 <= this.nowLift ? '' : (item.visible = false)
		)
	}

	private reStar() {
		this.nowLift = 3
		this.lifeArr.forEach(item => (item.visible = true))
	}
}
