
var EFFECT = cc.Layer.extend({

    add:function(sort,lane){
        this.efsort[this.num%20]=sort;
        this.eflane[this.num%20]=lane;
        this.eftime[this.num%20]=2;
        this.num++;
        
    },
    update:function(){
        for(var c=0;c<20;c++){
            if(this.efsort[c]>=0&&this.eflane[c]>=0&&this.eftime[c]>=0){
                this.ef[c].setSpriteFrame(this.efframe[this.efsort[c]*27+this.eftime[c]]);
                this.ef[c].attr({
                    x:Calu_X(this.eflane[c]),
                    y:80+110
                });

                this.eftime[c]++;

                if(this.eftime[c]>26){
                    this.efsort[c]=-1;
                    this.eflane[c]=-1;
                    this.eftime[c]=-1;
                    this.ef[c].setSpriteFrame(this.efframe[0]);
                }

            }


        }
    }
    ,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.num=0;

        this.efsort=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
        this.eflane=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
        this.eftime=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

        this.ef=[];
        for(var c2=0;c2<20;c2++){
            this.ef.push(new cc.Sprite());
            this.addChild(this.ef[c2],1);
        }

        this.efframe=[];
        for(var c4=0;c4<3;c4++){
            for(var c3=0;c3<9;c3++){
                this.efframe.push(new cc.SpriteFrame.create(res.p_ef, cc.rect(110*(c3%9), 300*(c4), 110, 300)));
            }
        

        }
        for(var c4=0;c4<3;c4++){
            for(var c3=0;c3<9;c3++){
                this.efframe.push(new cc.SpriteFrame.create(res.gr_ef, cc.rect(110*(c3%9), 300*(c4), 110, 300)));
            }
        

        }
        for(var c4=0;c4<3;c4++){
            for(var c3=0;c3<9;c3++){
                this.efframe.push(new cc.SpriteFrame.create(res.go_ef, cc.rect(110*(c3%9), 300*(c4), 110, 300)));
            }
        

        }
        for(var c4=0;c4<3;c4++){
            for(var c3=0;c3<9;c3++){
                this.efframe.push(new cc.SpriteFrame.create(res.miss_ef, cc.rect(110*(c3%9), 300*(c4), 110, 300)));
            }
        

        }
        this.scheduleUpdate();

        

        return true;

    }

});