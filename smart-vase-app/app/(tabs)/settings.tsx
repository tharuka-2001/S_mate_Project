import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
    const [wifiSSID, setWifiSSID] = useState('');
    const [wifiPassword, setWifiPassword] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const handleSaveSettings = () => {
        Alert.alert('Success', 'Settings saved successfully!');
    };

    const handleResetSystem = () => {
        Alert.alert(
            'Reset System',
            'Are you sure you want to reset the system? This action cannot be undone.',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Reset', style: 'destructive', onPress: () => console.log('Reset') },
            ]
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
                <View className="mb-6 mt-16">
                    
                    <Text className="text-2xl font-bold text-black">Settings</Text>
                </View>

                {/* WiFi Configuration */}
                <Text className="text-xl font-bold text-black mb-4">WiFi Configuration</Text>
                <View className="bg-white rounded-2xl p-5 mb-4" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8,
                }}>
                    <Text className="text-xs text-gray-400 mb-2">Network SSID</Text>
                    <TextInput
                        className="border border-gray-200 rounded-xl p-4 text-black bg-gray-50 mb-3"
                        placeholder="Enter WiFi name"
                        value={wifiSSID}
                        onChangeText={setWifiSSID}
                        placeholderTextColor="#9CA3AF"
                    />

                    <Text className="text-xs text-gray-400 mb-2">Password</Text>
                    <TextInput
                        className="border border-gray-200 rounded-xl p-4 text-black bg-gray-50 mb-4"
                        placeholder="Enter WiFi password"
                        value={wifiPassword}
                        onChangeText={setWifiPassword}
                        secureTextEntry
                        placeholderTextColor="#9CA3AF"
                    />

                    <TouchableOpacity
                        className="bg-black py-4 rounded-xl flex-row items-center justify-center"
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                            shadowRadius: 8,
                            elevation: 4,
                        }}
                        onPress={handleSaveSettings}
                        activeOpacity={0.7}
                    >
                        <Ionicons name="checkmark-circle-outline" size={20} color="#fff" />
                        <Text className="text-white font-semibold ml-2">Save WiFi Settings</Text>
                    </TouchableOpacity>
                </View>

                {/* Notifications */}
                <Text className="text-xl font-bold text-black mb-4 mt-2">Notifications</Text>
                <View className="bg-white rounded-2xl p-5 mb-4" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8,
                }}>
                    <TouchableOpacity
                        className="flex-row items-center justify-between py-2"
                        onPress={() => setNotificationsEnabled(!notificationsEnabled)}
                    >
                        <View className="flex-row items-center flex-1">
                            <Ionicons
                                name={notificationsEnabled ? "notifications-outline" : "notifications-off-outline"}
                                size={24}
                                color="#000"
                            />
                            <View className="ml-4 flex-1">
                                <Text className="text-base font-semibold text-black">Push Notifications</Text>
                                <Text className="text-sm text-gray-400">
                                    {notificationsEnabled ? 'Enabled' : 'Disabled'}
                                </Text>
                            </View>
                        </View>
                        <View className={`w-12 h-6 rounded-full ${notificationsEnabled ? 'bg-black' : 'bg-gray-300'}`}>
                            <View className={`w-5 h-5 rounded-full bg-white mt-0.5 ${notificationsEnabled ? 'ml-6' : 'ml-0.5'}`} />
                        </View>
                    </TouchableOpacity>

                    <View className="h-px bg-gray-100 my-2" />

                    <TouchableOpacity className="flex-row items-center justify-between py-2">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="water-outline" size={24} color="#000" />
                            <View className="ml-4 flex-1">
                                <Text className="text-base font-semibold text-black">Low Water Alerts</Text>
                                <Text className="text-sm text-gray-400">Alert when water is low</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={24} color="#9CA3AF" />
                    </TouchableOpacity>

                    <View className="h-px bg-gray-100 my-2" />

                    <TouchableOpacity className="flex-row items-center justify-between py-2">
                        <View className="flex-row items-center flex-1">
                            <Ionicons name="leaf-outline" size={24} color="#000" />
                            <View className="ml-4 flex-1">
                                <Text className="text-base font-semibold text-black">Fertilizer Alerts</Text>
                                <Text className="text-sm text-gray-400">Alert when fertilizer is low</Text>
                            </View>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={24} color="#9CA3AF" />
                    </TouchableOpacity>
                </View>

                {/* System Information */}
                <Text className="text-xl font-bold text-black mb-4 mt-2">System Information</Text>
                <View className="bg-white rounded-2xl p-5 mb-4" style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.1,
                    shadowRadius: 16,
                    elevation: 8,
                }}>
                    <View className="flex-row justify-between items-center py-2">
                        <Text className="text-sm text-gray-400">Device Name</Text>
                        <Text className="text-base font-semibold text-black">Smart Vase v1</Text>
                    </View>
                    <View className="h-px bg-gray-100 my-2" />
                    <View className="flex-row justify-between items-center py-2">
                        <Text className="text-sm text-gray-400">Firmware Version</Text>
                        <Text className="text-base font-semibold text-black">1.0.0</Text>
                    </View>
                    <View className="h-px bg-gray-100 my-2" />
                    <View className="flex-row justify-between items-center py-2">
                        <Text className="text-sm text-gray-400">App Version</Text>
                        <Text className="text-base font-semibold text-black">1.0.0</Text>
                    </View>
                    <View className="h-px bg-gray-100 my-2" />
                    <View className="flex-row justify-between items-center py-2">
                        <Text className="text-sm text-gray-400">Last Sync</Text>
                        <Text className="text-base font-semibold text-black">Just now</Text>
                    </View>
                </View>

                {/* Danger Zone */}
                <Text className="text-xl font-bold text-black mb-4 mt-2">Danger Zone</Text>
                <TouchableOpacity
                    className="bg-black py-4 rounded-xl flex-row items-center justify-center mb-4"
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.3,
                        shadowRadius: 12,
                        elevation: 8,
                    }}
                    onPress={handleResetSystem}
                    activeOpacity={0.7}
                >
                    <Ionicons name="warning-outline" size={20} color="#fff" />
                    <Text className="text-white font-semibold ml-2">Reset System</Text>
                </TouchableOpacity>

                {/* Bottom spacing */}
                <View className="h-8" />
            </ScrollView>
        </View>
    );
}
