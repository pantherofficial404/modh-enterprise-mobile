// Libraries
import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

// Project files
import style from './layout.style';

interface IProps {
  header?: Element;
  footer?: Element;
  scrollView?: boolean;
}

const Layout: React.FC<IProps> = ({ children, header, footer, scrollView }) => {
  return (
    <View style={style.root}>
      <SafeAreaView />
      {Boolean(header) && header}
      {scrollView && <ScrollView>{children}</ScrollView>}
      {!scrollView && children}
      {Boolean(footer) && footer}
      <SafeAreaView />
    </View>
  );
};

Layout.defaultProps = {
  scrollView: true,
};

export default Layout;
