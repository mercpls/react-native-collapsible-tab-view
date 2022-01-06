function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyleSheet, Pressable, Platform } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
export const TABBAR_HEIGHT = 32;
const DEFAULT_COLOR = 'rgba(51, 51, 51, 1)';
const SECONDARY_COLOR = 'rgba(130, 130, 130, 1)';
/**
 * Any additional props are passed to the pressable component.
 */

export const MaterialTabItem = ({
  name,
  index,
  onPress,
  onLayout,
  scrollEnabled,
  indexDecimal,
  label,
  style,
  labelStyle,
  activeColor = DEFAULT_COLOR,
  inactiveColor = SECONDARY_COLOR,
  inactiveOpacity = 1,
  pressColor = '#DDDDDD',
  pressOpacity = Platform.OS === 'ios' ? 0.2 : 1,
  ...rest
}) => {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(indexDecimal.value, [index - 1, index, index + 1], [inactiveOpacity, 1, inactiveOpacity], Animated.Extrapolate.CLAMP),
      color: Math.abs(index - indexDecimal.value) < 0.5 ? activeColor : inactiveColor
    };
  });
  return /*#__PURE__*/React.createElement(Pressable, _extends({
    onLayout: onLayout,
    style: ({
      pressed
    }) => [{
      opacity: pressed ? pressOpacity : 1
    }, !scrollEnabled && styles.grow, styles.item, style],
    onPress: () => onPress(name),
    android_ripple: {
      borderless: true,
      color: pressColor
    }
  }, rest), /*#__PURE__*/React.createElement(Animated.Text, {
    style: [styles.label, stylez, labelStyle]
  }, label));
};
const styles = StyleSheet.create({
  grow: {
    flex: 1
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(216, 216, 216, 1)',
    zIndex: 0,
    height: TABBAR_HEIGHT
  },
  label: {
    margin: 4,
    fontFamily: 'Lato_Bold',
    fontSize: 16,
    lineHeight: 24,
  }
});
//# sourceMappingURL=TabItem.js.map