import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, BackHandler } from 'react-native';

import { t } from './../locales/languages';
import { isPlatformiOS } from './../Util';
import Colors from '../constants/colors';
import fontFamily from './../constants/fonts';
import team from './../assets/svgs/team';
import NavigationBarWrapper from '../components/NavigationBarWrapper';
import { SvgXml } from 'react-native-svg';
import lock from '../assets/svgs/lock';

class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  backToMain() {
    this.props.navigation.goBack();
  }

  handleBackPress = () => {
    this.backToMain();
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  render() {
    return (
      <NavigationBarWrapper
        title={t('About')}
        onBackPress={this.backToMain.bind(this)}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.spacer} />

          <View style={styles.spacer} />

          <SvgXml style={styles.aboutSectionIconLock} xml={lock} />
          <Text style={styles.aboutSectionTitles}>{t('about|Commitment')}</Text>
          <Text style={styles.aboutSectionPara}>
            {t(
              'about|Safe Paths securely records and checks your interaction with people using your location. Your data will NEVER leave your phone without your consent.',
            )}
          </Text>

          <SvgXml style={styles.aboutSectionIconTeam} xml={team} />
          <Text style={styles.aboutSectionTitles}>{t('about|Team')}</Text>
          <Text style={styles.aboutSectionPara}>
            {t(
              'about|Our team is composed of a consortium of epidemiologists, engineers, data scientists, digital privacy evangelists, professors and researchers from reputable institutions, including: MIT, Harvard, The Mayo Clinic, TripleBlind, EyeNetra, Ernst & Young and Link Ventures.',
            )}
          </Text>
        </ScrollView>
      </NavigationBarWrapper>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: Colors.INTRO_WHITE_BG,
    paddingHorizontal: 26,
    flex: 1,
  },
  section: {
    flexDirection: 'column',
    width: '87.5%',
    alignSelf: 'center',
    backgroundColor: Colors.WHITE,
  },
  aboutSectionIconTeam: {
    width: 40.38,
    height: 19,
    marginTop: 36,
  },
  aboutSectionIconLock: {
    width: 20,
    height: 26.67,
    marginTop: 36,
  },
  aboutSectionTitles: {
    color: Colors.VIOLET_TEXT,
    fontSize: 26,
    fontFamily: fontFamily.primaryMedium,
    marginTop: 9,
  },
  aboutSectionPara: {
    color: Colors.VIOLET_TEXT,
    fontSize: 16,
    lineHeight: 22.5,
    marginTop: 12,
    alignSelf: 'center',
    fontFamily: fontFamily.primaryRegular,
  },
  divider: {
    backgroundColor: Colors.DIVIDER,
    height: 1.5,
  },
  fullDivider: {
    backgroundColor: Colors.DIVIDER,
    height: 1,
    width: '100%',
  },
  spacer: {
    marginVertical: '2%',
  },
});

export default AboutScreen;
