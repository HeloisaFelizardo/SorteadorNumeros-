import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

const Titulo = () => {
  return (
    <View style={estilo.boxTitulo}>
      <Text style={estilo.titulo}>Sorteio DevMedia</Text>
      <Text style={estilo.subtitulo}>Hora de ver quem é o vencedor</Text>
    </View>
  );
}

export default Titulo;
