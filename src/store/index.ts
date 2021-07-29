

class Store {
	static PENDING: string = 'pending'
	static STAR: string = 'star'
	static STOP: string = 'stop'
	static OVER: string = 'over'

	public enemyList:egret.Bitmap[] = []

	public status: string

	public that = null

	constructor() {
		this.status = Store.PENDING //

	}

	start(): void {
		if (this.status === Store.PENDING||this.status === Store.STOP) {
			this.status = Store.STAR
		}
	}

	stop(): void {
		if (this.status === Store.STAR) {
			this.status = Store.STOP
		}
	}

	over(): void {
		if (this.status === Store.STAR) {
			this.status = Store.OVER
		}
	}


	addEnemy(enemy:egret.Bitmap){
		this.enemyList.push(enemy)
	}

	outEnemy(enemy:egret.Bitmap){
		// if(this.that.$children.indexOf(enemy)!=-1){
		// this.that.removeChild(enemy)

		// }
		// console.log(this.that.$children)
		// console.log(this.that)
		this.enemyList.splice(this.enemyList.indexOf(enemy),1)
	}

	wanntRemove(enemy){
		if(this.that.$children.indexOf(enemy)!=-1){
			this.that.removeChild(enemy)
		}
	}
}
