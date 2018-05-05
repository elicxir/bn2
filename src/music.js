//musicdata.jsonにタイトルや難易度（譜面以外）を記述
//〇〇_E _N _H _A.jsonに譜面を記述

function MUSIC_DATA(title, subtitle,pass,dif_e,dif_n,dif_h,dif_a,hide,genre){
    this.title = title;
    this.subtitle = subtitle;
    this.pass = pass;//譜面ファイルのパス 〇〇_E.jsonの〇〇の部分
    this.easy = dif_e;
    this.normal = dif_n;
    this.hard = dif_h;
    this.abnormal = dif_a;
    this.hide = hide;//1なら隠し曲 0なら通常曲
    this.genre=genre;//0音楽ゲーム 1ゲーム楽曲 2VOCALOID 3東方project 4バラエティ
    
  }