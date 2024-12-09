import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function KehadiranScreen({ route, navigation }) {
  const { teacher } = route.params;
  const [status, setStatus] = useState('');

  const handleKehadiran = (presence) => {
    setStatus(presence ? 'Hadir' : 'Tidak Hadir');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absensi untuk {teacher.name}</Text>
      <Button title="Hadir" onPress={() => handleKehadiran(true)} />
      <Button title="Tidak Hadir" onPress={() => handleKehadiran(false)} />
      {status && <Text style={styles.status}>Status: {status}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});
