import exercise13 from 13
exercise14(1, 20)
function exercise14(start, end) {
    for (let i = start; i <= end; i++) {
      if (exercise13(i)) {
        document.write(i + "<br>")
      }else if(exercise13(i) == false){
        document.write(i + "<br>")
      }
    }
  }