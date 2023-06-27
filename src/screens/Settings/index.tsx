import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  ImageSourcePropType,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import CustomBackground from '../../components/Background/Background';
import CustomHeader from '../../components/HeaderBar/Header';
import CustomCard from '../../components/Card/Card';
import icons from '../../../assets/icons/icons';

type NavigationProps = {
  navigate(APPEREANCE: string): unknown;
  navigation: string;
  goBack: any;
};

type HomeButtonCardProps = {
  id: number;
  title: string;
  onPress: () => void;
  icon: ImageSourcePropType;
};

const Settings = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <CustomBackground>
      <View style={styles.container}>
        <CustomHeader title="Settings" marginBottom={hp(3.7)} />
        <CustomCard
          title="Manage Wallets"
          divider={true}
          topRadius={wp(2.5)}
          leftIcon={icons.WALLET}
        />
        <CustomCard
          title="Security Center"
          bottomRadius={wp(2.5)}
          marginBottom={hp(2)}
        />
        <CustomCard
          title="Wallet Connet"
          topRadius={wp(2.5)}
          bottomRadius={wp(2.5)}
          marginBottom={hp(2)}
        />
        <CustomCard title="Launch Screen" divider={true} topRadius={wp(2.5)} />
        <CustomCard title="Base Currency" divider={true} />
        <CustomCard title="Language" divider={true} />
        <CustomCard title="Theme" divider={true} />
        <CustomCard title="Experimental" bottomRadius={wp(2.5)} />
      </View>
    </CustomBackground>
  );
};

export default Settings;
