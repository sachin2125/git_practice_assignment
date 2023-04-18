let str = "malayalam";
   let b = "";
   for(i=str.length-1;i>=0;i--){
       b = b + str[i];
   }
  if(str==b){
      console.log("Yes");
  }else {
      console.log("No");
  }
