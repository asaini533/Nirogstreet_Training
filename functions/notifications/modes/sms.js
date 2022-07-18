const Result = require('folktale/result');
const config = require('config');
const { logInfo, logError } = require('lib/functional/logger');
const ConsumerSms = require('notifications/models/consumer-sms');
const ProxyService = require('resources/proxy/services/proxy-service');
const twilioAccountSid = config.sms.TWILIO_ACCOUNT_SID;
const twilioAuthToken = config.sms.TWILIO_AUTH_TOKEN;
const twilioNumber = config.sms.TWILIO_NUMBER;
const client = require('twilio')(twilioAccountSid, twilioAuthToken);
const sendSms = ((consumerSms) => {
    logInfo('sending sms from twilio', { consumerSms });
    return new Promise((resolve) => {
        client.messages
            .create({
                body: consumerSms.message,
                from: twilioNumber,
                to: consumerSms.to
            })
            .then((message) => {
                logInfo('Successfully sent sms from twilio', message);
                resolve(Result.Ok(message));
            })
            .catch((ex) => {
                logError('Failed to send sms from twilio', ex);
                resolve(Result.Error(ex));
            });
    });
});
module.exports.send = async (details) => {
    const consumerSms = new ConsumerSms(details.mobile, details.message);
    logInfo('Request to send sms', { consumerSms });
    if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
        return ProxyService.send({ response: { status: true, message: 'sent data to twilio sms' } });
    }
    const result = await sendSms(consumerSms);
    return result;
};