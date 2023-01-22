import styled from 'styled-components/native';

import Cascadingss from '../../components/cascadingss/cascadingss';

const LoginWrapper = styled(Cascadingss)`
  padding: 0 17px;
  background-color: ${props => props.theme.colors.blackOne};
`;

const Header = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.whiteOne};
`;

const SignupButton = styled.TouchableHighlight`
  background-color: ${props => props.theme.colors.greenOne};
  width: 100%;
  border-radius: 999px;
  margin-bottom: 6px;
`;

const SignupText = styled.Text`
  color: ${props => props.theme.colors.blackOne};
  font-size: 21px;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
`;

const ContinueWithButton = styled.TouchableHighlight`
  border: 1px solid ${props => props.theme.colors.whiteOne};
  width: 100%;
  border-radius: 999px;
  margin-bottom: 6px;
`;

const ContinueWithtext = styled.Text`
  color: ${props => props.theme.colors.whiteOne};
  font-size: 20px;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  width: 100%;
`;

const LoginButton = styled.TouchableHighlight`
`;

const LoginText = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: white;
`


export {LoginWrapper, Header, SignupButton, SignupText, ContinueWithButton, ContinueWithtext, LoginButton, LoginText};
