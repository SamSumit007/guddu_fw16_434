//password validator

//should be of 6character
// at least one big character
// at least one symboll
// at least one small char

/**
 *
 * @param {string} pass
 * @returns boolean
 */
function validate(pass) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const uppercase = lowerCase.map((e) => e.toUpperCase());
  const digits = "1234567890".split("");
  if (pass.length < 8) {
    return {
      status: false,
      message: "min 8 character require",
    };
  }
  if (!pass.split("").find((c) => lowerCase.includes(c))) {
    return {
      status: false,
      message: "min one lowercase character require",
    };
  }
  if (!pass.split("").find((c) => uppercase.includes(c))) {
    return {
      status: false,
      message: "min one uppercase character require",
    };
  }

  if (!pass.split("").find((c) => digits.includes(c))) {
    return {
      status: false,
      message: "min one Number  require",
    };
  }

  return {
    status: true,
    message: "valid password",
  };
}

module.exports = validate;
