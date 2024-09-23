// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const batchId = 'the_batch_id';

  /** @type {Sms.GetBatchMessageRequestData} */
  const requestData= {
    batch_id: batchId,
  };

  const response = await smsService.batches.get(requestData);

  console.log(`Batch details:\n${JSON.stringify(response, null, 2)}`);
};
