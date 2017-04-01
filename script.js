
function random(){
  
var vowelsA = ['a', 'o', 'i','e'];
var consonantsAn = ['b','c','w','p','s','n','r','l','h','b','m'];
var nickname = "";
  //random words
  for(i = 0; i<4;i++){
    nickname += consonantsAn[Math.floor(Math.random() * consonantsAn.length)] + vowelsA[Math.floor(Math.random() * vowelsA.length)];
  }
// Select own size nickname
  //var x = document.getElementById("mySelect").value;
 var x = document.getElementById("mySelect").value;

  if(nickname){
     document.write(nickname.slice(0,x));
     }
  else{
    document.write('fail');
  }
document.getElementById("demo").innerHTML = x;
 
}
 
