import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
    // Mock data - replace with actual data from your backend/sensors
    const waterLevel = 75;
    const fertilizer = { c1: 3, c2: 2, c3: 1 };
    const soilMoisture = 65;
    const temperature = 24;
    const humidity = 58;
    const lightIntensity = 850;
    const systemHealth = 'Excellent';

    return (
        <View className="flex-1 bg-[#f9f9f9]">
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 20}}
            >
                {/* Header */}
                <View className="flex-row justify-between items-center mb-6 mt-16">
                    <View>
                        <Text className="text-sm text-gray-400 mb-1">Welcome back</Text>
                        <Text className="text-3xl font-bold text-black">Smart Vase</Text>
                    </View>
                    <View className="flex-row items-center bg-black px-3 py-1.5 rounded-full">
                        <View className="w-2 h-2 rounded-full bg-[#c2e153] mr-1.5" />
                        <Text className="text-xs font-semibold text-white">Online</Text>
                    </View>
                </View>

                {/* System Health Card - Hero Style */}
                <View className="mb-6 rounded-2xl overflow-hidden" >
                    
                        <View className="flex-row items-center">
                            <View className="w-14 h-14 rounded-full bg-black/10 justify-center items-center">
                                <Ionicons name="checkmark-circle-outline" size={32} color="#000" />
                            </View>
                            <View className="flex-1 ml-4">
                                <Text className="text-xs text-black mb-1">System Status</Text>
                                <Text className="text-2xl font-bold text-black mb-0.5">{systemHealth}</Text>
                                <Text className="text-xs text-black">All systems operational</Text>
                            </View>
                            <View className="items-center bg-white/10 px-4 py-2 rounded-xl">
                                <Text className="text-2xl font-bold text-black">98%</Text>
                                <Text className="text-[10px] text-black mt-0.5">Efficiency</Text>
                            </View>
                        </View>
                   
                </View>

                {/* Quick Stats Grid */}
                <View className="flex-row flex-wrap gap-3 mb-6">
                    {/* Water Card */}
                    <View className="flex-1  min-w-[47%] p-4 rounded-2xl shadow-sm backdrop:after:" style={{ backgroundColor: '#FFFFFF', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16, elevation: 8 }} >
                        <View className="flex-row items-center gap-2 mb-5">
                            <Ionicons name="water-outline" size={20} color="#000" />
                            <Text className="text-lg text-gray-400">Water</Text>
                        </View>
                        <Text className="text-3xl font-bold text-black mb-1">{waterLevel}%</Text>

                        <View className="h-2 bg-gray-200 rounded-xl overflow-hidden">
                            <View
                                className="h-full rounded-sm bg-[#7dd8c6]"
                                style={{ width: `${waterLevel}%` }}
                            />
                        </View>
                    </View>


                    {/* Soil Card */}
                    <View className="flex-1 min-w-[47%] p-4 rounded-2xl shadow-sm" style={{ backgroundColor: '#FFFFFF', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16, elevation: 8 }}>
                        <View className="flex-row items-center gap-2 mb-5">
                            <Ionicons name="leaf-outline" size={20} color="#000" />
                            <Text className="text-lg text-gray-400">Soil</Text>
                        </View>
                        <Text className="text-3xl font-bold text-black mb-1">{soilMoisture}%</Text>

                        <View className="h-2 bg-gray-200 rounded-xl overflow-hidden">
                            <View
                                className="h-full rounded-sm bg-black"
                                style={{ width: `${soilMoisture}%` }}
                            />
                        </View>
                    </View>


                    {/* Temperature Card */}
                    <View className="flex-1 min-w-[47%] p-4 rounded-2xl shadow-sm" style={{ backgroundColor: '#000000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16, elevation: 8 }}>
                        <View className="flex-row items-center gap-2 mb-5">
                            <Ionicons name="thermometer-outline" size={20} color="#fff" />
                            <Text className="text-lg text-gray-400">Temperature</Text>
                        </View>
                        <Text className="text-3xl font-bold text-white mb-1">{temperature}°C</Text>

                        <View className="flex-row items-center">
                            <Ionicons name="trending-up" size={14} color="#000" />
                            <Text className="text-xs text-gray-200 ml-1">+2°</Text>
                        </View>
                    </View>

                    {/* Humidity Card */}
                    <View className="flex-1 min-w-[47%] p-4 rounded-2xl shadow-sm" style={{ backgroundColor: '#FFFFFF', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16, elevation: 8 }}>
                        <View className="flex-row items-center gap-2 mb-5">
                            <Ionicons name="water-outline" size={20} color="#000" />
                            <Text className="text-lg text-gray-400">Humidity</Text>
                        </View>
                        <Text className="text-3xl font-bold text-black mb-1">{humidity}%</Text>

                        <View className="flex-row items-center">
                            <Ionicons name="remove" size={14} color="#000" />
                            <Text className="text-xs text-gray-600 ml-1">Stable</Text>
                        </View>
                    </View>
                </View>

                {/* Fertilizer Card */}
                <View className="mb-4">
                    <Text className="text-xl font-bold text-black mb-1">Fertilizer Levels</Text>
                    <Text className="text-sm text-gray-400">Chemical composition</Text>
                </View>

                <View className="bg-[#ffffff] rounded-3xl p-6 mb-6" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8
                }}>
                    <View className="flex-row justify-around items-end">
                        {/* C1 Cylinder */}
                        <View className="items-center">
                            <Text className="text-xs text-gray-800 mb-2">{fertilizer.c1}/3</Text>
                            <View className="w-16 h-32 bg-gray-100 rounded-full overflow-hidden relative" >
                                {/* Fill */}
                                <View
                                    className="absolute bottom-0 left-0 right-0 bg-[#7dd8c6] rounded-b-lg"
                                    style={{
                                        height: `${(fertilizer.c1 / 3) * 100}%`,
                                    }}
                                />
                            </View>
                            <Text className="text-sm font-medium text-black mt-2">C1</Text>
                        </View>

                        {/* C2 Cylinder */}
                        <View className="items-center">
                            <Text className="text-xs text-gray-800 mb-2">{fertilizer.c2}/3</Text>
                            <View className="w-16 h-32 bg-gray-200 rounded-full overflow-hidden relative" >
                                {/* Fill */}
                                <View
                                    className="absolute bottom-0 left-0 right-0 roundedfull"
                                    style={{
                                        height: `${(fertilizer.c2 / 3) * 100}%`,
                                        backgroundColor: '#7dd8c6'
                                    }}
                                />
                            </View>
                            <Text className="text-sm font-medium text-black mt-2">C2</Text>
                        </View>

                        {/* C3 Cylinder */}
                        <View className="items-center">
                            <Text className="text-xs text-gray-800 mb-2">{fertilizer.c3}/3</Text>
                            <View className="w-16 h-32 bg-gray-200 rounded-full overflow-hidden relative" >
                                {/* Fill */}
                                <View
                                    className="absolute bottom-0 left-0 right-0 rounded-b-full"
                                    style={{
                                        height: `${(fertilizer.c3 / 3) * 100}%`,
                                        backgroundColor: '#7dd8c6'
                                    }}
                                />
                            </View>
                            <Text className="text-sm font-medium text-black mt-2">C3</Text>
                        </View>
                    </View>
                </View>

                {/* Light Intensity Card */}
                <View className="mb-4">
                    <Text className="text-xl font-bold text-black mb-1">Environment</Text>
                    <Text className="text-sm text-gray-400">Light conditions</Text>
                </View>

                <View className="bg-white rounded-2xl p-5 mb-6 " style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8
                }}>
                    <View className="flex-row items-center mb-4">
                        <View className="w-14 h-14 rounded-2xl justify-center items-center mr-4 bg-gray-100">
                            <Ionicons name="sunny-outline" size={28} color="#000" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-3xl font-bold text-black mb-1">{lightIntensity} lux</Text>
                            <Text className="text-sm text-gray-400">Light Intensity</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row gap-1 flex-1 mr-3">
                            <View className="flex-1 h-2 rounded bg-gray-200" />
                            <View className="flex-1 h-2 rounded bg-gray-400" />
                            <View className="flex-1 h-2 rounded bg-gray-600" />
                            <View className="flex-1 h-2 rounded bg-black" />
                        </View>
                        <Text className="text-sm font-semibold text-black">Optimal</Text>
                    </View>
                </View>

                {/* Bottom spacing */}
                <View className="h-8" />
            </ScrollView>
        </View>
    );
}