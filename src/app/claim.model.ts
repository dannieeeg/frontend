import { DatePipe } from "@angular/common";
import { Customer } from './customer';

export class Claim {

    claimId!: number;
    customerId!: number;
    amount:number | undefined;
    description: string | undefined;
    createdAt:string |undefined;
    file!: FileReader;
    customer?: Customer;
    dateTime!: Date;
    // status: enum ;
}
