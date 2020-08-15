export type IAddressType = 'HOME' | 'WORK';

export interface IAddress {
  uuid: string;
  name: string;
  mobileNo: number;
  alternateMobileNo?: string;
  pincode: number;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  landmark?: string;
  createdAt: Date;
  updatedAt: Date;
  type: IAddressType;
}

export interface IAddAddressBody {
  name: string;
  mobileNo: string;
  alternateMobileNo?: string;
  pincode: number;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  landmark?: string;
  type: IAddressType;
}
