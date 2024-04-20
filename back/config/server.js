module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "fcdb30d8ef9d4aef046e33de89ec8d4c99be5fc3a3672d1b5bfe956d3a454f33e2a3546ae1e2d70c4c0e0b007405afbf3870e91a2a445a9c01789016e6bbfd26",
      "a8fd3b6b2d073c06434c369fb8b46e3d8f2dc9f5d51d5e4ef3a7a65f86f1e0f1b4d0a2f73c30b998a8a0d46e45f5d5a84fc31294f44a4d498e6a78403a5277c",
    ],
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
