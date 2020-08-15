// Libraries
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

// Project files
import Layout from '@app/layout';
import style from './address-list.style';
import { UserService } from '@app/services';
import { AddressCard, Typography } from '@app/components';
import LayoutHeader from '@app/layout/layout.header';
import LayoutFooter from '@app/layout/layout.footer';
import AddressDeleteModal from './components/address-delete/address-delete.modal';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '@app/constant';

const AddressListScreen: React.FC = () => {
  const addresss = UserService.getAddress();
  const navigation = useNavigation();
  const [isDeleteOpen, setDeleteOpen] = useState(false);

  const handleAddAddressNavigation = () => {
    navigation.navigate(Screens.ADDRESS_ADD);
  };

  const handleEditAddressNavigation = () => {
    navigation.navigate(Screens.ADDRESS_ADD);
  };

  const Footer = () => {
    return (
      <LayoutFooter>
        <TouchableOpacity
          style={style.addAddressButton}
          onPress={handleAddAddressNavigation}>
          <Typography color="white" fontSize={17} fontWeight="600">
            Add address
          </Typography>
        </TouchableOpacity>
      </LayoutFooter>
    );
  };

  return (
    <Layout
      header={<LayoutHeader title="Address" />}
      footer={<Footer />}
      scrollView={false}>
      <AddressDeleteModal
        visible={isDeleteOpen}
        onClose={() => setDeleteOpen(!isDeleteOpen)}
        onDelete={() => setDeleteOpen(!isDeleteOpen)}
      />
      <FlatList
        style={style.root}
        data={addresss}
        keyExtractor={(item) => item.uuid}
        renderItem={({ item }) => (
          <AddressCard
            address={item}
            key={item.uuid}
            isEditable={true}
            isDeletable={true}
            handleDelete={() => setDeleteOpen(!isDeleteOpen)}
            handleEdit={handleEditAddressNavigation}
          />
        )}
      />
    </Layout>
  );
};

export default AddressListScreen;
