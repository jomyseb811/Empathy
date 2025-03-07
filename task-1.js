function sum(n,m){
    let num1=0,num2=0;
for(i=0;i<=n;i++){
    if(i%m==0){
        num2+=i;
    }else{
        num1+=i;
    }
}
return num2 -  num1
}
 let n=10,m=8;
console.log(sum(n,m));

