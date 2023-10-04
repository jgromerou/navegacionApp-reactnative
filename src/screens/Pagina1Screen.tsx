import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Pagina1Screen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir a Página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }
        >
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'María',
            })
          }
        >
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
