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

  console.log('List of inbound messages printed one by one:');
  // Use the iterator and fetch data from all the pages automatically
  for await (const inboundMessage of smsService.inbounds.list(requestData)) {
    console.log(JSON.stringify(inboundMessage, null, 2));
  }

};
