window.AudioContext = window.AudioContext || window.webkitAudioContext;  
var context = new AudioContext();  

// Audio 用の buffer を読み込む
var getAudioBuffer = function(url, fn) {  
    var req = new XMLHttpRequest();
    // array buffer を指定
    req.responseType = 'arraybuffer';
  
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status === 0 || req.status === 200) {
          // array buffer を audio buffer に変換
          context.decodeAudioData(req.response, function(buffer) {
            // コールバックを実行
            fn(buffer);
          });
        }
      }
    };
  
    req.open('GET', url, true);
    req.send('');
  };
  
  // サウンドを再生
  var playSound = function(buffer) {  
    // source を作成
    var source = context.createBufferSource();
    // buffer をセット
    source.buffer = buffer;
    // context に connect
    source.connect(context.destination);
    // 再生
    source.start(0);
  };
  


cc.game.onStart = function(){
    var sys = cc.sys;
    if(!sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(sys.os === sys.OS_IOS ? true : false);

    // Disable auto full screen on baidu and wechat, you might also want to eliminate sys.BROWSER_TYPE_MOBILE_QQ
    if (sys.isMobile && 
        sys.browserType !== sys.BROWSER_TYPE_BAIDU &&
        sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
        cc.view.enableAutoFullScreen(true);
    }

    // Adjust viewport meta
    cc.view.adjustViewPort(true);

    // Uncomment the following line to set a fixed orientation for your game
    // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(960, 540, cc.ResolutionPolicy.SHOW_ALL);

    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);

    //load resources
    cc.LoaderScene.preload(g2_resources, function () {
        cc.director.runScene(new TITLE_S());
    }, this);
};
cc.game.run();