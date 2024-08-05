!function () {
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) // 监听 button
        let speed = $button.attr('data-speed')   // 获取 button 的播放速度
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }      
    })

    var duration = 50
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'javascript');
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight //自动滚轮
            if (n < code.length) {
                id = setTimeout(run, duration) // 精髓
            } else {
                fn && fn.call()  // 如果你传了回调，就调一下回调
            }
        }, duration)
    }
    let code = `
/*
* 首先，需要准备皮卡丘的小皮肤
*/
.preview{
  height: 100%;
  border:1px solid green;
  display:flex;
  justify-content: center;
  align-items: center;
  background: #fee433;
}
.wrapper{
  width: 100%;
  height: 165px;
  position: relative;
}
/*
* 接下来，画皮卡丘的小鼻子
*/
.nose{
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 12px;
  border-color:black transparent transparent transparent;
  border-radius:50%; 
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translateX(-50%);
}
/*
* 接下来，画皮卡丘的小眼睛
*/
.eye{
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
}
/*
* 不要忘记画眼白哦
*/
.eye::before{
  content:'';
  display: block;
  width:24px;
  height:24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 6px;
  top: -1px;
  border: 2px solid #000;
}
/*
* 画左眼
*/
.eye.left{
  right: 50%;
  margin-right: 90px;
}
/*
* 画右眼
*/
.eye.right{
  left: 50%;
  margin-left: 90px; 
}
/*
* 接下来，画皮卡丘的小腮红
*/
.face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top:85px;
}
/*
* 画左边的腮红
*/
.face.left{
  right: 50%;
  margin-right: 116px;
}
/*
* 画右边的腮红
*/
.face.right{
  left: 50%;
  margin-left: 116px;
}
/*
* 接下来，画皮卡丘的小嘴巴
*/
.upperLip{
  height: 25px;
  width: 80px;
  border: 3px solid black; 
  position: absolute;
  top: 49px;
  background: #fee433;

}
.upperLip.left{
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right{
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
.lowerLip-wrapper{
  bottom: -13%;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  height: 130px;
  width: 300px;
  overflow: hidden;

}
.lowerLip{
  width: 300px; 
  height: 3500px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 3px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
* 最后，画皮卡丘的小舌头
*/
.lowerLip::after{
  content: '';
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 105px;
  background: #fc4a62;
  left: 50%;
  margin-left: -50px;
  border-radius: 45%;
/*
* 画好啦，这只皮卡丘送给你！
*/
}`
    writeCode('', code)


}.call()