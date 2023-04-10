// задание 1
function stringFrom(){
  let str =''
    for(let el of arguments){
      str += el + ' '
    }
    return str
}

// задание 2
function min(){
  let minimum = arguments[0]
  for(let i = 0; i < arguments.length; i++){
    if(arguments[i+1] < minimum) {minimum = arguments[i+1]}
  }
  return minimum
}

// задание 3
function numbers(){
  let count = 0
  for(let el of arguments){
    if(typeof(el) == "number") count++
  }
  return count
}
// задание 4
function mean(){
  let leng = 0
  let sum = 0
  for(let el of arguments){
    if(typeof(el) == "number"){
      sum += el
      leng++
    }
  }
  return sum/leng
}

// задание 5
function pow(x){
  if(x % 2 == 0) {
    x = x / 2
    return pow(x)
  }
  if(x == 1) {return 'yes'}
  else return 'no'
}

// задание 6
function reverse(x: number){
  let reversed = ''
  while(x>9){
   reversed += x%10
   x = Math.floor(x/10)
  }
  reversed += x
  return reversed
}