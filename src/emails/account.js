const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey = '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'
// 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
// sgMail.setApiKey(sendgridAPIKey)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jaydeep.elluminati@gmail.com',
        subject: 'Welcome to Email',
        text: 'Thanks for joining.${name}'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jaydeep.elluminati@gmail.com',
        subject: 'sorry to see you go',
        text: 'goodbye,${name}.I hope to see you back soon'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}




// sgMail.send({
//     to: 'jaydeep.elluminati@gmail.com',
//     from: 'theaveshqureshi@gmail.com',
//     subject: 'form atmiya',
//     text: 'congratulation to get addmission in atmiya'

// })