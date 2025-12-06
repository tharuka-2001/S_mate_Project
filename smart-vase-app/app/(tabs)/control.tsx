import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Switch, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Control() {
    const [autoMode, setAutoMode] = useState(false);
    const [scheduleTime, setScheduleTime] = useState('');
    const [waterLine, setWaterLine] = useState('');
    const [waterAmount, setWaterAmount] = useState('');

    const ActionButton = ({ title, icon, variant = 'primary', onPress }: any) => {
        const bgColor = variant === 'danger' ? '#000' : variant === 'primary' ? '#000' : '#fff';
        const textColor = variant === 'danger' ? '#fff' : variant === 'primary' ? '#fff' : '#000';
        const borderColor = variant === 'secondary' ? '#e5e5e5' : 'transparent';

        return (
            <TouchableOpacity
                className="flex-row items-center justify-center py-4 px-6 rounded-xl mb-3"
                style={{
                    backgroundColor: bgColor,
                    borderWidth: variant === 'secondary' ? 1 : 0,
                    borderColor: borderColor,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: variant === 'danger' ? 0.3 : 0.1,
                    shadowRadius: 8,
                    elevation: variant === 'danger' ? 8 : 4,
                }}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <Ionicons name={icon} size={20} color={textColor} />
                <Text className={`ml-2 font-semibold ${variant === 'secondary' ? 'text-black' : 'text-white'}`}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View className="flex-1 bg-[#f9f9f9]">
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 20 }}
            >
                {/* Header */}
                <View className="mb-6 mt-8">
                    <Text className="text-sm text-gray-400 mb-1">Manual & automated</Text>
                    <Text className="text-3xl font-bold text-black">Control Center</Text>
                </View>

                {/* Auto Mode Toggle */}
                <View className="bg-white rounded-2xl p-5 mb-4" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8,
                }}>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="flash-outline" size={24} color="#000" />
                            <View className="ml-4 flex-1">
                                <Text className="text-base font-bold text-black">Automation Mode</Text>
                                <Text className="text-sm text-gray-400">
                                    {autoMode ? 'Schedules active' : 'Manual control only'}
                                </Text>
                            </View>
                        </View>
                        <Switch
                            value={autoMode}
                            onValueChange={setAutoMode}
                            trackColor={{ false: '#e5e5e5', true: '#666' }}
                            thumbColor={autoMode ? '#000' : '#fff'}
                        />
                    </View>
                </View>

                {/* Manual Controls Section */}
                <Text className="text-xl font-bold text-black mb-4 mt-2">Manual Controls</Text>

                <ActionButton
                    title="Start Watering — Line 1"
                    icon="water-outline"
                    variant="secondary"
                    onPress={() => console.log('Water Line 1')}
                />

                <ActionButton
                    title="Start Watering — Line 2"
                    icon="water-outline"
                    variant="secondary"
                    onPress={() => console.log('Water Line 2')}
                />

                <ActionButton
                    title="Start Fertilizing"
                    icon="leaf-outline"
                    variant="primary"
                    onPress={() => console.log('Fertilize')}
                />

                <ActionButton
                    title="STOP ALL OPERATIONS"
                    icon="alert-circle-outline"
                    variant="danger"
                    onPress={() => console.log('Emergency Stop')}
                />

                {/* Schedule Section */}
                <Text className="text-xl font-bold text-black mb-4 mt-4">Watering Schedule</Text>

                <View className="bg-white rounded-2xl p-5 mb-4" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8,
                }}>
                    <Text className="text-lg font-bold text-black mb-4">Add New Schedule</Text>

                    <Text className="text-xs text-gray-400 mb-2 mt-2">Time (24h format)</Text>
                    <TextInput
                        className="border border-gray-200 rounded-xl p-4 text-black bg-gray-50 mb-3"
                        placeholder="07:30"
                        value={scheduleTime}
                        onChangeText={setScheduleTime}
                        placeholderTextColor="#9CA3AF"
                    />

                    <Text className="text-xs text-gray-400 mb-2">Water Line (1-4)</Text>
                    <TextInput
                        className="border border-gray-200 rounded-xl p-4 text-black bg-gray-50 mb-3"
                        placeholder="1"
                        value={waterLine}
                        onChangeText={setWaterLine}
                        keyboardType="numeric"
                        placeholderTextColor="#9CA3AF"
                    />

                    <Text className="text-xs text-gray-400 mb-2">Water Amount (ml)</Text>
                    <TextInput
                        className="border border-gray-200 rounded-xl p-4 text-black bg-gray-50 mb-4"
                        placeholder="500"
                        value={waterAmount}
                        onChangeText={setWaterAmount}
                        keyboardType="numeric"
                        placeholderTextColor="#9CA3AF"
                    />

                    <ActionButton
                        title="Save Schedule"
                        icon="checkmark-circle-outline"
                        variant="primary"
                        onPress={() => console.log('Save Schedule')}
                    />
                </View>

                {/* Active Schedules */}
                <View className="bg-white rounded-2xl p-5 mb-4" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8,
                }}>
                    <Text className="text-lg font-bold text-black mb-4">Active Schedules</Text>

                    <View className="flex-row items-center justify-between py-2">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="time-outline" size={20} color="#000" />
                            <View className="ml-4">
                                <Text className="text-base font-semibold text-black">07:30 AM</Text>
                                <Text className="text-sm text-gray-400">Line 1 • 500ml</Text>
                            </View>
                        </View>
                        <Ionicons name="trash-outline" size={20} color="#666" />
                    </View>

                    <View className="h-px bg-gray-100 my-2" />

                    <View className="flex-row items-center justify-between py-2">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="time-outline" size={20} color="#000" />
                            <View className="ml-4">
                                <Text className="text-base font-semibold text-black">06:00 PM</Text>
                                <Text className="text-sm text-gray-400">Line 2 • 300ml</Text>
                            </View>
                        </View>
                        <Ionicons name="trash-outline" size={20} color="#666" />
                    </View>
                </View>

                {/* Bottom spacing */}
                <View className="h-8" />
            </ScrollView>
        </View>
    );
}
