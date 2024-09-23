// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const batchId = 'the_batch_id_to_cancel';

  /** @type {Sms.CancelBatchMessageRequestData} */
  const requestData= {
    batch_id: batchId,
  };

  const response = await smsService.batches.cancel(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
