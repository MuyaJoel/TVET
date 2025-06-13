const calFun=(...numbers)=>{
    return numbers.reduce((pre,next)=> pre+=next,0)
}
console.log(calFun(20,45))