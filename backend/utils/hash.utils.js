const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, hashedEmail) => {
    return await bcrypt.compare(password, hashedEmail);
};

module.exports = {
    hashPassword,
    comparePassword,
};
