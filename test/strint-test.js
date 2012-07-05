if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([ "expect.js", "../strint" ],
    function(expect, strint) {
        describe("Sign handling", function() {
            it("negates", function() {
                expect(strint.negate("1")).to.be("-1");
            });
            it("computes magnitude", function() {
                expect(strint.abs("-5")).to.be("5");
            });
        });
        describe("Addition", function() {
            it("subtracts", function() {
                expect(strint.sub("9007199254740994", "1")).to.be("9007199254740993");
            });
            it("adds", function() {
                expect(strint.add("-2", "-2")).to.be("-4");
                expect(strint.add("2", "2")).to.be("4");
                expect(strint.add("2", "-2")).to.be("0");

                expect(strint.add("5", "-4")).to.be("1");
                expect(strint.add("5", "-6")).to.be("-1");

                expect(strint.add("-5", "4")).to.be("-1");
                expect(strint.add("-5", "6")).to.be("1");

                expect(strint.add("9007199254740992", "1")).to.be("9007199254740993");
            });
        });
        describe("Multiplication", function() {
            it("multiplies with digit", function() {
                expect(strint.timesDigit("125", 3)).to.be("375");
                expect(strint.timesDigit("1111111111111111111111", 3)).to.be("3333333333333333333333");
                expect(strint.timesDigit("5", 5)).to.be("25");
                expect(strint.timesDigit("9", 9)).to.be("81");
                expect(strint.timesDigit("1234567", 0)).to.be("0");
            });
            it("multiplies positive numbers", function() {
                expect(strint.mulPositive("123", "123")).to.be(String(123 * 123));
                expect(strint.mulPositive("5", "5")).to.be("25");
            });
            it("multiplies", function() {
                expect(strint.mul("-5", "5")).to.be("-25");
                expect(strint.mul("5", "-5")).to.be("-25");
                expect(strint.mul("5", "5")).to.be("25");
                expect(strint.mul("-5", "-5")).to.be("25");
            });
        });
        describe("Division", function() {
            it("divides non-negative integers with remainder", function() {
                expect(strint.quotientRemainderPositive("1500", "15")).to.eql([ "100", "0" ]);
                expect(strint.quotientRemainderPositive("167", "15")).to.eql([ "11", "2" ]);
                expect(strint.quotientRemainderPositive("225", "15")).to.eql([ "15", "0" ]);
                expect(strint.quotientRemainderPositive("700", "15")).to.eql([ "46", "10" ]);
                expect(strint.quotientRemainderPositive("290", "15")).to.eql([ "19", "5" ]);
            });
            it("divides", function() {
                expect(strint.div("15", "3")).to.eql("5");
                expect(strint.div("-15", "-3")).to.eql("5");
                expect(strint.div("-15", "3")).to.eql("-5");
                expect(strint.div("15", "-3")).to.eql("-5");
            });
        });
        describe("Comparison operators", function() {
            it("compare equal", function() {
                expect(strint.eq("15", "225")).to.be(false);
            });
            it("compare less than", function() {
                expect(strint.lt("0", "0")).to.be(false);
                expect(strint.lt("2", "2")).to.be(false);
                expect(strint.lt("-3", "-20")).to.be(false);
                expect(strint.lt("-7", "-1")).to.be(true);
                expect(strint.lt("2", "1999")).to.be(true);
            });
            it("compare greater or equal", function() {
                expect(strint.ge("15", "225")).to.be(false);
            });
            it("compare greater than", function() {
                expect(strint.gt("15", "225")).to.be(false);
            });
        });
        describe("Helpers", function() {
            it("normalize", function() {
                expect(strint.normalize("0000")).to.be("0");
                expect(strint.normalize("0")).to.be("0");
                expect(strint.normalize("00123")).to.be("123");
                expect(strint.normalize("123")).to.be("123");
                expect(strint.normalize("-00123")).to.be("-123");
                expect(strint.normalize("-123")).to.be("-123");
            });
        });
    }
);
