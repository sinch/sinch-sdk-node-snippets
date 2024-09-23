// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  oneWeekAgo.setHours(0, 0, 0, 0);

  /** @type {Sms.ListDeliveryReportsRequestData} */
  const requestData= {
    start_date: oneWeekAgo,
  };

  console.log('List of delivery reports printed one by one:');
  // Use the iterator and fetch data from all the pages automatically
  for await (const deliveryReport of smsService.deliveryReports.list(requestData)) {
    console.log(JSON.stringify(deliveryReport, null, 2));
  }

};
