import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Settings, Database, RefreshCw, ShieldCheck, Landmark } from 'lucide-react-native';
import { usePortfolio } from '../hooks/usePortfolio';

export default function SettingsPage() {
  const { exportData, importData, exportDividendsOnly, importDividendsOnly, resetAllData } =
    usePortfolio();

  const handleImport = async () => {
    const success = await importData();
    if (success) {
      Alert.alert('Sukces', 'Dane portfela zostały zaimportowane!');
    }
  };

  const handleExport = async () => {
    await exportData();
  };

  const handleDividendsImport = async () => {
    const success = await importDividendsOnly();
    if (success) {
      Alert.alert('Sukces', 'Dywidendy zostały scalone z Twoimi danymi!');
    }
  };

  const handleDividendsExport = async () => {
    await exportDividendsOnly();
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="mb-12">
        <View className="mb-2 flex-row items-center gap-2">
          <Settings color="#94a3b8" size={16} />
          <Text className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Konfiguracja Systemu
          </Text>
        </View>
        <Text className="text-2xl font-black uppercase italic tracking-tighter text-slate-800">
          Ustawienia <Text className="text-indigo-600">&</Text> Dane
        </Text>
      </View>

      <View className="gap-6">
        <View>
          <Text className="mb-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Pełny Portfel
          </Text>
          <View className="flex-row gap-4">
            <TouchableOpacity
              onPress={handleExport}
              className="flex-1 items-center rounded-[30px] border border-slate-100 bg-white p-6 shadow-sm">
              <Database color="#6366f1" size={24} />
              <Text className="mt-3 text-xs font-black uppercase">Eksportuj</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleImport}
              className="flex-1 items-center rounded-[30px] border border-slate-100 bg-white p-6 shadow-sm">
              <RefreshCw color="#10b981" size={24} />
              <Text className="mt-3 text-xs font-black uppercase">Importuj</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text className="mb-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Dywidendy
          </Text>
          <View className="flex-row gap-4">
            <TouchableOpacity
              onPress={handleDividendsExport}
              className="flex-1 flex-row items-center justify-center gap-3 rounded-[24px] border border-slate-100 bg-slate-50 p-4">
              <Landmark color="#64748b" size={18} />
              <Text className="text-[10px] font-black uppercase text-slate-600">Eksportuj</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleDividendsImport}
              className="flex-1 flex-row items-center justify-center gap-3 rounded-[24px] border border-slate-100 bg-slate-50 p-4">
              <RefreshCw color="#64748b" size={18} />
              <Text className="text-[10px] font-black uppercase text-slate-600">Importuj</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row gap-4 rounded-[30px] border border-indigo-100 bg-indigo-50 p-6">
          <ShieldCheck color="#4f46e5" size={24} />
          <View className="flex-1">
            <Text className="text-sm font-black uppercase">Twoja Prywatność</Text>
            <Text className="mt-1 text-xs text-slate-600">
              Działa w 100% lokalnie na Twoim urządzeniu.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={resetAllData}
          className="mb-8 items-center rounded-[30px] border border-slate-200 p-6">
          <Text className="text-xs font-black uppercase text-rose-500">Usuń dane lokalne</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
