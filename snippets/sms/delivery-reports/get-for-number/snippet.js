// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const batchId = 'the_batch_id';
  const recipient = 'YOUR_recipient_phone_number';

  /** @type {Sms.GetDeliveryReportByPhoneNumberRequestData} */
  const requestData= {
    batch_id: batchId,
    phone_number: recipient,
  };

  const response = await smsService.deliveryReports.getForNumber(requestData);

  console.log(`Recipient delivery report:\n${JSON.stringify(response, null, 2)}`);
};
