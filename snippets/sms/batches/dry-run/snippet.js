// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const from = 'YOUR_sinch_phone_number';
  const recipient = 'YOUR_recipient_phone_number';
  const body = 'This is a test SMS message using the Sinch Node.js SDK.';

  /** @type {Sms.DryRunRequestData} */
  const requestData= {
    dryRunRequestBody: {
      type: 'mt_text',
      from,
      to: [
        recipient,
      ],
      body,
    },
  };

  const response = await smsService.batches.dryRun(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
