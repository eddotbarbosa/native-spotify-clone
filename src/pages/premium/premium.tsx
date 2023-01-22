import {ScrollView} from 'react-native';

import {
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
} from './premium.styles';

import CheckMarkIcon from '../../assets/check-mark-icon.svg';

import {theme} from '../../styles/theme';

const Premium = function () {
  return (
    <PremiumWrapper>
      <ScrollView>
        <PremiumHeader>
          <FreeTestText>FREE TRIAL</FreeTestText>
          <HeaderText>Try premium for free for 1 month</HeaderText>
        </PremiumHeader>

        <BePremiumWrapper>
          <BePremiumButton>
            <BePremiumButtonText>BE PREMIUM</BePremiumButtonText>
          </BePremiumButton>
          <BePremiumDescription>Afterwards, only R$ 19.90/month. Offer valid for new premium users only. <BePremiumSubjectText>Subject to terms</BePremiumSubjectText>.</BePremiumDescription>

          <WhyBePremiumWrapper>
            <WhyBePremiumHeading>Why subscribe to premium?</WhyBePremiumHeading>
            <WhyBePremiumReson>
              <CheckMarkIcon />
              <WhyBePremiumResonText>Listen in offline mode without needing Wi-Fi or mobile data</WhyBePremiumResonText>
            </WhyBePremiumReson>
            <WhyBePremiumReson>
              <CheckMarkIcon />
              <WhyBePremiumResonText>Listen to songs in any order you like</WhyBePremiumResonText>
            </WhyBePremiumReson>
            <WhyBePremiumReson>
              <CheckMarkIcon />
              <WhyBePremiumResonText>Song without ad interruptions </WhyBePremiumResonText>
            </WhyBePremiumReson>
            <WhyBePremiumReson>
              <CheckMarkIcon />
              <WhyBePremiumResonText>Superior sound quality</WhyBePremiumResonText>
            </WhyBePremiumReson>
          </WhyBePremiumWrapper>

          <CurrentPlanWrapper>
            <CurrentPlanText>Spotify Free</CurrentPlanText>
            <CurrentPlanHeading>CURRENT PLAN</CurrentPlanHeading>
          </CurrentPlanWrapper>

          <PlanOptionsWrapper>
            <PlanOptionsHeading>Chose you premium plan</PlanOptionsHeading>

            <PLanOption bg={theme.colors.greenThree}>
              <PlanOptionHeader>
                <PlanOptionHeaderText>Individual Premium</PlanOptionHeaderText>
                <PlanOptionPriceWrapper>
                  <PlanOptionPrice>R$19,90</PlanOptionPrice>
                  <PlanOptionDuration>FROM/MONTH</PlanOptionDuration>
                </PlanOptionPriceWrapper>
              </PlanOptionHeader>
              <PlanOptionText>First month free with subscription . 1 premium account</PlanOptionText>
              <PlanOptionPlanButton>
                <PlanOptionPlanButtonText>SUBSCRIPTION PLAN</PlanOptionPlanButtonText>
              </PlanOptionPlanButton>
              <PlanOptionPlanButton>
                <PlanOptionPlanButtonText>PREPAID  PLAN</PlanOptionPlanButtonText>
              </PlanOptionPlanButton>
              <PlanOptionDescription>Afterwards, only R$19.90/month. Offer valid for new premium users only. Cancel whenever you want. subject to terms</PlanOptionDescription>
            </PLanOption>

            <PLanOption bg={theme.colors.orangeOne}>
              <PlanOptionHeader>
                <PlanOptionHeaderText>University Premium</PlanOptionHeaderText>
                <PlanOptionPriceWrapper>
                  <PlanOptionPrice>Free</PlanOptionPrice>
                  <PlanOptionDuration>FOR 1 MONTH</PlanOptionDuration>
                </PlanOptionPriceWrapper>
              </PlanOptionHeader>
              <PlanOptionText>1 premium account</PlanOptionText>
              <PlanOptionPlanButton>
                <PlanOptionPlanButtonText>ENJOY 1 MONTH FREE</PlanOptionPlanButtonText>
              </PlanOptionPlanButton>
              <PlanOptionDescription>Afterwards, only R$9.90/month. Offer valid for new premium users only. Special discount for eligible students. subject to terms</PlanOptionDescription>
            </PLanOption>

            <PLanOption bg={theme.colors.blueOne}>
              <PlanOptionHeader>
                <PlanOptionHeaderText>Premium Duo</PlanOptionHeaderText>
                <PlanOptionPriceWrapper>
                  <PlanOptionPrice>R$24,90</PlanOptionPrice>
                  <PlanOptionDuration>FROM/MONTH</PlanOptionDuration>
                </PlanOptionPriceWrapper>
              </PlanOptionHeader>
              <PlanOptionText>First month free with subscription . 2 premium account</PlanOptionText>
              <PlanOptionPlanButton>
                <PlanOptionPlanButtonText>SUBSCRIPTION PLAN</PlanOptionPlanButtonText>
              </PlanOptionPlanButton>
              <PlanOptionPlanButton>
                <PlanOptionPlanButtonText>PREPAID  PLAN</PlanOptionPlanButtonText>
              </PlanOptionPlanButton>
              <PlanOptionDescription>Afterwards, only R$24.90/month. Offer valid for new premium users only. For two people who live together. subject to terms</PlanOptionDescription>
            </PLanOption>

            <PLanOption bg={theme.colors.purpleOne}>
              <PlanOptionHeader>
                <PlanOptionHeaderText>Premium Family</PlanOptionHeaderText>
                <PlanOptionPriceWrapper>
                  <PlanOptionPrice>R$34,90</PlanOptionPrice>
                  <PlanOptionDuration>FROM/MONTH</PlanOptionDuration>
                </PlanOptionPriceWrapper>
              </PlanOptionHeader>
              <PlanOptionText>First month free with subscription . up to 6 premium or kids accounts . App Spotify Kids . Block songs with explicit content</PlanOptionText>
              <PlanOptionPlanButton>
                <PlanOptionPlanButtonText>SUBSCRIPTION PLAN</PlanOptionPlanButtonText>
              </PlanOptionPlanButton>
              <PlanOptionPlanButton>
                <PlanOptionPlanButtonText>PREPAID  PLAN</PlanOptionPlanButtonText>
              </PlanOptionPlanButton>
              <PlanOptionDescription>Afterwards, only R$34.90/month. Offer valid for new premium users only. For up to 6 family members living together. subject to terms</PlanOptionDescription>
            </PLanOption>
          </PlanOptionsWrapper>
        </BePremiumWrapper>
      </ScrollView>
    </PremiumWrapper>
  );
};

export {Premium};
