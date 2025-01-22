import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { colors } from '@/src/theme/colors';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: colors.gray[100] }} > 
      <View style={s.container}>
        {/* Header fixo */}
        <View style={s.header}>
          <FontAwesome5 name="user-circle" size={55} color={colors.gray[100]} style={{ marginLeft: 10 }} />
          <Image source={require('../../assets/images/logo.png')} style={s.logo} />
          <TouchableOpacity>
            <View style={s.viewCarteira}>
              <FontAwesome5 name="wallet" size={35} color={colors.primary} />
              <Text style={s.viewTitle}>R$ 100</Text>
            </View>
          </TouchableOpacity>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.containerCard}>
          <View style={s.card}></View>
          <View style={s.card}></View>
          <View style={s.card}></View>
        </ScrollView>

        <View style={s.containerCardQuiz}>
          <View style={s.containerCardQuizImage}>
            <Image />
          </View>
          <View style={s.containerCardQuizIfo}>
            <Text style={s.cardTitle}>Quiz de Matematica</Text>
            <TouchableOpacity style={s.button}>
              <Text style={s.infoButton}>Jogue agora!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={s.containerCardQuiz}>
          <View style={s.containerCardQuizImage}>
            <Image />
          </View>
          <View style={s.containerCardQuizIfo}>
            <Text style={s.cardTitle}>Quiz de Matematica</Text>
            <TouchableOpacity style={s.button}>
              <Text style={s.infoButton}>Jogue agora!</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    </ScrollView>
  );
}

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    alignItems: 'center'

  },
  header: {
    width: '100%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 10,
    marginBottom: '10%'

  },
  logo: {
    width: 150,
    height: 150,
    marginLeft: '7%',

  },
  viewCarteira: {
    backgroundColor: colors.gray[100],
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 6,
    padding: 15,
    gap: 8,

  },
  viewTitle: {
    color: colors.gray[600],
    fontWeight: 'bold',
    fontSize: 20,

  },
  containerCard: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginBottom: 36,

  },
  card: {
    width: 300,
    height: 175,
    backgroundColor: colors.primary,
    borderRadius: 12,
    marginRight: 10,
  },
  containerCardQuiz: {
    width: 300,
    height: 300,
    borderRadius: 36,
    backgroundColor: colors.gray[100],
    elevation: 5,
    paddingHorizontal: 10,
    marginBottom: 30,

  },
  containerCardQuizImage: {
    height: '60%',
    width: '100%',
    borderRadius: 36,

  },
  teste: {
    height: '100%',
    width: '100%',
    borderRadius: 36,
    
  },
  containerCardQuizIfo: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

  },
  cardTitle: {
    fontWeight: 'bold'

  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,

  },
  infoButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray[100]
  }


});
