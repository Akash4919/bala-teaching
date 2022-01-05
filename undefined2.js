//BANK PROBLEM
class bank{
    constructor(accname,accno,accbal){
    this.Accname=accname
    this.Accno=accno
    this.Accbal=accbal
    this.transactions=[]
    }
    deposit(amount){
        this.transactions.push(amount)
        this.Accbal=this.Accbal+amount
        console.log(`THE CURRENT BALANCE IS ${this.Accbal}`)
        return this.Accbal
    }
    withdrawl(amount){
        if(this.Accbal>amount){
            this.transactions.push(-amount)
            this.Accbal=this.Accbal-amount
            console.log(`THE CURRENT BALANCE IS ${this.Accbal}`)
            return this.Accbal
        }
        else{
            console.log("YOU DONT'T HAVE SUFFICIENT BALANCE")
        }

    }
    totaltransactions(){
        console.log(this.transactions)
    }
    lastfivetransaction(){
        console.log(this.transactions.slice(-5))
    }
    totaltransactionsum(){
        let total=this.transactions.reduce(function(acc,el){
           return acc+Math.abs(el)
        })
        console.log(total)
        return total
    }
}
let Akash= new bank('AKASH SATRE',9075671165,13500)
console.log(Akash)
Akash.deposit(2000)
Akash.withdrawl(10)
Akash.lastfivetransaction()
Akash.totaltransactions()
Akash.totaltransactionsum()