# Toy Blocks

## Installation

1. `git clone repo`
2. `cd toy-blocks-client-react`
3. `nvm use`
4. `npm i`
5. `npm start`
6. `npm test`

## Instructions

The current application is displaying a list of nodes. Don’t worry about naming convention here, the names don’t matter. Each node represents a server. Each server implements the same API but returns different data. The important endpoints you will need to know for each server are:
/api/v1/status
/api/v1/blocks

Each node has many blocks and the blocks for each node are returned from the blocks endpoint.

Currently the application is getting the status for each node and updating the state. We would like you to retrieve the blocks from the endpoint, place them in the state and render them into a list that matches the design.

## Acceptance criteria:
1. Blocks are displayed when opening up the card
2. Loading, error, empty states are displayed when appropriate
3. Tests pass and coverage has been added to cover the changes
4. Implementation matches the design

Tests are a mandatory part of the challenge! At the end of the challenge please go through and explain everything you have done and show your UI work.
