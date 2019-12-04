//Q04棒の切り分け
//Q1:n=20,m=3
//Q2:n=100,m=5
var current = 1
var count = 0

function cutBar(m,n){
  while(n > current){
    //結合した値がんより小さい間実行する
    if(current < m){
      //棒の数が人の数より少ない
      current = current *2
      //console.log(count+1 + '回目:' + current  +'cm')
    }else{
      //棒の数が人の数より多い
      current = current + m
      //console.log(count+1 + '回目:' + current  +'cm')
    }
    count = count + 1;
  }
  console.log(count)
}
