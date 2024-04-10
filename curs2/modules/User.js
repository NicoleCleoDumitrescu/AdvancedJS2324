class User{
    constructor(id,nume,email, varsa){
        //setam proprietatile
        this.id=id;
        this.nume=nume;
        this.email=email;
        this.#varsta=varsta;
    }
    // set nume(numeNou){
    //     this._name=numeNou;
    // }
    // get nume(){
    //     return this._nume;
    // }
    set varsta(varstaNoua){
        if(varstaNoua > 50 || varstaNoua <16){
            throw "Varsta Incorecta!"
        }
        this.#varsta = this.varstaNoua;
    }
    
    set varsta(varstaNoua){
        console.log("varsta este", varstaNoua);
        if (varstaNoua > 50 || varstaNoua< 16) {
            throw" Varsta incorecta!"
            
        }
        this.#varsta = varstaNoua;
    }
    mananca (claorii){
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
export {User}