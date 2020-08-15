// Libraries
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

// Project files
import Layout from '@app/layout';
import { TextInput, Typography } from '@app/components';
import style from './address-add.style';
import LayoutHeader from '@app/layout/layout.header';
import { IAddAddressBody } from '@app/types';
import LayoutFooter from '@app/layout/layout.footer';

const AddressAddScreen: React.FC = () => {
  const [addressForm, setAddressForm] = useState<IAddAddressBody>({
    address1: '',
    city: '',
    mobileNo: null as any,
    name: '',
    pincode: undefined as any,
    state: '',
    type: 'HOME',
    address2: '',
    alternateMobileNo: null as any,
    landmark: '',
  });

  const handleChange = (value: any) => {
    setAddressForm({
      ...addressForm,
      ...value,
    });
  };

  const Footer = () => {
    return (
      <LayoutFooter>
        <TouchableOpacity style={style.addAddressButton}>
          <Typography color="white" fontSize={17} fontWeight="600">
            Add address
          </Typography>
        </TouchableOpacity>
      </LayoutFooter>
    );
  };

  return (
    <KeyboardAvoidingView
      style={style.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Layout header={<LayoutHeader title="Add address" />} footer={<Footer />}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.root}>
            <TextInput
              label="Full Name"
              name="name"
              value={addressForm.name}
              onChangeText={handleChange}
            />
            <TextInput
              label="Street Address"
              name="address1"
              value={addressForm.address1}
              onChangeText={handleChange}
            />
            <TextInput
              label="Street Address 2 (Optional)"
              name="address2"
              value={addressForm.address2}
              onChangeText={handleChange}
            />
            <TextInput
              label="City"
              name="city"
              value={addressForm.city}
              onChangeText={handleChange}
            />
            <TextInput
              label="State/Privince/Region"
              name="state"
              value={addressForm.state}
              onChangeText={handleChange}
            />
            <TextInput label="Country" name="country" value="India" />
            <TextInput
              label="Zip Code"
              name="pincode"
              value={String(addressForm.pincode || '')}
              keyboardType="number-pad"
            />
            <TextInput
              label="Type"
              name="type"
              value="HOME"
              onChangeText={handleChange}
            />
            <TextInput
              label="Phone Number"
              name="mobileNo"
              value={addressForm.mobileNo}
              onChangeText={handleChange}
              keyboardType="number-pad"
            />
            <TextInput
              label="Alternative Phone Number (Optional)"
              name="alternateMobileNo"
              value={addressForm.alternateMobileNo}
              onChangeText={handleChange}
              keyboardType="numeric"
              enablesReturnKeyAutomatically
            />
          </View>
        </TouchableWithoutFeedback>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default AddressAddScreen;
