//文字列型に逆順に返すメソッドを追加
String.prototype.reverse = function(){
  return this.split("").reverse().join("");
  //splitで1文字ずつに分割する
  //reverseで逆順にする
  //joinで逆順にしたものをくっつける
}

//11から探索
var num = 11;
while(true){
  if((num.toString() == num.toString().reverse()) &&
    (num.toString(8) == num.toString(8).reverse()) &&
    (num.toString(2) == num.toString(2).reverse())){
      console.log(num);
      break;
      //toString(n)でn真数に変換する
      //&&は「かつ」
    }
    //奇数だけを探すため2つずつ増やす
    num += 2;
}
