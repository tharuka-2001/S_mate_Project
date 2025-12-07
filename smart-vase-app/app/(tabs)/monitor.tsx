import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SensorTab = 'soil' | 'temperature' | 'humidity' | 'light';

export default function Monitor() {
    const [activeTab, setActiveTab] = useState<SensorTab>('soil');

    // Mock sensor data
    const sensorData = {
        soil: {
            current: 65,
            min: 40,
            max: 80,
            status: 'Optimal',
            icon: 'leaf-outline' as const,
            unit: '%',
        },
        temperature: {
            current: 24,
            min: 18,
            max: 28,
            status: 'Good',
            icon: 'thermometer-outline' as const,
            unit: '°C',
        },
        humidity: {
            current: 58,
            min: 45,
            max: 70,
            status: 'Normal',
            icon: 'water-outline' as const,
            unit: '%',
        },
        light: {
            current: 850,
            min: 500,
            max: 1200,
            status: 'Adequate',
            icon: 'sunny-outline' as const,
            unit: ' lux',
        },
    };

    const currentSensor = sensorData[activeTab];

    const tabs: { key: SensorTab; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
        { key: 'soil', label: 'Soil', icon: 'leaf-outline' },
        { key: 'temperature', label: 'Temp', icon: 'thermometer-outline' },
        { key: 'humidity', label: 'Humidity', icon: 'water-outline' },
        { key: 'light', label: 'Light', icon: 'sunny-outline' },
    ];

    return (
        <View className="flex-1 bg-[#f9f9f9] mt-16">
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {/* Header */}
            <View className="px-5 pt-12 pb-4 text-center">
                
                <Text className="text-3xl font-bold text-black">Sensor Monitor</Text>
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
