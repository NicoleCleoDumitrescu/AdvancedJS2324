class NewUser{
    #varsta; //proprietate privata
    #password; //proprietate privata

    constructor(id,nume,email){
        //setam proprietatile
        this._id=id;//proprietate protected
        this.nume=nume;
        this._email=email;// proprietate protected
        this.#password = '12345';
    }
        get id(){
            return this.id;
        }
        get varsta(){
           return this.#varsta;
        }
        get password(){
            return this.#password;
        }

        set varsta(NewVarsta){
            console.log('sunt in setter');
            this.#varsta = newVarsta;
        }
        // Adresa de email este protected atunci ii definim getter dar nu setam setter
        get email(){
            return this._email;
        }

 


        
    set nume(numeNou){
        this._name=numeNou;
    }
    get nume(){
        return this._nume;
    }
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