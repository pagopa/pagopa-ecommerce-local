# pagopa-personal-data-vault-tokenizer

## Overview
A simple `json-server` used to mock pdv API. 

## Notes
It uses `src/middleware.js` to transform the HTTP verb used in the request
in order to make the db immutable (read only -> `GET`).