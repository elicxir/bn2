/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var gameres = {
    back_png : "res/bg.png",
    title_png : "res/title.png",
};


var res = {
    back_png : "res/title2.png",
    title_png : "res/title.png",
    lane_png : "res/base1.png",
  
    lane2_png : "res/base2.png",
    bg_png : "res/bg.png",

    dpad1_png : "res/ctr.png",
    dpad2_png : "res/enter.png",

    tap_png : "res/tapnote.png",
    up_png : "res/up.png",
    left_png : "res/left.png",
    right_png : "res/right.png",
    down_png : "res/down.png",

    se1:"res/hit.wav",
    se2:"res/cursor8.mp3",

    p_ef:"res/ef.png",
    gr_ef:"res/gef.png",
    go_ef:"res/goef.png",
    miss_ef:"res/missef.png",

    bgm:"res/AXION.mp3",
    combo:"res/combo.png",
    num:"res/num.png",
    result_png:"res/result.png",
    chart:"res/AXION_H.json",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
