const { describe, expect, test } = require("@jest/globals");

const validate = require("../problem2");

describe("validate password", function () {
  test("All condition setisfied", function () {
    expect(validate("aaaasT1a").status).toBe(true);
    expect(validate("aaaasT1a").message).toBe("valid password");
  });
  test("Number condition should check", function () {
    expect(validate("aaaasTaa").status).toBe(false);
    expect(validate("aaaasTaa").message).toBe("min one Number  require");

    expect(validate("a0aasTaa").status).toBe(true);
  });
  test("Cherecter length condition check", function () {
    expect(validate("1aaasTa").status).toBe(false);
    expect(validate("1aaasTa").message).toBe("min 8 character require");

    expect(validate("aaaasTa1").status).toBe(true);
  });

  test("Upper case condition check", function () {
    expect(validate("aasaas1a").status).toBe(false);
    expect(validate("aasaas1a").message).toBe("min one uppercase character require");

    expect(validate("aaaasTa1").status).toBe(true);
  });

  test("Lower case condition check", function () {
    expect(validate("AASAASA1").status).toBe(false);
    expect(validate("AASAASA1").message).toBe(
      "min one lowercase character require"
    );

    expect(validate("aaaasTa1").status).toBe(true);
  });
});


