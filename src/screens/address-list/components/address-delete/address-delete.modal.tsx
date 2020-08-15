// Libraries
import React from 'react';
import { View, Modal, SafeAreaView, TouchableOpacity } from 'react-native';

// Project files
import { Typography } from '@app/components';
import style from './address-delete.style';

interface IProps {
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const AddressDeleteModal: React.FC<IProps> = (props) => {
  const { visible, onClose, onDelete } = props;
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animated
      animationType="fade">
      <SafeAreaView />
      <View style={style.root}>
        <Typography fontSize={24} fontWeight="600" marginBottom={12}>
          Confirmation
        </Typography>
        <Typography marginBottom={12} color="textSecondary">
          Are you sure wanna delete address
        </Typography>
        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.deleteButton} onPress={onDelete}>
            <Typography color="white" fontSize={17}>
              Delete
            </Typography>
          </TouchableOpacity>
        </View>
        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.cancelButton} onPress={onClose}>
            <Typography color="textPrimary" fontSize={17}>
              Cancel
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView />
    </Modal>
  );
};

export default AddressDeleteModal;
