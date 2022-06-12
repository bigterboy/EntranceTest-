import {Dimensions, StatusBar, Platform} from 'react-native';

// switch (typeCan) {
//   case 'Tý':
//     return true;
//   case 'Sửu':
//     return true;
//   case 'Dần':
//     return false;
//   case 'Mão':
//     return false;
//   case 'Thìn':
//     return true;
//   case 'Tỵ':
//     return true;
//   case 'Ngọ':
//     return false;
//   case 'Mùi':
//     return true;
//   case 'Thân':
//     return false;
//   case 'Dậu':
//     return false;
//   case 'Tuất':
//     return true;
//   case 'Hợi':
//     return false;
//   default:
//     return 'black';
// }

export default class CheckTypeOfDate {
  static isGoodDay = (month, zodiac) => {
    console.log('IN RA: ' + month + '+' + zodiac);
    switch (zodiac) {
      case 'Tý':
        if (
          month === 1 ||
          month === 7 ||
          month === 2 ||
          month === 8 ||
          month === 5 ||
          month === 11
        ) {
          return true;
        }
        return false;
      case 'Sửu':
        if (
          month === 1 ||
          month === 7 ||
          month === 4 ||
          month === 10 ||
          month === 5 ||
          month === 11
        ) {
          return true;
        }
        return false;
      case 'Dần':
        if (
          month === 1 ||
          month === 7 ||
          month === 4 ||
          month === 10 ||
          month === 5 ||
          month === 11
        ) {
          return true;
        }
        return false;
      case 'Mão':
        if (
          month === 2 ||
          month === 8 ||
          month === 5 ||
          month === 11 ||
          month === 6 ||
          month === 12
        ) {
          return true;
        }
        return false;
      case 'Thìn':
        if (
          month === 1 ||
          month === 7 ||
          month === 3 ||
          month === 9 ||
          month === 4 ||
          month === 10
        ) {
          return true;
        }
        return false;
      case 'Tỵ':
        if (
          month === 1 ||
          month === 7 ||
          month === 3 ||
          month === 9 ||
          month === 6 ||
          month === 12
        ) {
          return true;
        }
        return false;
      case 'Ngọ':
        if (
          month === 2 ||
          month === 8 ||
          month === 4 ||
          month === 10 ||
          month === 5 ||
          month === 11
        ) {
          return true;
        }
        return false;
      case 'Mùi':
        if (
          month === 1 ||
          month === 7 ||
          month === 2 ||
          month === 8 ||
          month === 4 ||
          month === 10
        ) {
          return true;
        }
        return false;
      case 'Thân':
        if (
          month === 3 ||
          month === 9 ||
          month === 5 ||
          month === 11 ||
          month === 6 ||
          month === 12
        ) {
          return true;
        }
        return false;
      case 'Dậu':
        if (
          month === 2 ||
          month === 8 ||
          month === 3 ||
          month === 9 ||
          month === 5 ||
          month === 11
        ) {
          return true;
        }
        return false;
      case 'Tuất':
        if (
          month === 1 ||
          month === 7 ||
          month === 4 ||
          month === 10 ||
          month === 6 ||
          month === 12
        ) {
          return true;
        }
        return false;
      case 'Hợi':
        if (
          month === 3 ||
          month === 9 ||
          month === 4 ||
          month === 10 ||
          month === 6 ||
          month === 12
        ) {
          return true;
        }
        return false;
      default:
        return false;
    }
  };
}
