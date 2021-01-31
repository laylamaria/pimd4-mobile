import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotaGeral from './atividade4/components/Rotas';
export default function App() {
  return (
    <SafeAreaProvider>
      <RotaGeral></RotaGeral>
    </SafeAreaProvider>
  )
};