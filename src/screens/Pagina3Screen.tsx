import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

export const Pagina3Screen = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />

      <Button
        title="Ir a la página 1 (home)"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
