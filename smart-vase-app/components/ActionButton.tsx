import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

interface ActionButtonProps {
    title: string;
    onPress?: () => void;
    icon?: keyof typeof Ionicons.glyphMap;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    loading?: boolean;
    style?: ViewStyle;
}

export function ActionButton({
    title,
    onPress,
    icon,
    variant = 'primary',
    disabled = false,
    loading = false,
    style,
}: ActionButtonProps) {
    const getBackgroundColor = () => {
        if (disabled) return theme.colors.textLight;
        switch (variant) {
            case 'primary':
                return theme.colors.primary;
            case 'secondary':
                return theme.colors.secondary;
            case 'danger':
                return theme.colors.danger;
            default:
                return theme.colors.primary;
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: getBackgroundColor() },
                style,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
        >
            {loading ? (
                <ActivityIndicator color="#fff" />
            ) : (
                <>
                    {icon && <Ionicons name={icon} size={24} color="#fff" style={styles.icon} />}
                    <Text style={styles.text}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        marginBottom: theme.spacing.md,
        ...theme.shadows.small,
    },
    icon: {
        marginRight: theme.spacing.sm,
    },
    text: {
        ...theme.typography.body,
        color: '#fff',
        fontWeight: 'bold',
    },
});
