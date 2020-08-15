import { IAddress } from '@app/types';

class UserService {
  getAddress(): IAddress[] {
    return [
      {
        address1: '42/A, Rameshwar Park society,Shayona City',
        address2: 'Chandlodia',
        city: 'Ahmedabad',
        mobileNo: 7990859576,
        name: 'Modh Vikram Naileshbhai Modh Vikram Naileshbhai',
        pincode: 384265,
        state: 'Gujarat',
        uuid: 'f2f697d2-8257-4b1d-bf88-3f1ecb152b09',
        alternateMobileNo: '',
        landmark: 'Ghatlodia updated',
        createdAt: new Date('2020-08-05T16:56:01.376Z'),
        updatedAt: new Date('2020-08-05T16:56:01.376Z'),
        type: 'HOME',
      },
      {
        address1: '42/A, Rameshwar Park society,Shayona City',
        address2: 'Chandlodia',
        city: 'Ahmedabad',
        mobileNo: 7990859576,
        name: 'Modh Vikram Naileshbhai',
        pincode: 384265,
        state: 'Gujarat',
        uuid: 'f2f697d2-8257-4b1d-bf88-3f1ecb152b010',
        alternateMobileNo: '',
        landmark: 'Ghatlodia updated',
        createdAt: new Date('2020-08-05T16:56:01.376Z'),
        updatedAt: new Date('2020-08-05T16:56:01.376Z'),
        type: 'HOME',
      },
      {
        address1: '42/A, Rameshwar Park society,Shayona City',
        address2: 'Chandlodia',
        city: 'Ahmedabad',
        mobileNo: 7990859576,
        name: 'Modh Vikram Naileshbhai',
        pincode: 384265,
        state: 'Gujarat',
        uuid: 'f2f697d2-8257-4b1d-bf88-3f1ecb152b0',
        alternateMobileNo: '',
        landmark: 'Ghatlodia updated',
        createdAt: new Date('2020-08-05T16:56:01.376Z'),
        updatedAt: new Date('2020-08-05T16:56:01.376Z'),
        type: 'HOME',
      },
    ];
  }
}

export default new UserService();
