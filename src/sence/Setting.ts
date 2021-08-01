class Setting extends eui.Component implements eui.UIComponent {
	public music_close: eui.Image
	public music_open: eui.Image
	public close_btn: eui.Image
	public startBtn: eui.Image

	public constructor() {
		super()
		console.log('laile ')
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance)
	}

	protected childrenCreated(): void {
		super.childrenCreated()
	}
}
