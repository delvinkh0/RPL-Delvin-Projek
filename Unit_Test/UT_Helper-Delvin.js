
const Kalkulator = require("../Helper/helper-Delvin");
const expect = require("chai").expect;

describe("Kalkulator", () => {
  let kalkulator;

  beforeEach(() => {
    kalkulator = new Kalkulator();
  });

  it("should add two numbers", () => {
    expect(kalkulator.tambah(2, 3)).to.equal(5);
  });

  it("should subtract two numbers", () => {
    expect(kalkulator.kurang(5, 2)).to.equal(3);
  });

  it("should multiply two numbers", () => {
    expect(kalkulator.kali(3, 4)).to.equal(12);
  });

  it("should divide two numbers", () => {
    expect(kalkulator.bagi(10, 2)).to.equal(5);
  });

  it("should return an error message when dividing by zero", () => {
    expect(kalkulator.bagi(10, 0)).to.equal("Tidak dapat dibagi dengan 0");
  });
});