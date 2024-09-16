// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const from = 'YOUR_sinch_phone_number';
  const recipient = 'YOUR_recipient_phone_number';

  /** @type {Sms.SendMediaSMSRequestData} */
  const requestData= {
    sendSMSRequestBody: {
      type: 'mt_media',
      from,
      to: [
        recipient,
      ],
      body: {
        url: 'https://media.body.url',
        message: 'Text message coming along with the media file',
      },
      delivery_report: 'full',
      strict_validation: true,
    },
  };

  const response = await smsService.batches.sendMediaMessage(requestData);

  console.log(`Response for MMS batch:\n${JSON.stringify(response, null, 2)}`);
};

