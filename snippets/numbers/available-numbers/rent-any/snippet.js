// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  const servicePlanId = 'YOUR_service_plan_id';
  const appId = 'YOUR_app_id';
  const callbackUrl = 'YOUR_callback_url';

  /** @type {Numbers.RentAnyNumberRequestSmsConfiguration} */
  const smsConfiguration = {
    servicePlanId,
  };

  /** @type {Numbers.RentAnyNumberRequestVoiceConfiguration} */
  const voiceConfiguration = {
    appId,
  };

  /** @type {Numbers.RentAnyNumberRequestData} */
  const requestData = {
    rentAnyNumberRequestBody: {
      regionCode: 'US',
      type: 'LOCAL',
      numberPattern: {
        pattern: '+1781',
        searchPattern: 'START',
      },
      smsConfiguration,
      voiceConfiguration,
      callbackUrl,
    },
  };

  const response = await numbersService.rentAny(requestData);

  console.log(`Rented number:\n${JSON.stringify(response, null, 2)}`);

};
