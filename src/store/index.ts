interface EmemyStyle {
	timer: egret.Timer
	value: egret.Bitmap
}

class Store {
	static PENDING: string = 'pending'
	static STAR: string = 'star'
	static STOP: string = 'stop'
	static OVER: string = 'over'

	public enemyList:EmemyStyle[] = []

	public status: string

	public that = null // 存放 创建敌机的 this  因为只有创建敌机的 this 可以调用 removeChild 方法

	public hero: egret.Bitmap

	private score: number = 0

	private bgm: egret.Sound
	private channel: egret.SoundChannel

	public enemyRemove

	constructor() {
		this.status = Store.PENDING //
		// this.bgm.play()
	}

	public start(): void {
		if (this.status === Store.PENDING || this.status === Store.STOP) {
			this.status = Store.STAR
		}
	}

	public stop(): void {
		if (this.status === Store.STAR) {
			this.status = Store.STOP
		}
	}

	public over(): void {
		if (this.status === Store.STAR) {
			this.status = Store.OVER
		}
	}

	public restar(): void {
		if (this.status === Store.OVER) {
			this.status = Store.STAR
		}
	}

	// addEnemy(enemy:egret.Bitmap){
	public addEnemy(enemy:EmemyStyle) {
		this.enemyList.push(enemy)
	}

	// outEnemy(enemy:egret.Bitmap){
	public outEnemy(enemy: EmemyStyle) {
		this.enemyList.splice(this.enemyList.indexOf(enemy), 1)
	}

	public getScore(): number {
		return this.score
	}

	public addScore(): void {
		this.score++
	}

	public clearScore(){
		this.score = 0
	}

	public setBgm(demo: egret.Sound) {
		this.bgm = demo
		// this.channel = this.bgm.play()
	}

	public toggleBgm(flag: number) {
		if (flag === 1) {
			this.channel = this.bgm.play()
			return
		} else if (flag === 0) {
			this.channel.stop()
		}
	}
}
