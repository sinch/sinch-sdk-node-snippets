// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const batchId = 'the_batch_id';
  const recipientPhoneNumber = 'YOUR_recipient_phone_number';

  /** @type {Sms.DeliveryFeedbackRequestData} */
  const requestData= {
    batch_id: batchId,
    deliveryFeedbackRequestBody: {
      recipients: [
        recipientPhoneNumber,
      ],
    },
  };

  await smsService.batches.sendDeliveryFeedback(requestData);

  console.log('The delivery feedback has been sent');
};
