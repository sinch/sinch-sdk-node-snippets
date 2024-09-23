// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const groupId = 'YOUR_group_id';
  const name= 'YOUR_updated_group_name';
  const member1 = 'YOUR_recipient_1_phone_number';
  const member2 = 'YOUR_recipient_2_phone_number';

  /** @type {Sms.UpdateGroupRequestData} */
  const requestData= {
    group_id: groupId,
    updateGroupRequestBody: {
      name,
      add: [
        member1,
      ],
      remove: [
        member2,
      ],
    },
  };

  const response = await smsService.groups.update(requestData);

  console.log(`Updated group:\n${JSON.stringify(response, null, 2)}`);
};
