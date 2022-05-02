class OneMoment {
  DD;
  MM;
  YYYY;
  actualDate;
  actualDateString;
  constructor(dateNum, dateFormat) {
    let data = {};
    // this.date = new Date(currentDate);
    this.dateNum = dateNum;
    this.dateFormat = dateFormat;

    if (dateNum.includes("-")) {
      let arrFormat = dateFormat.split("-");
      let arrNum = dateNum.split("-");
      for (let i = 0; i < 3; i++) {
        if (arrFormat[i] == "DD") {
          data.DD = arrNum[i];
        } else if (arrFormat[i] == "MM") {
          data.MM = arrNum[i];
        } else if (arrFormat[i] == "YYYY") {
          data.YYYY = arrNum[i];
        }
      }
    } else if (dateNum.includes("/")) {
      let arrFormat = dateFormat.split("/");
      let arrNum = dateNum.split("/");
      for (let i = 0; i < 3; i++) {
        if (arrFormat[i] == "DD") {
          data.DD = arrNum[i];
        } else if (arrFormat[i] == "MM") {
          data.MM = arrNum[i];
        } else if (arrFormat[i] == "YYYY") {
          data.YYYY = arrNum[i];
        }
      }
    } else {
      let arrFormat = dateFormat.split("");
      let arrNum = dateNum.split("");

      if (arrFormat[0] == "D") {
        data.DD = arrNum[0] + arrNum[1];
        if (arrFormat[2] == "M") {
          data.MM = arrNum[2] + arrNum[3];
          data.YYYY = arrNum[4] + arrNum[5] + arrNum[6] + arrNum[7];
        } else {
          if (arrFormat[2] == "Y") {
            data.YYYY = arrNum[2] + arrNum[3] + arrNum[4] + arrNum[5];
            data.MM = arrNum[6] + arrNum[7];
          }
        }
      } else if (arrFormat[0] == "M") {
        data.MM = arrNum[0] + arrNum[1];
        if (arrFormat[2] == "D") {
          data.DD = arrNum[2] + arrNum[3];
          data.YYYY = arrNum[4] + arrNum[5] + arrNum[6] + arrNum[7];
        } else {
          if (arrFormat[2] == "Y") {
            data.YYYY = arrNum[2] + arrNum[3] + arrNum[4] + arrNum[5];
            data.DD = arrNum[6] + arrNum[7];
          }
        }
      } else if (arrFormat[0] == "Y") {
        data.YYYY = arrNum[0] + arrNum[1] + arrNum[2] + arrNum[3];
        if (arrFormat[4] == "D") {
          data.DD = arrNum[4] + arrNum[5];
          data.MM = arrNum[6] + arrNum[7];
        } else {
          data.DD = arrNum[6] + arrNum[7];
          data.MM = arrNum[4] + arrNum[5];
        }
      }
    }
    if (this.DD < 10) {
      this.DD = "0" + data.DD;
    } else {
      this.DD = data.DD;
    }
    if (this.MM < 10) {
      this.MM = "0" + data.MM;
    } else {
      this.MM = data.MM;
    }
    this.YYYY = data.YYYY;

    this.actualDateString = String(this.YYYY + "-" + this.MM + "-" + this.DD);
    this.actualDate = new Date(this.actualDateString);
  }
  static parse(dateNum, dateFormat) {
    return new this(dateNum, dateFormat);
  }
  format(someUsersDateFormatZzz) {
    let arrConclusion = [];
    someUsersDateFormatZzz = String(someUsersDateFormatZzz);
    if (someUsersDateFormatZzz.includes("/")) {
      let indexDiv1 = someUsersDateFormatZzz.indexOf("/");
      let indexDiv1Rep = someUsersDateFormatZzz.lastIndexOf("/");
      let indexDD = someUsersDateFormatZzz.indexOf("DD");
      let indexMM = someUsersDateFormatZzz.indexOf("MM");
      let indexYYYY = someUsersDateFormatZzz.indexOf("YYYY");
      console.log(indexDD);
      console.log(indexMM);
      console.log(indexYYYY);
      console.log(indexDiv1);
      console.log(indexDiv1Rep);
      arrConclusion[indexDiv1] = "/";
      if (indexDiv1Rep != -1) arrConclusion[indexDiv1Rep] = "/";
      if (indexDD != -1) arrConclusion[indexDD] = this.DD;
      if (indexMM != -1) arrConclusion[indexMM] = this.MM;
      if (indexYYYY != -1) arrConclusion[indexYYYY] = this.YYYY;
    } else {
      let indexDiv1 = someUsersDateFormatZzz.indexOf("-");
      let indexDiv1Rep = someUsersDateFormatZzz.lastIndexOf("-");
      let indexDD = someUsersDateFormatZzz.indexOf("DD");
      let indexMM = someUsersDateFormatZzz.indexOf("MM");
      let indexYYYY = someUsersDateFormatZzz.indexOf("YYYY");
      console.log(indexDD);
      console.log(indexMM);
      console.log(indexYYYY);
      console.log(indexDiv1);
      console.log(indexDiv1Rep);
      if (indexDiv1 != -1) arrConclusion[indexDiv1] = "-";
      if (indexDiv1Rep != -1) arrConclusion[indexDiv1Rep] = "-";
      if (indexDD != -1) arrConclusion[indexDD] = this.DD;
      if (indexMM != -1) arrConclusion[indexMM] = this.MM;
      if (indexYYYY != -1) arrConclusion[indexYYYY] = this.YYYY;
    }
    return arrConclusion.join("");
  }
  fromNow() {
    let difference = Math.round(
      Math.ceil(new Date() - new Date(this.actualDateString)) /
        1000 /
        60 /
        60 /
        24
    );
    let answer = `The difference between now and actual date is ${difference} days`;
    return answer;
  }
}

const someDate = OneMoment.parse("21-12-2012", "DD-MM-YYYY");
const anotherDate = OneMoment.parse("01202019", "MMDDYYYY");
console.log(someDate);
console.log(anotherDate);
console.log(someDate.format("YYYY/MM/DD")); // => 2012/12/21
console.log(anotherDate.format("MM-YYYY")); // => 01-2019
console.log(someDate.actualDate);
console.log(someDate.actualDateString);
console.log(someDate.fromNow());
window.OneMoment = OneMoment;
