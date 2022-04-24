import styled from 'styled-components/native';
import { Platform } from 'react-native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #000;
    align-items: center;
    padding-top: ${Platform.OS === "android" ? '40px' : 0};
`;
