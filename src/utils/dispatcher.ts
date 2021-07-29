class CustomDispatcher extends egret.EventDispatcher {

  public static OVER: string = "gameover";
  public static STOP: string = "gamestop";
  public static START: string = "gamestart";
  public static CONTINUE: string = "continue";

  constructor() {
    super()
  }

  public gameOver(): void {
    this.dispatchEventWith(CustomDispatcher.OVER);
  }

  public startGame(): void {
    this.dispatchEventWith(CustomDispatcher.START);
  }

  public gameStop(): void {
    this.dispatchEventWith(CustomDispatcher.STOP);
  }

  public gamecontinue(): void {
    this.dispatchEventWith(CustomDispatcher.CONTINUE);
  }
}