export default class String {
  static convertToStringDDMMYYY = (day, month, year) => {
    return day + '/' + month + '/' + year;
  };

  /**
   * Example:
   *
   * let text = "How are you doing today?";
   * splitSentenceToArrayWord(text)
   * const myArray = text.split(" ");
   * let word = myArray[1];   // are
   *
   */
  static splitSentenceToArrayWord = text => {
    return text.split(' ');
  };
}
