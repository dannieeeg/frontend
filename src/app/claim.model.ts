import { DatePipe } from "@angular/common";

export class Claim {

    claimId!: number;
    customerId!: number;
    amount:number | undefined;
    description: string | undefined;
    file!: FileReader;
    // dateTime!: [DatePipe];
    // status: enum ;
}
