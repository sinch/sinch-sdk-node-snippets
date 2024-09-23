// eslint-disable-next-line no-unused-vars
import { Sms, SmsService, textToHex } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const from = 'YOUR_sinch_phone_number';
  const recipient = 'YOUR_recipient_phone_number';
  const batchId = 'the_batch_id_scheduled_in_the_future';

  /** @type {Sms.ReplaceBatchMessageRequestData} */
  const requestData= {
    batch_id: batchId,
    replaceBatchMessageRequestBody: {
      type: 'mt_binary',
      from,
      to: [
        recipient,
      ],
      udh: textToHex('UserDataHeader'),
      body: btoa('This is a replaced message'),
      client_reference: 'Sinch Node.js SDK snippet',
    },
  };

  const response = await smsService.batches.replace(requestData);

  console.log(`Replaced batch:\n${JSON.stringify(response, null, 2)}`);
};
