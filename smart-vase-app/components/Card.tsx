import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

interface CardProps {
    children: React.ReactNode;
    style?: ViewStyle;
    accentColor?: string;
}

export function Card({ children, style, accentColor }: CardProps) {
    return (
        <View
            style={[
                styles.card,
                accentColor && { borderLeftColor: accentColor },
                style,
            ]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.lg,
        borderRadius: theme.borderRadius.lg,
        marginBottom: theme.spacing.md,
        borderLeftWidth: 4,
        borderLeftColor: theme.colors.primary,
        ...theme.shadows.medium,
    },
});
