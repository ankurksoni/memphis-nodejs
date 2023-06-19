# Simple up and running example of memphis.dev using javascript in Node.js

## Pre-requisite

Make sure you have installed below,
* node.js
* docker engine

## Steps for local setup

* Just take a clone of this project.
* Run `docker-compose up -d`.
* Goto http://localhost:9000 and create a station with name `scorecard` and attach a schema `scorecard_schema` (you can see the option to attach schema), set username and password as `scorecard`.
    * Use this schema as follows,
        ```json
        {
            "$id": "https://example.com/address.schema.json",
            "description": "An address similar to http://microformats.org/wiki/h-card",
            "type": "object",
            "properties": {
                "id": {
                "type": "number"
                },
                "name": {
                "type": "string"
                },
                "score": {
                "type": "number"
                }
            },
            "required": [ "id", "name", "score" ]
        }
        ```
* Open 3 terminals.
    * 1 for a producer, this will produce and stop.
    * 2 consumers to be run in 2 different terminals.
* Monitor the status on http://localhost:9000/stations
* refer in case of issues: https://memphis.dev/blog/how-to-install-memphisdev-using-docker-compose/