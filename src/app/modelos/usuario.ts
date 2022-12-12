export class Usuario {
    public id : any;
    public user : any;
    public pass : any;
    setValues(data : any){
        this.id = data.id;
        this.user = data.user;
        this.pass = data.pass;
    }
}
