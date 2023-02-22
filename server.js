require('dotenv').config()
const Mailchain = require('@mailchain/sdk').Mailchain;

const secretRecoveryPhrase = process.env.SECRET_RECOVERY_PHRASE;
if (secretRecoveryPhrase == undefined) {
    throw new Error("Authentication error: Please add your SECRET_RECOVERY_PHRASE to '.env'")
}

const mailchain = Mailchain.fromSecretRecoveryPhrase(secretRecoveryPhrase);

/* Un-comment the sample section below to send a Mailchain mail **/

mailchain.user().then(async (user) => { 
    console.log(user)
    
    // const result = await mailchain.sendMail({
    //     // change this to send to your recipients:
    //     to: [ "0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com" ],
    //     // change this to a Mailchain account or ethereum address registered in your Mailchain account
    //     from: "0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com", 
    //      subject: 'Sent via Mailchain',
    //      content: {
    //          text: 'Hello Mailchain 👋',
    //          html: '<p>Hello Mailchain 👋</p>',
    //      },
    //  });
    //  console.log(result);

});
// **/

