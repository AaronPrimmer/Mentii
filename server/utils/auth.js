const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "h30difif832ig938j";
const expiration = "7 days";

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  signToken: function ({ email, firstname, _id }) {
    const payload = { email, firstname, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
