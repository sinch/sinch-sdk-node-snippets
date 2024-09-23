// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const groupId = 'YOUR_group_id';

  /** @type {Sms.ListMembersRequestData} */
  const requestData= {
    group_id: groupId,
  };

  const response = await smsService.groups.listMembers(requestData);

  console.log(`List of phone numbers in the group:\n${JSON.stringify(response, null, 2)}`);
};
