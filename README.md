# Mailchain Workshop Starter Node

Welcome! This repository makes it easy to get your nodejs environment up and
running for Mailchain workshops.

It includes:

- an application initialized with NPM
- a .gitignore template for node projects (source:
  [Github gitignore templates](https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore))
- configuration for .env (using [dotenv](https://www.npmjs.com/package/dotenv))
  so you can add environment variables and secrets to your application.

## Instructions

1. Fork this repository, then check the repository out
1. Install packages by running:

   ```bash
   npm install
   ```

1. Copy `.env.example` to `.env` and update your `SECRET_RECOVERY_PHRASE` to
   your own Mailchain test and development account.

   If you have not created an account for test and dev, we recommend you append
   your regular Mailchain username with `-test-dev`, e.g. `alice@mailchain` >>
   `alice-test-dev@mailchain`.

1. In the terminal, run the following to ensure the SDK is configured and working:
   ```bash
   npm test
   ```

   You should receive a message similar to:

    `💌⛓ Tests complete! Mailchain appears to be working correctly`

1. You are now all setup to start working on your workshop module.

### Sample code

In `'server.js'` there is some sample code that you can use to test sending a Mailchain message using the SDK. Uncomment it or remove it if you do not need it.
