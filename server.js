require('dotenv').config()
const Mailchain = require('@mailchain/sdk').Mailchain;

const secretRecoveryPhrase = process.env.SECRET_RECOVERY_PHRASE;
if (secretRecoveryPhrase == undefined) {
    throw new Error("Authentication error: Please add your SECRET_RECOVERY_PHRASE to '.env'")
}

const mailchain = Mailchain.fromSecretRecoveryPhrase(secretRecoveryPhrase);

/* Un-comment the sample section below to send a Mailchain mail **/

async function main() {
    const user = await mailchain.user()
    console.log(user);
    
    // const result = await mailchain.sendMail({
    //     from: '0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com',
    //     to: ['0xbb56FbD7A2caC3e4C17936027102344127b7a112@ethereum.mailchain.com'],
    //     subject: 'Hello test_account 👋',
    //     content:{
    //         text: 'Hello test_account 👋',
    //         html: '<h1>Hello test_account 👋</h1>'
    //     }
    // });
    // console.log(result);

};
main()

