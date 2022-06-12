const DateChinese = [
  'Giáp Tý',
  'Ất Sửu',
  'Bính Dần',
  'Đinh Mão',
  'Mậu Thìn',
  'Kỷ Tỵ',
  'Canh Ngọ',
  'Tân Mùi',
  'Nhâm Thân',
  'Quý Dậu',
  'Giáp Tuất',
  'Ất Hợi',
  'Bính Tý',
  'Đinh Sửu',
  'Mậu Dần',
  'Kỷ Mão',
  'Canh Thìn',
  'Tân Tỵ',
  'Nhâm Ngọ',
  'Quý Mùi',
  'Giáp Thân',
  'Ất Dậu',
  'Bính Tuất',
  'Đinh Hợi',
  'Mậu Tý',
  'Kỷ Sửu',
  'Canh Dần',
  'Tân Mão',
  'Nhâm Thìn',
  'Quý Tỵ',
  'Giáp Ngọ',
  'Ất Mùi',
  'Bính Thân',
  'Đinh Dậu',
  'Mậu Tuất',
  'Kỷ Hợi',
  'Canh Tý',
  'Tân Sửu',
  'Nhâm Dần',
  'Quý Mão',
  'Giáp Thìn',
  'Ất Tỵ',
  'Bính Ngọ',
  'Đinh Mùi',
  'Mậu Thân',
  'Kỷ Dậu',
  'Canh Tuất',
  'Tân Hợi',
  'Nhâm Tý',
  'Quý Sửu',
  'Giáp Dần',
  'Ất Mão',
  'Bính Thìn',
  'Đinh Tỵ',
  'Mậu Ngọ',
  'Kỷ Mùi',
  'Canh Thân',
  'Tân Dậu',
  'Nhâm Tuất',
  'Quý Hợi',
];
// enum TwelveZodiacs {
//     Tý,
//     Sửu,
//     Dần,
//     Mão,
//     Thìn,
//     Tỵ,
//     Ngọ,
//     Mùi,
//     Thân,
//     Dậu,
//     Hợi,
// }

import moment from 'moment';

const TenCan = [
  'Giáp',
  'Ất',
  'Bính',
  'Đinh',
  'Mậu',
  'Kỷ',
  'Canh',
  'Tân',
  'Nhâm',
  'Quý',
];

const TwelveZodiacs = [
  'Tý',
  'Sửu',
  'Dần',
  'Mão',
  'Thìn',
  'Tỵ',
  'Ngọ',
  'Mùi',
  'Thân',
  'Dậu',
  'Tuất',
  'Hợi',
];

class ConvertDateChinese {
  // Giáp tý 11/1/2022

  // let can = 1;
  // let zodiac = 9;
  constructor() {
    // 01-01-2022
    this.can = 11;
    this.zodiac = 1;
  }

  convertToDateCanZodiac = day => {
    var a = moment('11/1/2022', 'DD/MM/YYYY');
    var b = moment(day, 'DD/MM/YYYY');
    var diffDays = Math.abs(b.diff(a, 'days'));
    // console.log('OK: ' + diffDays);
    // let temp = '';
    // for (let k = 0; k < 60; k++) {
    //   temp = temp + '"' + TenCan[k % 10] + ' ' + TwelveZodiacs[k % 12] + '",';
    // }
    // for (let i = 0; i < TenCan.length; i++) {
    //   for (let j = 0; j < TwelveZodiacs.length; j++) {
    //     temp = temp + '"' + TenCan[i] + ' ' + TwelveZodiacs[j] + ',';
    //   }
    // }
    // console.log('INNNNN: ' + temp);
    return DateChinese[diffDays % 60];
  };
}

const convertDateChinese = new ConvertDateChinese();
export default convertDateChinese;
