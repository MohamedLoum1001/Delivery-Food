import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HoverImage = ({ source, size, activeColor, inactiveColor, screenName }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigation = useNavigation();

    const onPress = () => {
        setIsHovered(false);
        navigation.navigate(screenName);
    };

    return (
        <TouchableOpacity
            onPressIn={() => setIsHovered(true)}
            onPressOut={() => setIsHovered(false)}
            onPress={onPress}
        >
            <Image
                source={source}
                style={[
                    styles.icon,
                    { width: size, height: size, tintColor: isHovered ? activeColor : inactiveColor },
                ]}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
        resizeMode: 'contain',
    },
});

export default HoverImage;
