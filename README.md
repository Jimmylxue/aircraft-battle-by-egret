## egret 开发飞机大战

> egret 是一套完整的 HTML5 游戏开发解决方案，在开发的时候是采用 TypeScript 语言开发的。对于前端开发人员还是非常的友好的，毕竟 ts 是 js 的超集，尤其是在大学里有学习过 c#或者 java 的同学，上手一定会感到非常的亲切，很快就能够上手了。

之所以会做这个 demo 是因为公司老大给我下半年定的工作重心就是小游戏，所以 egret 对我来说是一个全新的领域，但是 egret 在网上资料都是很稀缺的，相当于是块荒凉之地，视频什么的基本都是很多年以前的远古版本。

点击[开始游戏]('http://1.116.204.114:669')开始玩耍飞机大战或访问http://1.116.204.114:669

这个项目的会开源出来，大家可以在[点击这里(飞机大战)](https://gitee.com/jimmyxuexue/egret-aircraft-war)，里面的代码大部分我也都有写注释。也希望有大佬能一起讨论一起进步。[我的博客]('http://1.116.204.114:666')

#### 前期准备

- 前期需要准备素材，就包括背景，敌机，飞机，音频。

- 几个最重要的 API

  > 这里我不会说所有的 api，只写几个最重要的 api。

  - `egret.Event.ENTER_FRAME`心跳事件，对象监听这个事件即可绑定处理函数，每次都会去执行，相当于是定时器的效果，但是这个 API 是 egret 通过`requestAnimationFrame`再次封装的，相对于定时器来说拥有更好的性能，在有需要动画的时候会以最流畅的帧率去刷新。所以一般情况能用这个就用这个。

    ```typescript
    this.addEventListener(
      egret.Event.ENTER_FRAME,
      () => {
        console.log("执行心跳事件");
      },
      this
    );
    ```

  - `egret.Timer`定时器。创建出定时器对象，绑定`egret.TimerEvent.TIMER`事件，使用定时器对象的`start()`、`stop()`方法

    ```typescript
    let propsTimer: egret.Timer = new egret.Timer(10000);
    propsTimer.addEventListener(
      egret.TimerEvent.TIMER,
      () => {
        console.log("执行了");
      },
      this
    );
    propsTimer.start();
    ```

  - `egret.EventDispatcher`事件派发

    > 这个极其的重要，我们可以自定义事件，一些元素监听这些自定义事件，当满足某些条件的时候触发自定义事件，元素就可以捕获到这个事件，从而做一个处理。

    ```typescript
    // 自定义事件对象类
    class CustomDispatcher extends egret.EventDispatcher {
      public static START: string = "gamestart";

      constructor() {
        super();
      }

      public startGame(): void {
        this.dispatchEventWith(CustomDispatcher.START);
      }
    }

    // 实例化自定义事件对象
    let dispatcher: CustomDispatcher = new CustomDispatcher();

    // 监听游戏开始事件
    dispatcher.addEventListener(
      CustomDispatcher.START,
      () => {
        console.log("游戏开始了");
      },
      this
    );

    // 触发游戏开始事件
    dispatcher.startGame();
    ```

    当我们触发了开始游戏事件，其他类中如果有绑定游戏开始事件的监听，就能够捕获到这一动作，接着做一些处理

    在飞机大战的开发中绑定了很多自定义事件，如游戏开始，游戏暂停，继续游戏，游戏结束，游戏重开，主机扣血等

  - `RES.getRes('bgm_mp3')`播放音频

    ```typescript
    let sound: egret.Sound = RES.getRes("bgm_mp3");
    let channel = sound.play();
    channel.stop();
    ```

    上面就是音频播放的一些常用 api，细节是

    1. 使用`RES.getRes()`必须先在`default.res.json`文件中引用定义这个变量，和变量的类型和地址才能使用
    2. play() 不传参的时候会以 loop 的轮播方式进行播放，也可以传参，如：play(0, 1)，表示从音频的进度 0 开始播放，播放一次
    3. 每次 play()调用之后会返回一个 channel 对象，这个对象相当于这个音频的遥控器，通过它可以执行 stop()方法让音频停下来。

  - `removeChild`的使用

    > 这个 API 用于在画布上清除元素，如子弹打中飞机了需要将碰撞的子弹和飞机在画布上清除掉，就需要使用`removeChild`清除，这个 api 也是有细节的

    1. 一个元素只能由容纳这个元素的容器才能清除，简单的理解就是只有这个元素的父亲才能删除，其他是不能删除的，如爷爷等辈的也是不能删除的

    2. 这个操作是一个相对危险的操作，所以无论何时我们要删除的时候，一定要先判断是否存在于父容器里面，只有存在的时候才删除

       ```typescript
       // this.$children 查看子元素
       if (this.$children.indexOf(enemy) != -1) {
         this.store.that.removeChild(enemy);
       }
       ```

  - `getBounds()`和`intersects()`碰撞检测

    > 这个 api 是获取元素的坐标，所以利用这个检测碰撞的逻辑是两个元素都获取位置，判断两个元素的坐标是否有重合的地方，如果有就说明发生了碰撞。

    ```typescript
    let rect1: egret.Rectangle = this.prop.getBounds();
    let rect2: egret.Rectangle = this.hero.getBounds();
    rect1.x = this.prop.x;
    rect1.y = this.prop.y;
    rect2.x = this.hero.x;
    rect2.y = this.hero.y;
    if (rect1.intersects(rect2)) {
      console.log("发生碰撞了");
    }
    ```

  - `egret.MainContext.instance.stage.stageWidth`和`egret.MainContext.instance.stage.stageHeight`可以主舞台（满屏）的宽和高

  - `anchorOffsetX`,`anchorOffsetY`设置元素的锚点

    > 之所以要设置锚点是因为我们要为主机添加拖动事件，只有当把锚点设为飞机的最中间才能拖动的准确，否则每个元素的锚点默认是在左上角

    ```typescript
    this.hero.anchorOffsetX = this.hero.width / 2;
    this.hero.anchorOffsetY = this.hero.height / 2;
    // 将hero元素的锚点设为元素中心
    ```

- `removeEventLinstner`的使用细节

  > `addEventListener`的使用是非常简单的，但是`removeEventListener`却是有很重要的使用细节的，这个就在于如果使用`removeEventListener`的处理函数必须和`addEventListener`的处理函数是同一个函数才能移除，这个同一个函数指的是使用的同一个地址的函数，所以当我们处理函数是需要传参的时候，这种情况就很难处理，之前我一直解决不了。

  ```typescript
  // 这种情况是移除不了事件的，因为两个箭头函数的地址是不同的，所以要移除只能使用具名函数
  this.addEventListener(egret.Event.ENTER_FRAME,()=>{
      test(1111)
  },this)
  this.removeEventListener(egret.Event.ENTER_FRAME,()=>{
      test(1111)
  },this)
  
  ----------------------------------------------------------------------------------------------------------
  // 使用具名函数，但是这种情况又没有办法传参了
  function fun():void{}
  
  this.addEventListener(egret.Event.ENTER_FRAME,fun,this)
  this.removeEventListener(egret.Event.ENTER_FRAME,fun,this)
  
  ----------------------------------------------------------------------------------------------------------
  // 使用 bind()讲返回值赋值给变量，既可以实现传参,bind函数会返回一个修改过this执行的函数，同时还能传参
  function fun():void{}
  let TEMP = fun.bind(this,1111)
  this.addEventListener(egret.Event.ENTER_FRAME,TEMP,this)
  this.removeEventListener(egret.Event.ENTER_FRAME,TEMP,this)
  ```

#### 逻辑思路

> 逻辑思路这一块是非常重要的，因为动画是一个实时渲染的东西，如果我们的操作不对，可能也能实现最终的效果，但是造成的结果就是你的游戏就是没有他人的游戏流畅。

大思路是我们得维护一个敌机数组，一个子弹数组，主机上面，添加一个 egret.Event.ENTER_FRAME 监听 这个里面不断做敌机和子弹的飞行以及碰撞检测。有碰撞就去掉对应的子弹和敌机。当子弹和敌机没有被碰撞但是超过视图范围了这种情况我们也清掉。这样就可以了。

- 创建自定义事件，子弹类，敌机类，主机类，并实例化。

- 监听游戏开始事件，当游戏开始时添加如画布（这步也可以放在最前面，不影响）,让背景滚动起来。

  > 背景滚动逻辑并排着放两张一样的背景，滚动，当满足某个条件的时候让已经过了的图片再拍到后面，就能实现无缝的滚动

  ```typescript
  // sky就是那两个背景图  这里省略了让图片并排
  this.sky.forEach((item, index) => {
    item.y += this.speed_bg;
    if (item.y > item.height - this.speed_bg - 5) {
      item.y = -item.height;
    }
  });
  ```

- 初始化生成敌机，发射子弹的定时器，每隔一个时间就创建一个敌机，发射一颗子弹，并将这个子弹和敌机添加到敌机数组和子弹数组

- 监听主机心跳事件，这个事件需要做，让每个子弹向上移动，每个敌机向下移动，同时检测子弹和敌机碰撞，主机和敌机碰撞，主机和道具碰撞

- 当敌机和主机相撞，扣血。吃到道具加飞机的攻速，这个操作可以是将主机发射子弹的定时器关闭，再绑定一个间隔更短的定时器，再重新绑定事件和 start()

  > 道具在屏幕内四角随便撞的逻辑其实也很简单，就是当元素撞到屏幕的四个边的时候让它的往负值进行偏移即可

  ```typescript
  // this.prop 就是道具
  // egret.MainContext.instance.stage.stageWidth  主舞台的宽
  // egret.MainContext.instance.stage.stageHeight  主舞台的高
  let prop_x: number = 5;
  let prop_y: number = 5;
  if (
    this.prop.x >=
      egret.MainContext.instance.stage.stageWidth - this.prop.width ||
    this.prop.x <= 0
  ) {
    this.prop_x = this.prop_x * -1;
  }
  if (
    this.prop.y >=
      egret.MainContext.instance.stage.stageHeight - this.prop.height ||
    this.prop.y <= 0
  ) {
    this.prop_y *= -1;
  }
  ```

#### 其他

> 主要的思路和逻辑就是上面的那些，只要懂了就能动手开始写了，简单的 API 如创建元素等等网上挺多文档可以查询的，所以我只记录了细节和重要的 API。

egret 开发下来真的让我感觉好像回到了两年前在大学开发 c#的 win form 窗体应用程序，因为 egret 是可以使用 EUI,像 c#一样可以妥妥拽拽一些控件或者自定义一些页面布局什么的发，非常的方便，但是如果是小应用建议不用，因为 EUI 非常大，会让你的项目体积变的很大。

我在开发的时候思路错了一次，那时候我是给每个子弹绑定一个子弹和敌机都绑定 timer，在 timer 里面做位移和碰撞检测，这样写的结果就是最终游戏的效果非常的差，页面很卡顿。在领导的讲解下让我把敌机和子弹的 timer 都去掉了，只给主机绑定一个心跳检测即可，去掉了非常的 timer，整个页面就非常流畅了，所以在游戏开发的时候一定要注重思路，以性能消耗最好的方式达到目的。

#### 总结

egret 游戏开发真的蛮有意思的，也补足了我对 typescript 开发的需求，希望能早日掌握，会游戏开发的前端程序员应该也会更有一些优势吧~，加油打工人！！！
