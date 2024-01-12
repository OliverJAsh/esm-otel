import { DiagConsoleLogger, DiagLogLevel, diag } from '@opentelemetry/api';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { PinoInstrumentation } from '@opentelemetry/instrumentation-pino';
import { NodeSDK } from "@opentelemetry/sdk-node";

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.WARN);

const sdk = new NodeSDK({
  instrumentations: [
    new ExpressInstrumentation(),
    new PinoInstrumentation(),
  ],
});

sdk.start();
