module.exports = function reverse (n) {
    n = n + "";

    let reverse = n.substr(0, 1) === '-' ? n.split("").slice(1).reverse() : n.split("").reverse()
   
    for(i=0; i< reverse.length; i++) {
        if(reverse[i] !== '0' ){
          return reverse.join("");
        }else{
         reverse.shift()
        }
        }
        return reverse.join("")
      
}
