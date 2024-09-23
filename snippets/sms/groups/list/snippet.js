// @ts-check

// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  /** @type {Sms.ListGroupsRequestData} */
  const requestData= {
    page_size: 2,
  };

  /** @type {Sms.GroupResponse[]} */
  const groupsList = [];
  // Fetch a page of Groups
  let response = await smsService.groups.list(requestData);
  // Fetch the data page by page manually
  while (response.hasNextPage) {
    groupsList.push(...response.data);
    response = await response.nextPage();
  }
  groupsList.push(...response.data);

  console.log(`Full list of groups printed at once (length = ${groupsList.length}):\n${JSON.stringify(groupsList, null, 2)}`);

};
