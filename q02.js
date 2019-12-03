//1000~9999のうち，「元の数の桁を逆から並べた数字」と同じになるもの
var op = ["*",""];
for(i = 1000; i < 10000; i++){
  var c = String(i);
  for(j = 0; j < op.length; j++){
    for(k = 0; k < op.length; j++){
      for(l = 0; l < op.length; l++){
        val = c.charAt(3) + op[j] + c.charAt(2) + op[k] + c.charAt(1) + op[j] + c.charAt(0);
        if(val.length > 4){ //必ずひとつは演算子を入れる
            if(i == eval(val)){
              console.log(val + "=" + i);
          }
        }
      }
    }
  }
}
