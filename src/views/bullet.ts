class Bullet extends egret.Sprite {
	private fnc: Fnc = new Fnc()
	private store: Store
	private hero: egret.Bitmap
	private bulletMusic = null

	constructor(store: Store, hero: egret.Bitmap) {
		super()
		console.log('创建子弹')
		this.store = store
		this.hero = hero
		this.bulletMusic = RES.getRes('bullet_mp3')
		this.init_launch()
	}

	private init_launch(): void {
		this.store.that_bullet = this
		this.store.timer_launch.addEventListener(
			egret.TimerEvent.TIMER,
			() => {
				if (this.store.status === Store.STOP) {
					this.store.timer_launch.stop()
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
		this.store.addBullet(bullet)
	}

}
