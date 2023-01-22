import styled from 'styled-components/native'
import Constants from 'expo-constants';
import {Platform} from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? `${Constants.statusBarHeight}px` : 0;

const PremiumWrapper = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.blackOne};
  padding-top: ${statusBarHeight};
  padding-left: 17px;
  padding-right: 17px;
  height: 100%;
`;

const PremiumHeader = styled.View`
`;

const FreeTestText = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-size: 13px;
  margin-top: 17px;
  margin-bottom: 6px;
`;

const HeaderText = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 17px;
`;

const BePremiumWrapper = styled.View`

`;

const BePremiumButton = styled.TouchableHighlight`
  background-color: ${(props) => props.theme.colors.whiteOne};
  border-radius: 32px;
  margin: 0 10px;
  margin-bottom: 8px;
`;

const BePremiumButtonText = styled.Text`
  color: ${(props) => props.theme.colors.blackOne};
  text-align: center;
  font-weight: bold;
  padding: 16px 0px;
`;

const BePremiumDescription = styled.Text`
  color: ${(props) => props.theme.colors.grayOne};
  margin-bottom: 17px;
`;

const BePremiumSubjectText = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-weight: bold;
`;

const WhyBePremiumWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.blackTwo};
  border-radius: 7px;
  padding: 0 17px 15px 17px;
  margin-bottom: 50px;
`;

const WhyBePremiumHeading = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-size: 18px;
  font-weight: bold;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const WhyBePremiumReson = styled.View`
  flex-direction: row;
  width: 80%;
  margin-bottom: 17px;
  align-items: center;
`;

const WhyBePremiumResonText = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  margin-left: 7px;
`;

const CurrentPlanWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.blackTwo};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 28px 28px;
  border-radius: 7px;
  margin-bottom: 50px;
`;

const CurrentPlanText = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-weight: bold;
  font-size: 22px;
`;

const CurrentPlanHeading = styled.Text`
  color: ${(props) => props.theme.colors.grayOne};
  font-size: 12px;
  font-weight: 700;
`;

const PlanOptionsWrapper = styled.View`
`;

const PlanOptionsHeading = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 17px;
`;

interface PlanOption {
  bg: string;
}

const PLanOption = styled.View<PlanOption>`
  background-color: ${(props) => props.bg};
  border-radius: 7px;
  padding: 0 32px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
`;

const PlanOptionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
`;

const PlanOptionHeaderText = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-size: 18px;
  font-weight: bold;
`;

const PlanOptionPriceWrapper = styled.View`
  align-items: flex-end;
`;

const PlanOptionPrice = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-weight: bold;
  font-size: 22px;
`;

const PlanOptionDuration = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
`;

const PlanOptionText = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 18px;
`;

const PlanOptionPlanButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.whiteOne};
  margin-bottom: 17px;
  border-radius: 34px;
  width: auto;
`;

const PlanOptionPlanButtonText = styled.Text`
  color: ${(props) => props.theme.colors.blackOne};
  padding: 17px 38px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const PlanOptionDescription = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  margin-bottom: 17px;
  text-align: center;
`;

export {
  PremiumWrapper,
  PremiumHeader,
  FreeTestText,
  HeaderText,
  BePremiumWrapper,
  BePremiumButton,
  BePremiumButtonText,
  BePremiumDescription,
  BePremiumSubjectText,
  WhyBePremiumWrapper,
  WhyBePremiumHeading,
  WhyBePremiumReson,
  WhyBePremiumResonText,
  CurrentPlanWrapper,
  CurrentPlanText,
  CurrentPlanHeading,
  PlanOptionsWrapper,
  PlanOptionsHeading,
  PLanOption,
  PlanOptionHeader,
  PlanOptionHeaderText,
  PlanOptionPriceWrapper,
  PlanOptionPrice,
  PlanOptionDuration,
  PlanOptionText,
  PlanOptionPlanButton,
  PlanOptionPlanButtonText,
  PlanOptionDescription
};
