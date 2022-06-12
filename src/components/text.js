import React, {Component} from 'react';
import {Text} from 'react-native';
import {Translation} from 'react-i18next';

export default class TextCustom extends Component {
  render() {
    return (
      <Translation>
        {t => (
          <Text allowFontScaling={false} {...this.props}>
            {t(`${this.props.children}`)}
          </Text>
        )}
      </Translation>
    );
  }
}
