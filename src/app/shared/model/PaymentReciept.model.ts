

export class PaymentRecieveModel {
  constructor(){
    
  }
  EntityType!: number | string;
  Date!: Date;
  RecieptFrom!: number | string;
  Amount!: number | string;
  PaymentMode!: number | string;
  instrumentNo !: number | string;
  instrumentDate!: Date;
  Party!: number | string;
  Referencee: ReferenceDetailViewModel[]=[new ReferenceDetailViewModel()];

}
export class ReferenceDetailViewModel {
  RefDetail!: string;
  RefAmount!: number | string;
  RefNotes!: string;
}


