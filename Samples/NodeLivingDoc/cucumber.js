const common = [
  "features\\*.feature",
  "--require-module ts-node/register",
  //'--require-module jsdom-global/register',
  "--require step-definitions\\*.steps.{ts,tsx}",
  //'--format progress-bar'
  '--format json:reports\\cucumber-report.json'
].join(" ");

module.exports = {
  default: common,
};
