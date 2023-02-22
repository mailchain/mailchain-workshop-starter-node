require('dotenv').config() // imports .env environment variables 
const Mailchain = require('@mailchain/sdk').Mailchain; // imports the Mailchain SDK

const secretRecoveryPhrase = process.env.SECRET_RECOVERY_PHRASE; // 24 word mnemonicPhrase from .env
if (secretRecoveryPhrase == undefined) {
    throw new Error("Authentication error: Please add your SECRET_RECOVERY_PHRASE to '.env'")
}

// Test Mailchain SDK & Auth
const mailchain = Mailchain.fromSecretRecoveryPhrase(secretRecoveryPhrase);

async function getUser() {
    try {
        const user = await mailchain.user()
        console.log(user) // confirm authentication
    } catch (error) {
        throw new Error(error)
    }
}

getUser().then(() =>{
    console.log("💌⛓ Tests complete! Mailchain appears to be working correctly")
})


