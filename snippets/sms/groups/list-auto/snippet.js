// @ts-check

// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  /** @type {Sms.ListGroupsRequestData} */
  const requestData= {
    page_size: 2,
  };

  console.log('List of groups printed one by one:');
  // Use the iterator and fetch data from all the pages automatically
  for await (const group of smsService.groups.list(requestData)) {
    console.log(JSON.stringify(group, null, 2));
  }

};
