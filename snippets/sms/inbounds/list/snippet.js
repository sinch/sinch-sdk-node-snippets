// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  oneWeekAgo.setHours(0, 0, 0, 0);
  const recipient = 'YOUR_recipient_phone_number';

  /** @type {Sms.ListInboundMessagesRequestData} */
  const requestData= {
    start_date: oneWeekAgo,
    to: recipient,
  };

  /** @type {Sms.InboundMessageResponse[]} */
  const inboundMessagesList = [];
  // Fetch a page of Inbound Messages
  let response = await smsService.inbounds.list(requestData);
  // Fetch the data page by page manually
  while (response.hasNextPage) {
    inboundMessagesList.push(...response.data);
    response = await response.nextPage();
  }
  inboundMessagesList.push(...response.data);

  console.log(`Full list of inbound messages printed at once (length = ${inboundMessagesList.length}):\n${JSON.stringify(inboundMessagesList, null, 2)}`);

};
