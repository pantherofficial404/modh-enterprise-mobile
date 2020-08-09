// Libraries
import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

// Project files
import style from './layout.style';

const Layout: React.FC = ({ children }) => {
  return (
    <View style={style.root}>
      <SafeAreaView />
      <ScrollView>
        {children}
      </ScrollView>
    </View>
  )
}

export default Layout;