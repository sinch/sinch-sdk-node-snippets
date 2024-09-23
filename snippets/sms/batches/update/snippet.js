// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const batchId = 'the_batch_id_scheduled_in_the_future';
  const from = 'YOUR_sinch_phone_number';

  /** @type {Sms.UpdateBatchMessageRequestData} */
  const requestData= {
    batch_id: batchId,
    updateBatchMessageRequestBody: {
      type: 'mt_text',
      from,
      body: 'Hi ${name}! This is an updated message',
      delivery_report: 'per_recipient',
    },
  };

  const response = await smsService.batches.update(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
