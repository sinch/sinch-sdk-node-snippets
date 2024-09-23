// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  oneWeekAgo.setHours(0, 0, 0, 0);

  /** @type {Sms.ListBatchesRequestData} */
  const requestData= {
    start_date: oneWeekAgo,
    page_size: 2,
  };

  console.log('List of batches printed one by one:');
  // Use the iterator and fetch data from all the pages automatically
  for await (const batch of smsService.batches.list(requestData)) {
    console.log(JSON.stringify(batch, null, 2));
  }

};
