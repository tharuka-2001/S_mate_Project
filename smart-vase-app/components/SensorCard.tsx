import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import { Card } from './Card';

interface SensorCardProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    value: string | number;
    unit?: string;
    color: string;
    subtitle?: string;
}

export function SensorCard({ icon, title, value, unit, color, subtitle }: SensorCardProps) {
    return (
        <Card accentColor={color} style={styles.container}>
            <View style={styles.header}>
                <Ionicons name={icon} size={32} color={color} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>
                    {value}
                    {unit && <Text style={styles.unit}>{unit}</Text>}
                </Text>
            </View>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: '45%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.sm,
    },
    title: {
        ...theme.typography.h4,
        color: theme.colors.text,
        marginLeft: theme.spacing.sm,
    },
    valueContainer: {
        marginVertical: theme.spacing.sm,
    },
    value: {
        ...theme.typography.h2,
        color: theme.colors.text,
        fontWeight: 'bold',
    },
    unit: {
        ...theme.typography.body,
        color: theme.colors.textSecondary,
        fontWeight: 'normal',
    },
    subtitle: {
        ...theme.typography.bodySmall,
        color: theme.colors.textSecondary,
    },
});
