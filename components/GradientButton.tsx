// // GradientButton.tsx
// import React from 'react';
// import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// interface GradientButtonProps {
//     onPress: (event: GestureResponderEvent) => void;
//     title: string;
//     colors: string[];
//     style?: object;
// }

// const GradientButton: React.FC<GradientButtonProps> = ({ onPress, title, colors, style }) => {
//     return (
//         <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
//             <LinearGradient
//                 colors={colors}
//                 style={styles.gradient}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//             >
//                 <Text style={styles.text}>{title}</Text>
//             </LinearGradient>
//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     button: {
//         borderRadius: 25,
//         overflow: 'hidden',
//     },
//     gradient: {
//         padding: 15,
//         alignItems: 'center',
//         borderRadius: 25,
//     },
//     text: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });

// export default GradientButton;
