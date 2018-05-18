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

var res2 = {
    back_png : "res/title2.png",
    title_png : "res/title.png",
    back_png : "res/title2.png",
    flame:"res/waku.png",
    data : "res/MUSIC.json",
    c : "res/1.png",
    se1:"res/hit.wav",
    waku2:"res/waku2.png"
};

var res = {
    
    back_png : "res/title2.png",

    lane_png : "res/base1.png",
    lane2_png : "res/base2.png",

    b_png:"res/button.png",
    dpad1_png : "res/ctr.png",
    dpad2_png : "res/enter.png",

    tap_png : "res/tapnote.png",
    up_png : "res/up.png",
    left_png : "res/left.png",
    right_png : "res/right.png",
    down_png : "res/down.png",

    se1:"res/hit.wav",

    p_ef:"res/ef.png",
    gr_ef:"res/gef.png",
    go_ef:"res/goef.png",
    miss_ef:"res/missef.png",

    combo:"res/combo.png",
    num:"res/num.png",
    result_png:"res/result.png",
    easy:"res/easy.png",
    basic:"res/basic.png",

    hard:"res/hard.png",

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

var g2_resources = [];
for (var i in res2) {
    g2_resources.push(res2[i]);
}
