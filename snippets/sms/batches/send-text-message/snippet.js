// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const from = 'YOUR_sinch_phone_number';
  const recipient = 'YOUR_recipient_phone_number';

  /** @type {Sms.SendTextSMSRequestData} */
  const requestData= {
    sendSMSRequestBody: {
      type: 'mt_text',
      from,
      to: [
        recipient,
      ],
      body: 'Hi $\{name}! Here is your discount code ${code}',
      parameters: {
        name: {
          [recipient]: 'John',
          default: 'there',
        },
        code: {
          [recipient]: 'SUMMER20 😎',
        },
      },
    },
  };

  const response = await smsService.batches.sendTextMessage(requestData);

  console.log(`Response for SMS batch:\n${JSON.stringify(response, null, 2)}`);
};
