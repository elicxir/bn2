
var gametime;
var notesnum;
var endflag;

var musicpass="res/AXION.mp3";
var graphpass="res/axion.png";//画像　正方形;
var titlename="AXION";
var chartpass="res/AXION.json";

var note_sort=[];
var note_data=[];



var seplay=0;


var scoreLabel;
var startflag;

var scoredata;

var side=0;//サイドの選択
var touch_c=1;//タッチ操作の可否

var START_L=cc.Layer.extend({
    sprite:null,
       
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var flag=0;

        

        this.sprite2 = new cc.Sprite(res.musicgraph);
        this.sprite2.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.5
        });
        this.addChild(this.sprite2, 1,1);

        this.Label = new cc.LabelTTF(titlename, "Arial", 60);       
             this.Label.x = size.width / 2;
            this.Label.y = 100;
            this.Label.setColor( cc.color(255, 255, 255, 0))
        this.addChild(this.Label, 5,1);

        this.rect = new cc.DrawNode();
        this.rect.drawRect(cc.p(0, 0), cc.p(960, 540), cc.color(0, 0, 0, 230));
 
        this.addChild(this.rect,0,1);

        //this.removeChildByTag(1,true);

        function REMOVE(){
            layer2.start();
             
        layer6.removeChild(layer6.rect, true);
        layer6.removeChild(layer6.sprite2, true);
        layer6.removeChild(layer6.Label, true);
    
        }

        

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                 
                if (keyCode == cc.KEY.enter) {
                    if(flag==0){
                        REMOVE();
                        flag++;
                    }
                }

                
            },
                
        }, this);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            //タッチ開始時の処理
            onTouchBegan: function(touch, event){
                if(flag==0){
                    REMOVE();
                    flag++;
                }
                return true;
            }
            //タッチ移動時の処理
           
           
        }, this);
        return true;
    }
            
});


function Calu_Y(just,nowtime,speed) {
    var y=80+(just-nowtime)*speed*0.01;
    return y;
}

function Calu_X(lane){
    if(side==0){
        switch(lane){
            case 1:return 260;break;
            case 2:return 360;break;
            case 3:return 460;break;
            case 4:return 610;break;
            case 5:return 610;break;
            case 6:return 610;break;
            case 7:return 610;break;
        }
    }
    else if(side==1){
        switch(lane){
            case 1:return 960-460;break;
            case 2:return 960-360;break;
            case 3:return 960-260;break;
            case 4:return 960-610;break;
            case 5:return 960-610;break;
            case 6:return 960-610;break;
            case 7:return 960-610;break;
        }
    }
    

}

var SCORE= function(tap2,hold2){//holdnotesは123レーンのみで可能
    this.tap=tap2;
    this.hold=hold2;

    this.objectnum=(tap2*100+hold2*150);
    this.bonus=(1000000-5000)%( this.objectnum)+5000;

    this.point=(1000000-this.bonus)/this.objectnum;

    this.tapjudge=[0,0,0,0];//3perfect 2great 1good 0miss 100 70 40 0
    this.holdjudge=[0,0,0,0];//3perfect 2great 1good 0miss 150 115 60 0 

    this.bonusflag=0;
    this.score=0;

    this.combo=0;
    this.maxcombo=0;
    this.notes_dealt=0;

    this.add=function(sort,judge){
        switch(sort){
            case 1:
                this.tapjudge[judge]++;
                if(judge!=0){
                    this.combo++;
                    this.notes_dealt++;
                }
                else {
                    this.combo=0;this.notes_dealt++;
                }
                break;
            case 2:
                this.holdjudge[judge]++;
                if(judge!=0){
                    this.combo++;this.notes_dealt++;
                }
                else {
                    this.combo=0;this.notes_dealt++;
                }
                break;


        }

        if(this.maxcombo<this.combo){
            this.maxcombo=this.combo;

        }
        

    }
    this.RE=function(){
        this.score=this.point*(this.tapjudge[1]*40+this.tapjudge[2]*70+this.tapjudge[3]*100+this.holdjudge[1]*60+this.holdjudge[2]*110+this.holdjudge[3]*150)

        if(this.bonusflag==1){
            this.score+=this.bonus;
        }
        else if(this.tap+this.hold==this.maxcombo){
            this.bonusflag=1;
        }
        if(this.tap+this.hold==this.notes_dealt){
            endflag=1;
            re[0]=this.tapjudge[3]+this.holdjudge[3];
            re[1]=this.tapjudge[2]+this.holdjudge[2];
            re[2]=this.tapjudge[1]+this.holdjudge[1];
            re[3]=this.tapjudge[0]+this.holdjudge[0];
            re[4]=this.maxcombo;
            re[5]=this.score;


        }
        
    }
    
}

var TAP = function(lanenum,timems,speed){//lane 123 左側　4↑ 5↓ 6→ 7← 
        this.lane=lanenum;
        this.time=timems;
        this.graph;

        this.speed=speed;
        this.hitflag=0;//0未処理　1見逃しmiss 2処理された
        this.seflag=0;
        this.judge=-1;//0miss 1good 2great 3perfect

        this.x;
        this.y;
        
        this.calu=function(time1000){
            if(this.hitflag<2){
                this.x=Calu_X(this.lane),
                this.y=Calu_Y(this.time,time1000,this.speed)
            }
            else {
                this.x=1500;
                this.y=1500;

            }

           
        }

        this.deal=function(keystate,time1000){
            var lag=(time1000)-(this.time);

           

            if(this.hitflag==0){
                
                
                if(keystate==1&&(lag<50&&lag>-50)){
                    this.hitflag=2;
                    this.judge=3;
                    INPUT(this.lane,1);
                    return 1;
    
                }
                else if(keystate==1&&(lag<100&&lag>-100)){
                    this.hitflag=2;
                    this.judge=2;
                    INPUT(this.lane,1);
                    return 2;
                }
                else if(keystate==1&&(lag<150&&lag>-150)){
                    this.hitflag=2;
                    INPUT(this.lane,1);
                    this.judge=1;return 3;
                }
                else if(lag>=150){
                    this.hitflag=2;
                    this.judge=0;return 4;
                }

            }

            return 0;

        }

        

        

}

var HOLD = function(lanenum,startt,endt,speed){//holdnotesは123レーンのみで可能
    this.x;
    this.y1;
    this.y2;

    this.lane=lanenum;
    this.time=startt;
    this.time2=endt;
    this.graph;
    this.speed=speed;
    this.hitflag=0;//0未処理　2ホールド中　3処理済み

    this.judge1=-1;//0miss 1good 2great 3perfect
    this.judge2=-1;//0miss 1good 2great 3perfect

    this.calu=function(time1000){
        if(this.hitflag<3){
            this.x=Calu_X(this.lane),
            this.y1=Calu_Y(this.time,time1000,this.speed),
            this.y2=Calu_Y(this.time2,time1000,this.speed)

            if(this.hitflag==2){
                y1=80;
            }
        }
        else {
            this.x=1500;
            this.y1=1500;
            this.y2=1500;
        }

    }

        this.deal=function(keystate,time1000){
            var lag=(time1000)-(this.time)-25;
            var lag2=(time1000)-(this.time2)-25;
            if(this.hitflag==0){
                if(keystate==1&&(lag<50&&lag>-50)){
                    this.hitflag=2;
                    this.judge=3;
                    INPUT(this.lane,1);
                    return 1;
    
                }
                else if(keystate==1&&(lag<100&&lag>-100)){
                    this.hitflag=2;
                    this.judge=2;
                    INPUT(this.lane,1);
                    return 2;
                }
                else if(keystate==1&&(lag<150&&lag>-150)){
                    this.hitflag=2;
                    INPUT(this.lane,1);
                    this.judge=1;return 3;
                }
                else if(lag>=150){
                    this.hitflag=2;
                    this.judge=0;return 4;
                }

            }


            return 0;

        }
}

var tapnum;
var tapnote;
var holdnum;

var sprite21;
var GAME_NOTES=cc.Layer.extend({
    sprite:null,
    
    init:function () {
        this._super();

        var size = cc.winSize;

        gametime=0;

        tapnum=0;
        holdnum=0;

        notesnum=0;
        notes_dealt=0;
        
        startflag=0;
        this.audioEngine = cc.audioEngine;
        //cc.audioEngine.preloadMusic(musicpass);
        //this.scheduleOnce(GAMESTART, 5);

        endflag=0;
        this.note_graph=[];
        this.holdgraph_end=[];
        this.note_graph2=[];
        this.holdgraph_bar=[];
        
        this.music;

        cc.loader.loadJson(res.chart,function(err,data){

          if(!err){
            for(var int =0;int<data.length;int++){
                note_sort.push(data[int].sort);
                if(data[int].sort==1){
                    note_data.push(new TAP(data[int].lane,data[int].time,data[int].speed));
                    tapnum++;

                }
                else if(data[int].sort==2){
                    note_data.push(new HOLD(data[int].lane,data[int].time,data[int].time2,data[int].speed));
                    holdnum++;this.holdgraph_bar.push(new cc.Sprite());this.holdgraph_end.push(new cc.Sprite());
                }
            }   
            scoredata=new SCORE(tapnum,holdnum);
            notesnum=tapnum+holdnum;
          }
    
        });

       

        
        this.scheduleOnce(function() {
            this.note_graph2.push(new cc.SpriteFrame.create());

            this.note_graph2.push(new cc.SpriteFrame.create(res.tap_png, cc.rect(0, 0, 101, 40)));
            this.note_graph2.push(new cc.SpriteFrame.create(res.up_png, cc.rect(0, 0, 93,86)));
            this.note_graph2.push(new cc.SpriteFrame.create(res.down_png, cc.rect(0, 0, 93, 86)));
            this.note_graph2.push(new cc.SpriteFrame.create(res.left_png, cc.rect(0, 0, 93,86)));
            this.note_graph2.push(new cc.SpriteFrame.create(res.right_png, cc.rect(0, 0, 93, 86)));
            
            for(var e=0;e<notesnum;e++){
                if(note_sort[e]==1){
                        
                    this.note_graph.push(new cc.Sprite());
            

                    this.note_graph[e].attr({
                        x: Calu_X(note_data[e].lane),
                        y: Calu_Y(note_data[e].time,gametime*1000,note_data[e].speed)
                    });
                   
                    this.addChild(this.note_graph[e], notesnum-e);
                }

                else if(note_sort[e]==2){
                    this.note_graph.push(new cc.Sprite());
                    this.holdgraph_bar.push(new cc.Sprite());
                    this.holdgraph_end.push(new cc.Sprite());

                }

            }
            this.music= cc.audioEngine.playEffect(res.bgm,false);
            cc.audioEngine.pauseEffect(this.music);
        }, 0.12);

        this.scheduleUpdate();
        

        return true;
    },
    start:function(){
        cc.audioEngine.resumeEffect(this.music);


        startflag=1;
    },

    update: function(dt) {   
        var flag=0;  

        if(endflag==1){
            
            this.scheduleOnce(function() {
                cc.audioEngine.pauseMusic();

            }, 4);
            this.scheduleOnce(function() {
                var s = cc.TransitionFade.create(2, new RESULT_S());
                cc.director.runScene(s);
            }, 4);
    
        }


        if(startflag==1){
            gametime+=dt;
            scoredata.RE();
            //はじめから3s→スタート画面→自動で譜面スタート
            // dt秒ごとにこのメソッドが呼び出される


            if(seplay>0){
                cc.audioEngine.playEffect(res.se1,false);
                seplay=0;
            }
            
            for(var e=0;e<notesnum;e++){

                if(note_sort[e]==1){

                    if(note_data[e].seflag==0){
                        
                            if((gametime*1000)-(note_data[e].time)>-14){
                                seplay++;
                                note_data[e].seflag++;
                            }
                    }

                    if(note_data[e].hitflag<2){
                        flag=note_data[e].deal(INPUT(note_data[e].lane,0),gametime*1000);
                        switch(flag){
                            case 1:
                                layer1.add(0,note_data[e].lane);
                                scoredata.add(1,3);
                                //cc.audioEngine.playEffect(res.se1,false);
                                break;
                            case 2:
                                layer1.add(1,note_data[e].lane); scoredata.add(1,2);
                                //cc.audioEngine.playEffect(res.se1,false);

                                break;
                            case 3:
                                layer1.add(2,note_data[e].lane); scoredata.add(1,1);      
                                                          //cc.audioEngine.playEffect(res.se1,false);

                                break;
                            case 4:
                                layer1.add(3,note_data[e].lane);scoredata.add(1,0);
                                break;
                        }
                        note_data[e].calu(gametime*1000);
    
                        
                        this.note_graph[e].attr({
                                x: note_data[e].x,
                                y: note_data[e].y
                        });
    
                        
                        if(note_data[e].y<550&&note_data[e].y>0){
                            switch(note_data[e].lane){
                                case 1:
                                case 2:
                                case 3:
                                this.note_graph[e].setSpriteFrame(this.note_graph2[1]);
                                break;

                                case 4:this.note_graph[e].setSpriteFrame(this.note_graph2[2]);break;
                                case 5:this.note_graph[e].setSpriteFrame(this.note_graph2[3]);break;
                                case 6:this.note_graph[e].setSpriteFrame(this.note_graph2[4]);break;
                                case 7:this.note_graph[e].setSpriteFrame(this.note_graph2[5]);break;


                            }
                        }
                        else {
                            this.note_graph[e].init();
                        }
                    }

                    

                    
                
                }


                
            }
        } 
            
    }
});

var GAME_BASE2 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.bg = new cc.Sprite(res.back_png);
        this.bg.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.bg, 0);



        this.bg2 = new cc.Sprite(res.musicgraph);//
        this.bg2.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.bg2.setScale(1.35,1.35);
        this.addChild(this.bg2, 0);       
        return true;
    }
});


var GAME_BASE = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        gametime=0;
        notes_dealt=0;

        this.scorest=[new cc.Sprite(),new cc.Sprite(),new cc.Sprite(),new cc.Sprite(),new cc.Sprite(),new cc.Sprite(),new cc.Sprite()];
        for(var t=0;t<7;t++){
            this.scorest[t].attr({
                x: size.width*0.5+80*(t-3),
                y: 320,
                scale:1.2
                
            });
            this.addChild(this.scorest[t], 1);

        }

        this.combost=[new cc.Sprite(),new cc.Sprite(),new cc.Sprite(),new cc.Sprite()];
        for(var t=0;t<4;t++){
            this.combost[t].attr({
                x: size.width*0.5-40+50*(t-3),
                y: 190,
                scale: 0.7
            });
            this.addChild(this.combost[t], 1);

        }

        this.scoreframe=[];

            for(var c3=0;c3<10;c3++){
                this.scoreframe.push(new cc.SpriteFrame.create(res.num, cc.rect(27+68*c3, 12, 68, 160)));
            }
    

        this.cs = new cc.Sprite(res.combo);
        this.cs.attr({
            x: size.width*0.5+75,
            y: 150,
            scale:0.6
        });
        this.addChild(this.cs, 1);

        this.lane1 = new cc.Sprite(res.lane_png);
        this.lane1.attr({
            x: Calu_X(1),
            y: size.height / 2
        });
        this.addChild(this.lane1, 3);

        

        this.lane2 = new cc.Sprite(res.lane_png);
        this.lane2.attr({
            x: Calu_X(2),
            y: size.height / 2
        });
        this.addChild(this.lane2, 3);
        

        this.lane3 = new cc.Sprite(res.lane_png);
        this.lane3.attr({
            x: Calu_X(3),
            y: size.height / 2
        });
        this.addChild(this.lane3, 3);

        this.lane4 = new cc.Sprite(res.lane2_png);
        this.lane4.attr({
            x: Calu_X(4),
            y: size.height / 2
        });
        this.addChild(this.lane4, 3);

        this.scheduleUpdate();
        return true;
    },

    update:function(){
        if(startflag==1){
            var number_s=[0,0,0,0,0,0,0]
            var s=scoredata.score;
            number_s[6]=s%10;
            number_s[5]=(s%100-number_s[6])/10;
            number_s[4]=(s%1000-number_s[5]*10-number_s[6])/100;
            number_s[3]=(s%10000-number_s[4]*100-number_s[5]*10-number_s[6])/1000;
            number_s[2]=(s%100000-number_s[3]*1000-number_s[4]*100-number_s[5]*10-number_s[6])/10000;
            number_s[1]=(s%1000000-number_s[2]*10000-number_s[3]*1000-number_s[4]*100-number_s[5]*10-number_s[6])/100000;
            number_s[0]=(s-number_s[1]*100000-number_s[2]*10000-number_s[3]*1000-number_s[4]*100-number_s[5]*10-number_s[6])/1000000;
    
            for(var q=0;q<7;q++){
                this.scorest[q].setSpriteFrame(this.scoreframe[number_s[q]]);
    
            }
    
    
            var combo_s=[0,0,0,0]
            var s=scoredata.combo;
            combo_s[3]=s%10;
            combo_s[2]=(s%100-combo_s[3])/10;
            combo_s[1]=(s%1000-combo_s[2]*10-combo_s[3])/100;
            combo_s[0]=(s%10000-combo_s[1]*100-combo_s[2]*10-combo_s[3])/1000;
            
            for(var q=0;q<4;q++){
                this.combost[q].setSpriteFrame(this.scoreframe[combo_s[q]]);
    
            }
        }
        else {

            for(var q=0;q<7;q++){
                this.scorest[q].setSpriteFrame(this.scoreframe[0]);
    
            }
    
    
           
            for(var q=0;q<4;q++){
                this.combost[q].setSpriteFrame(this.scoreframe[0]);
    
            }

        }
        

    }
});




var layer2;
var layer;
var layer6;
var GAME_S = cc.Scene.extend({
    onEnter:function () {
        this._super();

        //譜面の入力　読み込み
        //

        var layer = new GAME_BASE();
        var layer5 = new GAME_BASE2();
layer6=new START_L();
        layer1=new EFFECT();
        layer2=new GAME_NOTES(); 
        layer2.init();
        var layer3=new D_PAD();

       this.addChild(layer5);
       this.addChild(layer3);

        this.addChild(layer);
        this.addChild(layer1);
        this.addChild(layer2);
        this.addChild(layer6);
    }
});