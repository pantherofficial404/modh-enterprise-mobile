// Libraries
import { NavigationProp } from "@react-navigation/native";

// Project files
import { Screens } from '@app/constant';

class NavigationService {
  navigate(navigation: NavigationProp<any>, screen: string, params?: any) {
    navigation.navigate(screen, params);
  }
}

export default new NavigationService();