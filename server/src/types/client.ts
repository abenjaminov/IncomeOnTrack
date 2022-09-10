import { AirTableEntity } from "./airtable";

export interface IGetClientsArgs {
    ids: string[];
    filterText: string;
}

export interface IClient extends AirTableEntity {
    airTableId?: string;
  
    id?: string;
    name: string;
    phoneNumber: string;
    basePayment: number;
    debt: number;
    isActive: boolean;
  }

  export interface IClientRepository {

  }