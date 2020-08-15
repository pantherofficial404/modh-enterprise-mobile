// Libraries
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

// Project files
import { IAddress } from '@app/types';
import { Typography } from '@app/components';
import style from './address-card.style';
import { getFullAddress } from '@app/helpers';
import Lang from './address-card.lang';
import { Pallete } from '@app/constant';

interface IProps {
  address: IAddress;
  isEditable?: boolean;
  isDeletable?: boolean;
  handleDelete?: () => void;
  handleEdit?: () => void;
}

const AddressCardComponent: React.FC<IProps> = (props) => {
  const { address, isEditable, isDeletable, handleDelete, handleEdit } = props;
  return (
    <View style={style.root}>
      <View style={style.header}>
        <Typography
          fontSize={16}
          color="textPrimary"
          fontWeight="500"
          flexWrap="wrap"
          lineHeight={24}
          flex={1}>
          {address.name}
        </Typography>
        <Typography
          fontSize={14}
          color="textSecondary"
          fontWeight="500"
          borderWidth={1}
          borderColor={Pallete.border.main}
          borderRadius={4}
          padding={10}>
          {address.type}
        </Typography>
      </View>
      <Typography
        color="textSecondary"
        marginVertical={16}
        lineHeight={24}
        fontSize={14.5}>
        {getFullAddress(address)}
      </Typography>
      <Typography color="textSecondary" marginBottom={16}>
        +91 {address.mobileNo}
      </Typography>
      <View style={style.buttonAction}>
        {isEditable && (
          <TouchableOpacity style={style.editButton} onPress={handleEdit}>
            <Typography color="white" fontSize={16}>
              {Lang.EN.editText}
            </Typography>
          </TouchableOpacity>
        )}
        {isDeletable && (
          <TouchableOpacity style={style.deleteButton} onPress={handleDelete}>
            <Image
              source={require('../../assests/icons/trash.png')}
              style={style.deleteIcon}
              height={28}
              width={28}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AddressCardComponent;
