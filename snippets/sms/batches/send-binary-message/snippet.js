// eslint-disable-next-line no-unused-vars
import { Sms, SmsService, textToHex } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const from = 'YOUR_sinch_phone_number';
  const recipient = 'YOUR_recipient_phone_number';

  /** @type {Sms.SendBinarySMSRequestData} */
  const requestData= {
    sendSMSRequestBody: {
      type: 'mt_binary',
      from,
      to: [
        recipient,
      ],
      body: 'SGVsbG8sIHRoaXMgaXMgYSBTTVMgZnJvbSBTaW5jaA==',
      udh: textToHex('UserDataHeader'),
      delivery_report: 'full',
    },
  };

  const response = await smsService.batches.sendBinaryMessage(requestData);

  console.log(`Response for binary batch:\n${JSON.stringify(response, null, 2)}`);
};
