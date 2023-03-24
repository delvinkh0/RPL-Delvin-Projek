// kalkulator.js
class Kalkulator {
  constructor() {
    this.hasil = 0;
  }

  tambah(angka1, angka2) {
    this.hasil = angka1 + angka2;
    return this.hasil;
  }

  kurang(angka1, angka2) {
    this.hasil = angka1 - angka2;
    return this.hasil;
  }

  kali(angka1, angka2) {
    this.hasil = angka1 * angka2;
    return this.hasil;
  }

  bagi(angka1, angka2) {
    if (angka2 == 0) {
      return "Tidak dapat dibagi dengan 0";
    } else {
      this.hasil = angka1 / angka2;
      return this.hasil;
    }
  }
}

module.exports = Kalkulator;
