// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const groupId = 'YOUR_group_id';

  /** @type {Sms.DeleteGroupRequestData} */
  const requestData= {
    group_id: groupId,
  };

  await smsService.groups.delete(requestData);

  console.log('The group has been deleted.');
};
