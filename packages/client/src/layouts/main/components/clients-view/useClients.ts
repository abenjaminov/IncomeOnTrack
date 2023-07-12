import {IClientView} from "@income-on-track/shared";

export const useClients = () => {
  const clients:Array<IClientView> = [{
    id: '1234',
    name: 'John Doe',
    creationDate: new Date(),
    payment: 150,
    isActive: true,
    isSalary: true,
    debt: 100
  }, {
    id: '1235',
    name: 'John Doe',
    creationDate: new Date(),
    payment: 150,
    isActive: true,
    isSalary: true,
    debt: 150
  }, {
    id: '1236',
    name: 'John Doe',
    creationDate: new Date(),
    payment: 150,
    isActive: true,
    isSalary: true,
    debt: 2000
  }]

  return {
    clients
  }
}
