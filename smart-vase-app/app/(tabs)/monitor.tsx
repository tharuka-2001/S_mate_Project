import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-gifted-charts';
import { theme } from '../../constants/theme';

type SensorTab = 'soil' | 'temperature' | 'humidity' | 'light';

export default function Monitor() {
    const [activeTab, setActiveTab] = useState<SensorTab>('soil');
    const screenWidth = Dimensions.get('window').width;

    // Define colors for each sensor type using the theme
    const sensorColors = {
        soil: '#7dd8c6', // Teal/turquoise green
        temperature: theme.colors.temperature,
        humidity: theme.colors.humidity,
        light: theme.colors.light,
    };

    // Mock sensor data with historical values for bar charts
    const sensorData = {
        soil: {
            current: 65,
            min: 40,
            max: 80,
            status: 'Optimal',
            icon: 'leaf-outline' as const,
            unit: '%',
            history: [
                { value: 55, label: 'Mon' },
                { value: 58, label: 'Tue' },
                { value: 62, label: 'Wed' },
                { value: 60, label: 'Thu' },
                { value: 63, label: 'Fri' },
                { value: 65, label: 'Sat' },
                { value: 65, label: 'Today' },
            ]
        },
        temperature: {
            current: 24,
            min: 18,
            max: 28,
            status: 'Good',
            icon: 'thermometer-outline' as const,
            unit: '°C',
            history: [
                { value: 22, label: 'Mon' },
                { value: 23, label: 'Tue' },
                { value: 25, label: 'Wed' },
                { value: 24, label: 'Thu' },
                { value: 23, label: 'Fri' },
                { value: 24, label: 'Sat' },
                { value: 24, label: 'Today' },
            ]
        },
        humidity: {
            current: 58,
            min: 45,
            max: 70,
            status: 'Normal',
            icon: 'water-outline' as const,
            unit: '%',
            history: [
                { value: 52, label: 'Mon' },
                { value: 55, label: 'Tue' },
                { value: 57, label: 'Wed' },
                { value: 59, label: 'Thu' },
                { value: 56, label: 'Fri' },
                { value: 57, label: 'Sat' },
                { value: 58, label: 'Today' },
            ]
        },
        light: {
            current: 850,
            min: 500,
            max: 1200,
            status: 'Adequate',
            icon: 'sunny-outline' as const,
            unit: ' lux',
            history: [
                { value: 750, label: 'Mon' },
                { value: 800, label: 'Tue' },
                { value: 820, label: 'Wed' },
                { value: 830, label: 'Thu' },
                { value: 810, label: 'Fri' },
                { value: 840, label: 'Sat' },
                { value: 850, label: 'Today' },
            ]
        },
    };

    const currentSensor = sensorData[activeTab];
    const currentColor = sensorColors[activeTab];

    const tabs: { key: SensorTab; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
        { key: 'soil', label: 'Soil', icon: 'leaf-outline' },
        { key: 'temperature', label: 'Temp', icon: 'thermometer-outline' },
        { key: 'humidity', label: 'Humidity', icon: 'water-outline' },
        { key: 'light', label: 'Light', icon: 'sunny-outline' },
    ];

    const renderChart = () => {
        // Create color palette for bars (gradient leading to current sensor color)
        const getSensorGradient = (sensorType: SensorTab) => {
            const gradients = {
                soil: [
                    '#d4f1ec', '#b8e9e0', '#9ce1d4', '#7dd8c6', '#6dcfbd', '#5dc6b4', '#7dd8c6'
                ],
                temperature: [
                    '#ffe4d6', '#ffd4b8', '#ffc49a', '#ffb47c', '#ffa45e', '#ff9440', currentColor
                ],
                humidity: [
                    '#d6ebf5', '#b8dff0', '#9ad3eb', '#7cc7e6', '#5ebbe1', '#40afdc', currentColor
                ],
                light: [
                    '#fff8dc', '#fff1c4', '#ffeaac', '#ffe394', '#ffdc7c', '#ffd564', currentColor
                ],
            };
            return gradients[sensorType];
        };

        const barColors = getSensorGradient(activeTab);

        const chartData = currentSensor.history.map((item, index) => ({
            value: item.value,
            label: item.label,
            frontColor: barColors[index],
            spacing: 20
        }));

        // Calculate proper chart width: screenWidth - (horizontal padding 40 + card padding 48)
        const chartWidth = screenWidth - 88;

        return (
            <View className="bg-white rounded-2xl p-6 mb-4" style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.1,
                shadowRadius: 16,
                elevation: 8,
            }}>
                <Text className="text-lg font-bold text-black mb-4">7-Day History</Text>
                <View className="mb-6 items-center overflow-hidden">
                    <BarChart
                        data={chartData}
                        width={chartWidth}
                        height={200}
                        spacing={20}
                        initialSpacing={10}
                        endSpacing={10}
                        hideRules
                        xAxisThickness={0}
                        yAxisThickness={0}
                        yAxisTextStyle={{ color: '#666' }}
                        color={currentColor}
                        barWidth={20}
                        frontColor={currentColor}
                        showReferenceLine1
                        referenceLine1Position={currentSensor.min}
                        referenceLine1Config={{
                            type: 'solid',
                            color: '#94a3b8',
                            thickness: 1,
                        }}
                        showReferenceLine2
                        referenceLine2Position={currentSensor.max}
                        referenceLine2Config={{
                            type: 'solid',
                            color: '#94a3b8',
                            thickness: 1,
                        }}
                        showReferenceLine3
                        referenceLine3Position={currentSensor.current}
                        referenceLine3Config={{
                            type: 'dashed',
                            color: currentColor,
                            thickness: 2,
                        }}
                    />
                </View>
                <View className="flex-row justify-between mt-4">
                    {currentSensor.history.map((item, index) => (
                        <View key={index} className="items-center" style={{ width: `${100 / currentSensor.history.length}%` }}>
                            <Text className="text-xs text-gray-500">{item.label}</Text>
                        </View>
                    ))}
                </View>

                <View className="flex-row justify-between mt-6">
                    <View className="flex-row items-center">
                        <View className="w-3 h-3 rounded-full bg-gray-400" />
                        <Text className="ml-2 text-xs text-gray-600">Min: {currentSensor.min}{currentSensor.unit}</Text>
                    </View>
                    <View className="flex-row items-center">
                        <View className="w-3 h-3 rounded-full" style={{ backgroundColor: currentColor }} />
                        <Text className="ml-2 text-xs text-gray-600">Current: {currentSensor.current}{currentSensor.unit}</Text>
                    </View>
                    <View className="flex-row items-center">
                        <View className="w-3 h-3 rounded-full bg-gray-400" />
                        <Text className="ml-2 text-xs text-gray-600">Max: {currentSensor.max}{currentSensor.unit}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View className="flex-1 bg-[#f9f9f9] mt-8">
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {/* Header */}
            <View className="px-5 pt-12 pb-4 text-center">
                <Text className="text-2xl font-bold text-black">Sensor Monitor</Text>
            </View>

            {/* Tab Navigation */}
            <View className="flex-row px-5 mb-4 gap-2">
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab.key}
                        className={`flex-1 flex-row items-center justify-center py-3 px-2 rounded-xl ${activeTab === tab.key ? 'bg-black' : 'bg-white'
                            }`}
                        style={activeTab === tab.key ? {
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                            shadowRadius: 8,
                            elevation: 4,
                        } : {}}
                        onPress={() => setActiveTab(tab.key)}
                        activeOpacity={0.7}
                    >
                        <Ionicons
                            name={tab.icon}
                            size={18}
                            color={activeTab === tab.key ? '#fff' : '#9CA3AF'}
                        />
                        <Text
                            className={`ml-1 text-xs font-semibold ${activeTab === tab.key ? 'text-white' : 'text-gray-400'
                                }`}
                        >
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Sensor Content */}
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 20 }}
            >
                {/* Main Reading Card */}
                <View className="bg-white rounded-2xl p-6 mb-4" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8,
                }}>
                    <View className="flex-row items-center">
                        <View className="w-20 h-20 rounded-2xl bg-gray-100 justify-center items-center mr-4">
                            <Ionicons name={currentSensor.icon} size={40} color="#000" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-sm text-gray-400 mb-1">Current Reading</Text>
                            <Text className="text-4xl font-bold text-black">
                                {currentSensor.current}
                                <Text className="text-2xl text-gray-600">{currentSensor.unit}</Text>
                            </Text>
                            <Text className="text-base font-semibold text-black mt-1">
                                {currentSensor.status}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Range Information */}
                <View className="bg-white rounded-2xl p-6 mb-4" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8,
                }}>
                    <Text className="text-lg font-bold text-black mb-4">Optimal Range</Text>
                    <View className="flex-row justify-around">
                        <View className="items-center flex-1">
                            <Ionicons name="arrow-down-outline" size={24} color="#666" />
                            <Text className="text-xs text-gray-400 mt-2">Minimum</Text>
                            <Text className="text-2xl font-bold text-black mt-1">
                                {currentSensor.min}
                                <Text className="text-sm">{currentSensor.unit}</Text>
                            </Text>
                        </View>
                        <View className="w-px bg-gray-200 mx-4" />
                        <View className="items-center flex-1">
                            <Ionicons name="arrow-up-outline" size={24} color="#666" />
                            <Text className="text-xs text-gray-400 mt-2">Maximum</Text>
                            <Text className="text-2xl font-bold text-black mt-1">
                                {currentSensor.max}
                                <Text className="text-sm">{currentSensor.unit}</Text>
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Chart Section */}
                {renderChart()}

                {/* Status Details */}
                <View className="bg-white rounded-2xl p-6 mb-4" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8,
                }}>
                    <Text className="text-lg font-bold text-black mb-4">Status Details</Text>
                    <View className="flex-row items-start">
                        <View className="w-3 h-3 rounded-full bg-black mt-1 mr-3" />
                        <Text className="flex-1 text-sm text-gray-600 leading-5">
                            Sensor is functioning normally and readings are within optimal range.
                        </Text>
                    </View>
                    <Text className="text-xs text-gray-400 mt-4">Last updated: Just now</Text>
                </View>

                {/* Bottom spacing */}
                <View className="h-8" />
            </ScrollView>
        </View>
    );
}