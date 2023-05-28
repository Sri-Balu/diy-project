import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  




  convertNumberToString(inputNumber: number): string {
    if (inputNumber.toString().indexOf(".") >= 0) {
      return "please enter without decemal number";
    }
    const singleNumberToStringMap: { [key: number]: string } = {
      1: 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
      0: "Zero",
    };
    const tenthNumberToStringMap: { [key: number]: string } = {
      1: 'Ten',
      2: 'Twenty',
      3: 'Therty',
      4: 'Forty',
      5: 'Fifty',
      6: 'Sixty',
      7: 'Seventy',
      8: 'Eighty',
      9: 'Ninty',
    };

    const secoendNumberToStringMap: { [key: number]: string } = {
      1: 'Eleven',
      2: 'Twelve',
      3: 'Thirteen',
      4: 'Fourteen',
      5: 'Fifteen',
      6: 'Sixteen ',
      7: 'Seventeen',
      8: 'Eighthteen',
      9: 'Ninteen',
    };

    // const hundredNumberToStringMap: { [key: number]: string } = {
    //   1: 'Hundred',
    //   2: 'Hundred',
    //   3: 'Hundred',
    //   4: 'Hundred',
    //   5: 'Hundred',
    //   6: 'Hundred',
    //   7: 'Hundred',
    //   8: 'Hundred',
    //   9: 'Hundred',
    // };
    if (inputNumber.toString().length > 5) {
      return 'More than 9999';
    }
    if (inputNumber < 0) {
      return 'Be Positive +';
    }
    if (inputNumber.toString().length == 1) {
      return singleNumberToStringMap[inputNumber];
    }
    if (inputNumber.toString().length == 2) {
      //ba
      var a = inputNumber.toString().charAt(0);
      var b = inputNumber.toString().charAt(1);
      if (b == "0") {
        return tenthNumberToStringMap[Number(a)];
      }
      if (a == "1") {
        return secoendNumberToStringMap[Number(b)];
      }
      return tenthNumberToStringMap[Number(a)] + " " + singleNumberToStringMap[Number(b)]; //tenthNumberToStringMap[inputNumber] || 'Type Number to get string';
    }

    if (inputNumber.toString().length == 3) {
      //ba
      var a = inputNumber.toString().charAt(0);
      var b = inputNumber.toString().charAt(1);
      var c = inputNumber.toString().charAt(2);
      if (c == "0" && b == "0") {
        return singleNumberToStringMap[Number(a)] + " Hundred";
      }
      if (c == "0" && b != "0") {
        return singleNumberToStringMap[Number(a)] + " Hundred And " + tenthNumberToStringMap[Number(b)];
      }
      if (c != "0" && b == "0") {
        return singleNumberToStringMap[Number(a)] + " Hundred And " + singleNumberToStringMap[Number(c)];

      }
      if (c != "0" && b == "1") {
        return singleNumberToStringMap[Number(a)] + " Hundred And " + secoendNumberToStringMap[Number(c)];

      }
      return singleNumberToStringMap[Number(a)] + "Hundred And " + tenthNumberToStringMap[Number(b)] + " " + singleNumberToStringMap[Number(c)]; //tenthNumberToStringMap[inputNumber] || 'Type Number to get string';
    }
    if (inputNumber.toString().length == 4) {
      var a = inputNumber.toString().charAt(0);
      var b = inputNumber.toString().charAt(1);
      var c = inputNumber.toString().charAt(2);
      var d = inputNumber.toString().charAt(3);

      if (b == "0" && c == "0" && d == "0") {
        return singleNumberToStringMap[Number(a)] + " Thousand";
      }
      if (b == "0" && c == "0" && d != "0") {
        return singleNumberToStringMap[Number(a)] + " Thousand And" + singleNumberToStringMap[Number(d)];
      }
      if (b == "0" && c != "0" && d == "0") {
        return singleNumberToStringMap[Number(a)] + " Thousand And" + tenthNumberToStringMap[Number(c)];
      }
      if (b != "0" && c == "0" && d == "0") {
        return singleNumberToStringMap[Number(a)] + " Thousand And" + "  " + singleNumberToStringMap[Number(b)] + "Hundred.";
      }
      if (b == "0" && c == "1" && d != "0") {
        return singleNumberToStringMap[Number(a)] + " Thousand And" + "  " + secoendNumberToStringMap[Number(d)];
      }
      if (b != "0" && c == "0" && d != "0") {
        return singleNumberToStringMap[Number(a)] + " Thousand And" + "  " + singleNumberToStringMap[Number(b)] + "Hundred" + " " + singleNumberToStringMap[Number(d)]
      }
      if (b != "0" && c == "1" && d != "0") {
        return singleNumberToStringMap[Number(a)] + " Thousand And" + "  " + singleNumberToStringMap[Number(b)] + "Hundred" + " " + secoendNumberToStringMap[Number(d)]
      }
      if (b != "0" && c != "0" && d == "0") {
        return singleNumberToStringMap[Number(a)] + " Thousand And" + "  " + singleNumberToStringMap[Number(b)] + "Hundred" + " " + tenthNumberToStringMap[Number(c)]
      }
      return singleNumberToStringMap[Number(a)] + " Thousand And" + "  " + singleNumberToStringMap[Number(b)] + "Hundred And" + " " + tenthNumberToStringMap[Number(c)] + " " + singleNumberToStringMap[Number(d)]
    }
    return 'Type Number to get string';

  }
}