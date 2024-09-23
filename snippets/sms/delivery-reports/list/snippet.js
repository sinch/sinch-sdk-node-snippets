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

  /** @type {Sms.RecipientDeliveryReport[]} */
  const deliveryReportsList = [];
  // Fetch a page of Delivery Reports
  let response = await smsService.deliveryReports.list(requestData);
  // Fetch the data page by page manually
  while (response.hasNextPage) {
    deliveryReportsList.push(...response.data);
    response = await response.nextPage();
  }
  deliveryReportsList.push(...response.data);

  console.log(`Full list of delivery reports printed at once (length = ${deliveryReportsList.length}):\n${JSON.stringify(deliveryReportsList, null, 2)}`);

};
