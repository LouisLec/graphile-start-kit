# @app/config

This workspace provides global configuration for the whole app. `./env` loads the env vars at root and `./extra` computes extra env vars from the existing ones. `./src/index.ts` defines global settings.

To import envVars and computed envVars when running a script, it should be called *via* `node -r @app/config/env path/to/file.js`
