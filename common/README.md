## Install dependencies
Run `npm install` to install all dependencies.
## Generate `tracking.ttl`
The `tracking.ttl` file is a semantic turtle file outside a Solid Pod that stores the information
about our fictional tracking system. It contains information about the indoor deployments and systems.

In order to generate it, run `npm run generate` after which the file will be generated to `./dist/tracking.ttl`.

## Building
Building the common library can be done using `npm run build`