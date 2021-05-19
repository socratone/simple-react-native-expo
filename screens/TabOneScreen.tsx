import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import styled from 'styled-components/native'
import { Button, Alert, Text } from 'react-native';

const StyledText = styled(Text)`
  color: dodgerblue;
  font-size: 40px;
`

export default function TabOneScreen() {
  const handlePress = () => {
    Alert.alert('버튼을 클릭했습니다.')
  }
  
  return (
    <View style={styles.container}>
      <StyledText>Tab One</StyledText>
      <Button title="클릭" color="hotpink" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
