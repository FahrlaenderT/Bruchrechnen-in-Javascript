export default class Bruch{
    
    constructor(zaehler,nenner){
        if (nenner == 0){
            throw new Error("Nenner ist 0 du Otto!")
        }
        if (nenner == null) nenner = 1
        if (zaehler < 1 && zaehler > 0){
            // Noch Logik für Gleitkommazahlen hinzufügen
        }
        if (zaehler > 0 && nenner < 0){
            zaehler = zaehler * -1
            nenner  = nenner  * -1
        }
        if (zaehler < 0 && nenner < 0 ){
            nenner = nenner * -1
            zaehler = zaehler * -1
        }
        this.zaehler = zaehler
        this.nenner  = nenner
        
        
    }

    ggt(eins, zwei){
       
        if (zwei == 0){ 
            return eins;
        }else{
           return this.ggt(zwei,eins%zwei);
        }
    }

    meinString() {
        let a = this.zaehler + " / " + this.nenner;
       
        return a;
        }
    
    kuerzen(){
        let gekuerzt = new Bruch(this.zaehler,this.nenner)
        let teiler = this.ggt(this.zaehler,this.nenner)
        gekuerzt.zaehler = gekuerzt.zaehler / teiler
        gekuerzt.nenner  = gekuerzt.nenner  / teiler
        return gekuerzt
    }
    
    add(meinBruch){

        let summe = new Bruch;
        if(meinBruch.nenner == this.nenner){
       
        summe.zaehler = meinBruch.zaehler + this.zaehler;
        summe.nenner  = meinBruch.nenner;
        }else{
            summe.zaehler = meinBruch.zaehler * this.nenner + this.zaehler * meinBruch.nenner;
            summe.nenner  = meinBruch.nenner * this.nenner;
        }
        return summe;
    }

    sub(meinBruch){

        let summe = new Bruch;
        if(meinBruch.nenner == this.nenner){
        summe.zaehler = this.zaehler - meinBruch.zaehler;
        summe.nenner  = meinBruch.nenner;
        }else{
            summe.zaehler = this.zaehler * meinBruch.nenner - meinBruch.zaehler * this.nenner;
            summe.nenner  = meinBruch.nenner * this.nenner;
        }

        return summe;
    }

    
    mul(meinBruch){
        let summe = new Bruch;
        summe.zaehler = this.zaehler * meinBruch.zaehler
        summe.nenner  = this.nenner  * meinBruch.nenner
        return summe
    }
    div(meinBruch){
        let summe = new Bruch;
        summe.zaehler = this.zaehler * meinBruch.nenner
        summe.nenner  = this.nenner  * meinBruch.zaehler
        return summe
    }

    expIntern(ursprung,exponent){
        let summe = new Bruch(this.zaehler,this.nenner)
        
         console.log("ANFANG " + summe.meinString())
       // console.log("This  " + this.meinString())
       
        console.log("Anfangswert " + ursprung.meinString())
        if (exponent == 1){
           // console.log(summe.meinString())
            return summe
        }
        if (exponent == 0){
            //console.log(summe.meinString())
            return summe
        }
        if (exponent < 0){
            summe.zaehler = 1;
            summe.nenner  = summe.nenner * ursprung.zaehler
           // console.log(summe.meinString())
            return summe.expIntern(ursprung,exponent + 1)
        }
        summe.zaehler = summe.zaehler * ursprung.zaehler
        summe.nenner  = summe.nenner  * ursprung.nenner
       // console.log(summe.meinString())
        return summe.expIntern(ursprung,exponent - 1)
    }
    expTwo(exponent){
        let summe = new Bruch(this.zaehler,this.nenner)
        return this.expIntern(summe,exponent)
    }
}