// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const batchId = 'the_batch_id';

  /** @type {Sms.GetDeliveryReportByBatchIdRequestData} */
  const requestData= {
    batch_id: batchId,
  };

  const response = await smsService.deliveryReports.get(requestData);

  console.log(`Delivery report:\n${JSON.stringify(response, null, 2)}`);
};
