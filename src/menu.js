
var MUSICDATA=[];
var graphlist=[];

var nowselect=0;
var musicnum=0;

var flag1=0;

var nowdif=0;
var opflag=0;
var side=0;
var side1=150;

var M_DATA = function(title,title2,m_pass,g_pass,c1,c2,c3,d1,d2,d3){
    this.title=title;
    this.title2=title2;
    this.m_pass=m_pass;
    this.g_pass=g_pass;
    this.c_pass=[c1,c2,c3];
    this.difficult=[d1,d2,d3];
}

var MENU2_L=cc.Layer.extend({
    sprite:null,
    init:function () {
        this._super();

        
        this.Label1 = new cc.LabelTTF("", "Arial", 50);       
        this.Label1.x = 960*0.25;
        this.Label1.y = 213;
        this.Label1.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label1, 9);

        this.Label2 = new cc.LabelTTF("", "Arial", 100);       
        this.Label2.x = 85;
        this.Label2.y = 65;
        this.Label2.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label2, 9);

        this.Label3 = new cc.LabelTTF("", "Arial", 100);       
        this.Label3.x = 242;
        this.Label3.y = 65;
        this.Label3.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label3, 9);

        this.Label4 = new cc.LabelTTF("", "Arial", 100);       
        this.Label4.x = 414;
        this.Label4.y = 65;
        this.Label4.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label4, 9);

        this.sprite0 = new cc.Sprite(res2.waku2);
        this.sprite0.attr({
            x: Calu_X(2,0),
            y: 110-13,
            scale:1.15
        });
        this.addChild(this.sprite0,15);

        this.sprite12 = new cc.Sprite(res2.gear2);
        this.sprite12.attr({
            x: 540,
            y: 55,
            scale:0.6
        });
        this.addChild(this.sprite12, 0);

        
        
        this.scheduleUpdate();
        
        return true;
        
    },

    update: function(){
        side=side1%2;
        if(flag1>0){
            this.Label1.setString(MUSICDATA[nowselect].title);
            this.Label2.setString(MUSICDATA[nowselect].difficult[0]);
            this.Label3.setString(MUSICDATA[nowselect].difficult[1]);
            this.Label4.setString(MUSICDATA[nowselect].difficult[2]);

            if(nowdif<3){
                this.sprite0.attr({
                    x: Calu_X(nowdif+1,0),
                });
            }
            else {
                this.sprite0.attr({
                    x: -2000,
                });
            }
            if(nowdif<3){
                this.sprite12.attr({
                    x: -500,
                });
            }
            else {
                this.sprite12.attr({
                    x: 540,
                });
            }

            
        }
        
        return true;
    }


});


var setting = cc.Layer.extend({
    
    init:function () {
        this._super();

        this.op_se=0;
        

        this.centre_x=480;
        this.centre_y=1270;

        this.sprite1 = new cc.Sprite("res/setting.png");
        this.sprite1.attr({
            x: this.centre_x,
            y: this.centre_y,
        });
        this.addChild(this.sprite1, 0);

        this.sprite2 = new cc.Sprite("res/1.png");
        this.sprite2.attr({
            x: this.centre_x-380,
            y: this.centre_y+200,
        });
        this.addChild(this.sprite2, 0);
       
        this.Label1 = new cc.LabelTTF("Notesspeed", "Arial", 55);       
        this.Label1.x=this.centre_x-220;
        this.Label1.y=this.centre_y+200;
        this.Label1.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label1,1);

        this.Label2 = new cc.LabelTTF("Offset", "Arial", 55);       
        this.Label2.x=this.centre_x-220;
        this.Label2.y=this.centre_y+100;
        this.Label2.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label2,1);

        this.Label3 = new cc.LabelTTF("Judge", "Arial", 55);       
        this.Label3.x=this.centre_x-220;
        this.Label3.y=this.centre_y;
        this.Label3.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label3,1);

        this.Label4 = new cc.LabelTTF("Side", "Arial", 55);       
        this.Label4.x=this.centre_x-220;
        this.Label4.y=this.centre_y-100;
        this.Label4.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label4,1);

        this.Label5 = new cc.LabelTTF("ノーツの速度倍率(0.5~4.0)", "Arial", 15);       
        this.Label5.x=this.centre_x-120;
        this.Label5.y=this.centre_y+160;
        this.Label5.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label5,1);

        this.Label6 = new cc.LabelTTF("譜面開始タイミング(10ms単位 -1000~1000)\n　※+:実際より遅くスタート -:実際より早くスタート", "Arial", 15);       
        this.Label6.x=this.centre_x-120;
        this.Label6.y=this.centre_y+60;
        this.Label6.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label6,1);

        this.Label7 = new cc.LabelTTF("判定のラグ調整(0~100 ms)\n　※入力が遅延するときこの値分補正", "Arial", 15);       
        this.Label7.x=this.centre_x-120;
        this.Label7.y=this.centre_y-50;
        this.Label7.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label7,1);

        this.Label8 = new cc.LabelTTF("右利き左利きの選択\n レーン配置を反転させることができる", "Arial", 15);       
        this.Label8.x=this.centre_x-120;
        this.Label8.y=this.centre_y-140;
        this.Label8.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label8,1);

        this.Label9 = new cc.LabelTTF(String(speedmult), "Arial", 55);       
        this.Label9.x=this.centre_x+120;
        this.Label9.y=this.centre_y+200;
        this.Label9.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label9,1);

        this.Label10 = new cc.LabelTTF(String(offset), "Arial", 55);       
        this.Label10.x=this.centre_x+120;
        this.Label10.y=this.centre_y+100;
        this.Label10.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label10,1);

        this.Label11 = new cc.LabelTTF(String(c_lag), "Arial", 55);       
        this.Label11.x=this.centre_x+120;
        this.Label11.y=this.centre_y;
        this.Label11.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label11,1);

        this.Label12 = new cc.LabelTTF(String("右十字配置"), "Arial", 55);       
        this.Label12.x=this.centre_x+120;
        this.Label12.y=this.centre_y-100;
        this.Label12.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label12,1);


        this.sprite13 = new cc.Sprite(res2.gear);
        this.sprite13.attr({
            x: 540,
            y: 55,
            scale:0.6
        });
        this.addChild(this.sprite13, 0);



        this.down = new cc.Sprite(res.dpad1_png);
        this.down.attr({
            x: Calu_X(10,0),
            y: 1278,
            scale:1.8,
            rotation: 270
        });
        this.addChild(this.down, 0);

        this.up = new cc.Sprite(res.dpad1_png);
        this.up.attr({
            x: Calu_X(10,0),
            y: 12262,
            scale:1.8,
            rotation: 90

        });
        this.addChild(this.up, 0);

        this.right = new cc.Sprite(res.dpad1_png);
        this.right.attr({
            x: Calu_X(10,0)+92,
            y: 12170,
            scale:1.8,
            rotation: 180
        });
        this.addChild(this.right, 0);

        this.left = new cc.Sprite(res.dpad1_png);
        this.left.attr({
            x: Calu_X(10,0)-92,
            y: 12170,
            scale:1.8,
        });
        this.addChild(this.left, 0);


        
        this.scheduleUpdate();

        return true;  

    },

    set: function(){
        this.centre_y=270;

        opflag=1;
        this.sprite1.y=this.centre_y;
        this.Label1.y=this.centre_y+200;
        this.Label2.y=this.centre_y+100;
        this.Label3.y=this.centre_y;
        this.Label4.y=this.centre_y-100;
        this.Label5.y=this.centre_y+160;
        this.Label6.y=this.centre_y+60;
        this.Label7.y=this.centre_y-50;
        this.Label8.y=this.centre_y-140;
        this.Label9.y=this.centre_y+200;
        this.Label10.y=this.centre_y+100;
        this.Label11.y=this.centre_y;
        this.Label12.y=this.centre_y-100;
        this.sprite2.y=-this.op_se*100+this.centre_y+200;

        this.right.attr({
            x: Calu_X(10,0)+92,
            y: 170,
            scale:1.8,
            rotation: 180
        });
        this.left.attr({
            x: Calu_X(10,0)-92,
            y: 170,
            scale:1.8,
        });
        this.up.attr({
            x: Calu_X(10,0),
            y: 262,
            scale:1.8,
            rotation: 90

        });
        this.down.attr({
            x: Calu_X(10,0),
            y: 78,
            scale:1.8,
            rotation: 270
        });
    },
    out:function(){
            opflag=0;
            ctr_enter+=2;
            ctr_esc+=2;
        this.centre_y=1270;
        this.sprite1.y=this.centre_y;

        this.Label1.y=this.centre_y+200;
        this.Label2.y=this.centre_y+100;
        this.Label3.y=this.centre_y;
        this.Label4.y=this.centre_y-100;
        this.Label5.y=this.centre_y+160;
        this.Label6.y=this.centre_y+60;
        this.Label7.y=this.centre_y-50;
        this.Label8.y=this.centre_y-140;
        this.Label9.y=this.centre_y+200;
        this.Label10.y=this.centre_y+100;
        this.Label11.y=this.centre_y;
        this.Label12.y=this.centre_y-100;
        this.sprite2.y=-this.op_se*100+this.centre_y+200
        this.right.attr({
            x: Calu_X(10,0)+92,
            y: 11170,
            scale:1.8,
            rotation: 180
        });
        this.left.attr({
            x: Calu_X(10,0)-92,
            y: 11170,
            scale:1.8,
        });
        this.up.attr({
            x: Calu_X(10,0),
            y: 11262,
            scale:1.8,
            rotation: 90

        });
        this.down.attr({
            x: Calu_X(10,0),
            y: 1178,
            scale:1.8,
            rotation: 270
        });
    },
    update: function(){

        side=side1%2;
    

            this.Label9.setString(Math.floor(speedmult*100)/100);
            this.Label10.setString(Math.floor(offset));
            this.Label11.setString(Math.floor(c_lag));   
            if(side==0){
                this.Label12.setString(String("右十字   "));       

            }   
            else {
                this.Label12.setString(String("左十字   "));       

            } 
    
    
    
            this.sprite2.y=-this.op_se*100+this.centre_y+200
    
            if((ctr_enter==1||ctr_esc==1)&&opflag==1){
                this.out();
            }
    
            if(ctr_down==1&&opflag==1){
                if(3>this.op_se){
                    this.op_se++;
                }
            }
            else if(ctr_up==1&&opflag==1){
                if(0<this.op_se){
                    this.op_se--;
                }
            }
            else if(ctr_right%8==1&&opflag==1){
                switch(this.op_se){
                    case 0:
                    if(4>Math.floor(speedmult*100)/100){
                        speedmult+=0.1;
                    }
                    break;
                    case 1:
                    if(1000>Math.floor(offset)){
                        offset+=1;
                    }break;
                    case 2:
                    if(100>Math.floor(c_lag)){
                        c_lag+=1;
                    }break;
                    case 3:
                        side1+=1;
                    break;
    
    
    
                }
                
            }
            else if(ctr_left%8==1&&opflag==1){
                switch(this.op_se){
                    case 0:
                    if(0.5<Math.floor(speedmult*100)/100){
                        speedmult-=0.1;
                    }
                    break;
                    case 1:
                    if(-1000<Math.floor(offset)){
                        offset-=1;
                    }break;
                    case 2:
                    if(0<Math.floor(c_lag)){
                        c_lag-=1;
                    }break;
                    case 3:
                   
                        side1-=1;
                    break;
    
    
    
                }
            }
            
            
        


    }

});

var MENU_L = cc.Layer.extend({
    sprite:null,
    init:function () {
        this._super();


        this.nowselect1=nowselect+musicnum*1000;
        this.nowdif1=4001;

        flag1=0;

        var size = cc.winSize;
        

        

        this.sprite1 = new cc.Sprite();
        this.sprite1.attr({
            x: 250,
            y: 270+110,
            scale:0.7
        });
        this.addChild(this.sprite1, 3);

        this.sprite2 = new cc.Sprite(res2.back_png);
        this.sprite2.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite2, 0);

        this.sprite3 = new cc.Sprite(res2.flame);
        this.sprite3.attr({
            x: 960*0.75+12,
            y: 240
        });
        this.addChild(this.sprite3, 0);

        this.sprite4 = new cc.Sprite(res2.flame);
        this.sprite4.attr({
            x: 960*0.75+12,
            y: 320
        });
        this.addChild(this.sprite4, 0);

        this.sprite5 = new cc.Sprite(res2.flame);
        this.sprite5.attr({
            x: 960*0.75+12,
            y: 400
        });
        this.addChild(this.sprite5, 0);

        this.sprite7 = new cc.Sprite(res2.flame);
        this.sprite7.attr({
            x: 960*0.75+12,
            y: 480
        });
        this.addChild(this.sprite7, 0);

        this.sprite8 = new cc.Sprite(res2.flame);
        this.sprite8.attr({
            x: 960*0.75+12,
            y: 160
        });
        this.addChild(this.sprite8, 0);
        this.sprite9 = new cc.Sprite(res2.flame);
        this.sprite9.attr({
            x: 960*0.75+12,
            y: 80
        });
        this.addChild(this.sprite9, 0);

        this.sprite10 = new cc.Sprite(res2.flame);
        this.sprite10.attr({
            x: 960*0.75+12,
            y: 0
        });
        this.addChild(this.sprite10, 0);

        this.sprite11 = new cc.Sprite(res2.flame);
        this.sprite11.attr({
            x: 960*0.75+12,
            y: 560
        });
        this.addChild(this.sprite11, 0);

        this.sprite6 = new cc.Sprite(res2.c);
        this.sprite6.attr({
            x: 492,
            y: 400
        });
        this.addChild(this.sprite6, 1);

       
        

        this.Label2 = new cc.LabelTTF("", "Arial", 52);       
        this.Label2.x = 960*0.75;
        this.Label2.y = 400;
        this.Label2.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label2, 9);

        this.Label3 = new cc.LabelTTF("", "Arial", 52);       
        this.Label3.x = 960*0.75;
        this.Label3.y = 320;
        this.Label3.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label3, 9);

        this.Label4 = new cc.LabelTTF("", "Arial", 52);       
        this.Label4.x = 960*0.75;
        this.Label4.y = 240;
        this.Label4.setColor( cc.color(0, 0, 0, 20))

        this.addChild(this.Label4, 9);

        this.Label5 = new cc.LabelTTF("", "Arial", 52);       
        this.Label5.x = 960*0.75;
        this.Label5.y = 160;
        this.Label5.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label5, 9);

        this.Label6 = new cc.LabelTTF("", "Arial", 52);       
        this.Label6.x = 960*0.75;
        this.Label6.y = 80;
        this.Label6.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label6, 9);
        
        this.Label7 = new cc.LabelTTF("", "Arial", 52);       
        this.Label7.x = 960*0.75;
        this.Label7.y = 0;
        this.Label7.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label7, 9);

        this.Label8 = new cc.LabelTTF("", "Arial", 52);       
        this.Label8.x = 960*0.75;
        this.Label8.y = 560;
        this.Label8.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label8, 9);

        this.Label9 = new cc.LabelTTF("", "Arial", 52);       
        this.Label9.x = 960*0.75;
        this.Label9.y = 480;
        this.Label9.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label9, 9);

        this.scheduleOnce(function(){
            nowselect=(this.nowselect1)%(musicnum);
            nowdif=Math.floor(this.nowdif1)%4;
            this.re_graph(0);
            flag1++;
        },0.3);

        this.scheduleOnce(function(){
           this.nowselect1=nowselect+musicnum*1000;
           this.nowdif1=400001
        },0.1);

        this.scheduleUpdate();
        
        return true;
        
    },

    start:function(){

        graphpass=MUSICDATA[nowselect].g_pass;
        musicpass=MUSICDATA[nowselect].m_pass;
        chartpass=MUSICDATA[nowselect].c_pass[nowdif];

        
            cc.director.runScene(new GAME_S());

    },
    re_graph:function(move){
        
        switch(move){
            case 1:this.nowselect1++;break;
            case 2:this.nowselect1--;break;
            case 3:this.nowdif1++;;break;
            case 4:this.nowdif1--;break;
            case 11:this.nowdif1=4000;break;
            case 12:this.nowdif1=4001;break;
            case 13:this.nowdif1=4002;break;

            case 15:
            if(MUSICDATA[nowselect].difficult[nowdif]!=0&&nowdif!=3)this.start();
            break;

        }
        nowselect=(this.nowselect1)%(musicnum);
        this.sprite1.initWithFile(MUSICDATA[nowselect].g_pass,cc.rect(0, 0, 600, 400));
        this.Label2.setString(MUSICDATA[nowselect].title2);
        this.Label3.setString(MUSICDATA[(this.nowselect1-1)%(musicnum)].title2);
        this.Label4.setString(MUSICDATA[(this.nowselect1-2)%(musicnum)].title2);
        this.Label5.setString(MUSICDATA[(this.nowselect1-3)%(musicnum)].title2);
        this.Label6.setString(MUSICDATA[(this.nowselect1-4)%(musicnum)].title2);
        this.Label7.setString(MUSICDATA[(this.nowselect1-5)%(musicnum)].title2);
        this.Label8.setString(MUSICDATA[(this.nowselect1+2)%(musicnum)].title2);
        this.Label9.setString(MUSICDATA[(this.nowselect1+1)%(musicnum)].title2);

    },

    
    update: function(){
        
        if(flag1>0&&opflag==0){
            nowselect=(this.nowselect1)%(musicnum);
            nowdif=(this.nowdif1)%4;
            if(ctr_up%12==1){
                this.re_graph(1);
            }
            if(ctr_down%12==1){
                this.re_graph(2);
            }
            if(ctr_right==1){
                this.re_graph(3);
            }
            if(ctr_left==1){
                this.re_graph(4);
            }

            if(ctr_1==1&&nowdif!=3){
                if(nowdif!=0){
                    this.re_graph(11);

                }
                else {
                    this.re_graph(15);

                }
            }
            if(ctr_2==1&&nowdif!=3){
                if(nowdif!=1){
                    this.re_graph(12);

                }
                else {
                    this.re_graph(15);

                }
            }
            if(ctr_3==1&&nowdif!=3){
                if(nowdif!=2){
                    this.re_graph(13);

                }
                else {
                    this.re_graph(15);

                }
            }
            if(ctr_enter==2){
                
                if(nowdif==0||nowdif==1||nowdif==2){
                    this.re_graph(15);
                }
                else {
                    layer_s.set();

                }
                   
                
                
            }
            
            if(ctr_esc==2){
                layer_s.set();
            }
        }
        return true;
    }


});
var layer_s;
var MENU_S = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MENU_L();
        layer_s=new setting();

        var c=new D_PAD();

        var layer2 = new MENU2_L();
        c.init(1);
        layer.init();
        layer2.init();
        layer_s.init();

        this.addChild(layer);
        this.addChild(c);
        this.addChild(layer2);
        this.addChild(layer_s);



    }
});