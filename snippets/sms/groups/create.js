// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const name = 'YOUR_group_name';
  const member1 = 'YOUR_recipient_1_phone_number';
  const member2 = 'YOUR_recipient_2_phone_number';
  const member3 = 'YOUR_recipient_3_phone_number';

  /** @type {Sms.CreateGroupRequestData} */
  const requestData= {
    createGroupRequestBody: {
      name,
      members: [
        member1,
        member2,
        member3,
      ],
    },
  };

  const response = await smsService.groups.create(requestData);

  console.log(`Created group:\n${JSON.stringify(response, null, 2)}`);
};
