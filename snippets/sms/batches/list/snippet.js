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

  /** @type {Sms.SendSMSResponse[]} */
  const batchesList = [];
  // Fetch a page of Batches
  let response = await smsService.batches.list(requestData);
  // Fetch the data page by page manually
  while (response.hasNextPage) {
    batchesList.push(...response.data);
    response = await response.nextPage();
  }
  batchesList.push(...response.data);

  console.log(`Full list of batches printed at once (length = ${batchesList.length}):\n${JSON.stringify(batchesList, null, 2)}`);

};
