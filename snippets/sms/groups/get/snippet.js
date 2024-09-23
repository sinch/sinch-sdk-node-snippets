// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const groupId = 'YOUR_group_id';

  /** @type {Sms.GetGroupRequestData} */
  const requestData= {
    group_id: groupId,
  };

  const response = await smsService.groups.get(requestData);

  console.log(`Group details:\n${JSON.stringify(response, null, 2)}`);
};
