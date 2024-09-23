// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const groupId = 'YOUR_group_id';
  const member1 = 'YOUR_recipient_1_phone_number';
  const member2 = 'YOUR_recipient_2_phone_number';

  /** @type {Sms.ReplaceGroupRequestData} */
  const requestData= {
    group_id: groupId,
    replaceGroupRequestBody: {
      members: [
        member1,
        member2,
      ],
    },
  };

  const response = await smsService.groups.replace(requestData);

  console.log(`Replaced group:\n${JSON.stringify(response, null, 2)}`);
};
