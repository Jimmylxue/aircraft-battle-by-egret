//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

	private dispatcher: CustomDispatcher = new CustomDispatcher()

	private store: Store = new Store()

	private star: Star // 开始前的自定义界面

	private setting: Setting

	

	protected createChildren(): void {
		super.createChildren()

		egret.lifecycle.addLifecycleListener(context => {
			// custom lifecycle plugin
		})

		egret.lifecycle.onPause = () => {
			egret.ticker.pause()
		}

		egret.lifecycle.onResume = () => {
			egret.ticker.resume()
		}

		//inject the custom material parser
		//注入自定义的素材解析器
		let assetAdapter = new AssetAdapter()
		egret.registerImplementation('eui.IAssetAdapter', assetAdapter)
		egret.registerImplementation('eui.IThemeAdapter', new ThemeAdapter())

		this.runGame().catch(e => {
			console.log(e)
		})
	}

	private async runGame() {
		await this.loadResource()
		this.createGameScene()
		// const result = await RES.getResAsync("description_json")
		// this.startAnimation(result);
		await platform.login()
		const userInfo = await platform.getUserInfo()
		console.log(userInfo)
	}

	private async loadResource() {
		try {
			await RES.loadConfig('resource/default.res.json', 'resource/')
			console.log('加载成功')
			const loadingView = new LoadingUI()
			this.stage.addChild(loadingView)

			await this.loadTheme()
			await RES.loadGroup('preload', 0, loadingView)
			this.stage.removeChild(loadingView)
		} catch (e) {
			console.error(e)
		}
	}

	private loadTheme() {
		return new Promise((resolve, reject) => {
			// load skin theme configuration file, you can manually modify the file. And replace the default skin.
			//加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
			let theme = new eui.Theme('resource/default.thm.json', this.stage)
			theme.addEventListener(
				eui.UIEvent.COMPLETE,
				() => {
					resolve()
				},
				this
			)
		})
	}

	private textfield: egret.TextField
	/**
	 * 创建场景界面
	 * Create scene interface
	 */
	protected createGameScene(): void {
		this.dispatcher.addEventListener(CustomDispatcher.STOP, this.stopGame, this)
		let sound: egret.Sound = RES.getRes('bgm_mp3')
		this.store.setBgm(sound)
		this.store.toggleBgm(1)
		let bg = new Bg(this.dispatcher)
		this.addChild(bg)

		let btn = new Btn(this.dispatcher, this.store)
		this.addChild(btn)

		let hero = new Body(this.dispatcher, this.store)
		this.addChild(hero)

		let enemy = new Enemy(this.store)
		this.addChild(enemy)

		this.star = new Star()
		// 细节：一定要先加入到舞台之后才可以访问它的一些内部元素
		this.addChild(this.star)
		let tw = egret.Tween.get(this.star.startBtn, { loop: true })
		this.startAnimation(tw)
		this.star.addEventListener(egret.TouchEvent.TOUCH_TAP, this.starGame, this)
	}

	private startAnimation(tw): void {
		let change = () => {
			tw.to({ alpha: 0 }, 1000)
			tw.to({ alpha: 1 }, 1000)
		}
		change()
	}

	private starGame(): void {
		egret.Tween.removeAllTweens()

		let tws = egret.Tween.get(this.star.startBtn, { loop: true })
		tws.to({ alpha: 0 }, 200)
		tws.to({ alpha: 1 }, 200)
		setTimeout(() => {
			egret.Tween.removeAllTweens()
			this.dispatcher.startGame()
			if(this.$children.indexOf(this.star) !== -1){
				this.removeChild(this.star)
			}
		}, 1200)
	}

	private stopGame(): void {
		this.setting = new Setting()
		this.setting.width = 500
		this.setting.height = 365
		this.setting.x =
			egret.MainContext.instance.stage.stageWidth / 2 - this.setting.width / 2
		this.setting.y =
			egret.MainContext.instance.stage.stageHeight / 2 - this.setting.height / 2
		this.addChild(this.setting)
		if(this.store.bgmStatus){
			// 在播放
			this.setting.music_open.visible = false
			this.setting.music_close.visible = true
		}else{
			// 未播放
			this.setting.music_open.visible = true
			this.setting.music_close.visible = false
		}
		this.setting.close_btn.addEventListener(
			egret.TouchEvent.TOUCH_TAP,
			() => {
				console.log(1111)
				this.dispatcher.gamecontinue()
				this.removeChild(this.setting)
			},
			this
		)
		this.setting.startBtn.addEventListener(
			egret.TouchEvent.TOUCH_TAP,
			() => {
				console.log(222)
				this.dispatcher.gamecontinue()
				this.removeChild(this.setting)
			},
			this
		)
		this.setting.music_close.addEventListener(
			egret.TouchEvent.TOUCH_TAP,
			() => {
				console.log('关闭音效')
				this.setting.music_open.visible = true
				this.setting.music_close.visible = false
				this.store.toggleBgm(0)
			},
			this
		)
		this.setting.music_open.addEventListener(
			egret.TouchEvent.TOUCH_TAP,
			() => {
				console.log('开启音效')
				this.setting.music_open.visible = false
				this.setting.music_close.visible = true
				this.store.toggleBgm(1)
			},
			this
		)
	}
}
