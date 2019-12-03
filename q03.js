//Q03：カードを裏返せ
//カードの初期化（裏返しをfalseとする）
 var cards = [];
 for(i=1;i<=100;i++){
   cards.push(false);
 }

//2〜100まで繰り返す
for(i=2;i<=100;i++){
  for(j=i;j<=100;j=j+i){
    var flag = cards[j-1];
    if(flag == true){
      cards[j-1]=false;
    }else if(flag ==false) {
      cards[j-1]=true
    }
  }
}
//false（裏返し）だけ取り出す
for(i=0;i<=99;i++){
  if(cards[i]==false){
    console.log(i+1);
  }
}
