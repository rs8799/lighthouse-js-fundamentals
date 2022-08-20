function loopyLighthouse(x) {
  for (n = 100; n <= 200; n++){
    console.log (n);
    if (n % 3 === 0){
      console.log("Loopy");
    }else if (n % 4 === 0){
      console.log("Lighthouse");
    }else if (n % 3 === 0 && n % 4 === 0){
      console.log("LoopyLighthouse");
    }else{
      console.log(n)
    }
  }
}
return loopyLighthouse(100);

