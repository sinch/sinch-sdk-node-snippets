// eslint-disable-next-line no-unused-vars
import { Sms, SmsService } from '@sinch/sdk-core';

/** @param {SmsService} smsService */
export const execute = async (smsService) => {

  const inboundId = 'the_inbound_id';

  /** @type {Sms.GetInboundMessageRequestData} */
  const requestData= {
    inbound_id: inboundId,
  };

  const response = await smsService.inbounds.get(requestData);

  console.log(`Inbound message:\n${JSON.stringify(response, null, 2)}`);
};
