
var MUSICDATA=[];
var graphlist=[];

var nowselect=0;
var musicnum=0;

var flag1=0;

var nowdif=0;

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
            x: Calu_X(2,2),
            y: 110-13,
            scale:1.15
        });
        this.addChild(this.sprite0,15);
        
        
        this.scheduleUpdate();
        
        return true;
        
    },

    update: function(){
        if(flag1>0){
            this.Label1.setString(MUSICDATA[nowselect].title);
            this.Label2.setString(MUSICDATA[nowselect].difficult[0]);
            this.Label3.setString(MUSICDATA[nowselect].difficult[1]);
            this.Label4.setString(MUSICDATA[nowselect].difficult[2]);

            this.sprite0.attr({
                x: Calu_X(nowdif+1,2),
                y: 110-13,
                scale:1.15
            });
        }
        
        return true;
    }


});


var MENU_L = cc.Layer.extend({
    sprite:null,
    init:function () {
        this._super();

        musicnum=0;
        this.nowselect1=0;
        this.nowdif1=3001;

        flag1=0;

        var size = cc.winSize;
        cc.loader.loadJson(res2.data,function(err,data){

          if(!err){
            for(var int =0;int<data.length;int++){
                MUSICDATA.push(new M_DATA(data[int].title,data[int].title2,data[int].music,data[int].graph,data[int].chart1,data[int].chart2,data[int].chart3,data[int].dif1,data[int].dif2,data[int].dif3));
                
                musicnum++;
                
            }  
            

          }
          this.nowselect1=musicnum*10+nowselect;
        });

        

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


        

        this.Label2 = new cc.LabelTTF("", "Arial", 57);       
        this.Label2.x = 960*0.75;
        this.Label2.y = 400;
        this.Label2.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label2, 9);

        this.Label3 = new cc.LabelTTF("", "Arial", 57);       
        this.Label3.x = 960*0.75;
        this.Label3.y = 320;
        this.Label3.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label3, 9);

        this.Label4 = new cc.LabelTTF("", "Arial", 57);       
        this.Label4.x = 960*0.75;
        this.Label4.y = 240;
        this.Label4.setColor( cc.color(0, 0, 0, 20))

        this.addChild(this.Label4, 9);

        this.Label5 = new cc.LabelTTF("", "Arial", 57);       
        this.Label5.x = 960*0.75;
        this.Label5.y = 160;
        this.Label5.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label5, 9);

        this.Label6 = new cc.LabelTTF("", "Arial", 57);       
        this.Label6.x = 960*0.75;
        this.Label6.y = 80;
        this.Label6.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label6, 9);
        
        this.Label7 = new cc.LabelTTF("", "Arial", 57);       
        this.Label7.x = 960*0.75;
        this.Label7.y = 0;
        this.Label7.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label7, 9);

        this.Label8 = new cc.LabelTTF("", "Arial", 57);       
        this.Label8.x = 960*0.75;
        this.Label8.y = 560;
        this.Label8.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label8, 9);

        this.Label9 = new cc.LabelTTF("", "Arial", 57);       
        this.Label9.x = 960*0.75;
        this.Label9.y = 480;
        this.Label9.setColor( cc.color(0, 0, 0, 20))
        this.addChild(this.Label9, 9);

        this.scheduleOnce(function(){
            nowselect=(this.nowselect1)%(musicnum);
            nowdif=(this.nowdif1)%3;
            this.re_graph(0);
            flag1++;
        },0.3);

        this.scheduleOnce(function(){
           this.nowselect1=musicnum*150;
           this.nowdif1=300001
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
            case 11:this.nowdif1=3000;break;
            case 12:this.nowdif1=3001;break;
            case 13:this.nowdif1=3002;break;

            case 15:
            if(MUSICDATA[nowselect].difficult[nowdif]!=0)this.start();
            break;

        }
        nowdif=(this.nowdif1)%3;

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

        if(flag1>0){
            nowselect=(this.nowselect1)%(musicnum);
            nowdif=(this.nowdif1)%3;
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

            if(ctr_1==1){
                if(nowdif!=0){
                    this.re_graph(11);

                }
                else {
                    this.re_graph(15);

                }
            }
            if(ctr_2==1){
                if(nowdif!=1){
                    this.re_graph(12);

                }
                else {
                    this.re_graph(15);

                }
            }
            if(ctr_3==1){
                if(nowdif!=2){
                    this.re_graph(13);

                }
                else {
                    this.re_graph(15);

                }
            }
            if(ctr_enter==1){
                this.re_graph(15);
            }

        }
        return true;
    }


});

var MENU_S = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MENU_L();
        var c=new D_PAD();
        var layer2 = new MENU2_L();

        c.init(1);
        layer.init();
        layer2.init();
        this.addChild(layer);
        this.addChild(c);
        this.addChild(layer2);


    }
});