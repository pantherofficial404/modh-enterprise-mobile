// Project files
import { IAddress } from '@app/types';

export const getFullAddress = (address: IAddress): string => {
  let fullAdress: string[] = [];
  if (address.address1) {
    fullAdress.push(address.address1);
  }
  if (address.address2) {
    fullAdress.push(address.address2);
  }
  if (address.landmark) {
    fullAdress.push(address.landmark);
  }
  if (address.city) {
    fullAdress.push(address.city);
  }
  if (address.state) {
    fullAdress.push(address.state);
  }
  fullAdress.push('India');
  if (address.pincode) {
    fullAdress.push(String(address.pincode));
  }
  return fullAdress.join(', ');
};
