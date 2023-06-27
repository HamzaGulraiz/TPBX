import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../assets/colors/colors';
import Divider from '../Divider/Divider';

type CustomCardProps = {
  onPress?: () => void;
  title?: string;
  textColor?: string;
  leftIcon?: any;
  flagIcon?: any;
  switchButton?: boolean;
  selectedText?: string;
  selectTextColor?: string;
  height?: number;
  width?: number;
  divider?: boolean;
  backgroundColor?: string;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  radius?: number;
  topRadius?: number;
  bottomRadius?: number;
};

const CustomCard: React.FC<CustomCardProps> = ({
  onPress,
  title,
  textColor,
  leftIcon,
  flagIcon,
  switchButton,
  selectedText,
  selectTextColor,
  divider,
  height,
  width,
  backgroundColor,
  marginTop,
  marginBottom,
  marginHorizontal,
  radius,
  topRadius,
  bottomRadius,
}) => {
  return (
    <>
      <View
        style={{
          ...styles.container,
          backgroundColor: backgroundColor ? backgroundColor : colors.DARK.CARD,
          height: height ? height : hp(6.8),
          width: width ? width : wp(88.8),
          marginHorizontal: marginHorizontal ? marginHorizontal : wp(5.5),
          borderRadius: radius ? radius : 0,
          borderTopStartRadius: topRadius ? topRadius : 0,
          borderTopEndRadius: topRadius ? topRadius : 0,
          borderBottomStartRadius: bottomRadius ? bottomRadius : 0,
          borderBottomEndRadius: bottomRadius ? bottomRadius : 0,
          marginTop: marginTop ? marginTop : 0,
          marginBottom: marginBottom ? marginBottom : 0,
        }}>
        {leftIcon ? (
          <Image source={leftIcon} resizeMode="contain" style={styles.icon} />
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      {divider ? (
        <Divider height={hp(0.117)} width={wp(88.8)} />
      ) : (
        <Divider
          height={hp(0.117)}
          dividerColor={colors.DARK.TRANSPARENT}
          width={wp(88.8)}
        />
      )}
    </>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: wp(5.5),
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  title: {},
  icon: {
    marginLeft: wp(5.8),
    height: hp(2.81),
    width: wp(6.1),
  },
});
