//CREATED NEW MAP
let syntax=new Map()



//SET METHOD
let aa="fullname"                           //stored in variable bcs to get this element in get method we cannot but the string or a array in it
let bb=["qualification","experience"]
syntax.set(10,"Sachin Tendulkar")
syntax.set(aa,"Akash Satre")
syntax.set(bb,["B.E Electrical",2])



//GET METHOD
// console.log(syntax.get(10))
// console.log(syntax.get(aa))
// console.log(syntax.get(bb))


//DELETE METHOD
// syntax.delete(bb)
// console.log(syntax)


//CLEAR THE MAP
// syntax.clear()
// console.log(syntax)


//LOOP FOR THE MAP

// TO PRINT THE EVERY KEY OF MAP
for (let key of syntax.keys()){
    console.log(key)
}


//TO PRINT THE EVERY VALUE OF MAP
for (let key of syntax.values()){
    console.log(key)
}

//TO PRINT THE WHOLE ELEMENT OF MAP
for(let [key,val] of syntax.entries()){
    console.log(key,val)
}



