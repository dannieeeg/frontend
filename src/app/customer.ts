export class Customer {

    

    //  had to make optional parameters(||) for an error in the component.ts to be removed 

    constructor(public id?:number, public emailId?:string, public userName?:string,public  password?:string, public firstName?: string, public lastName?: string){}
}
