const { DiagConsoleLogger, DiagLogLevel, diag } = require('@opentelemetry/api');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');
const { PinoInstrumentation } = require('@opentelemetry/instrumentation-pino');
const { NodeSDK } = require("@opentelemetry/sdk-node");

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

const sdk = new NodeSDK({
  instrumentations: [
    new ExpressInstrumentation(),
    new PinoInstrumentation(),
  ],
});

sdk.start();
