// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  const phoneNumber = 'YOUR_phone_number_to_be_updated';
  const appId = 'YOUR_app_id';
  const displayName = 'Updated from Sinch Node.js SDK';

  /** @type {Numbers.VoiceConfiguration} */
  const voiceConfiguration= {
    appId,
    type: 'RTC',
  };

  /** @type {Numbers.UpdateActiveNumberRequestData} */
  const requestData = {
    phoneNumber,
    updateActiveNumberRequestBody: {
      displayName,
      voiceConfiguration,
    },
  };

  const response = await numbersService.activeNumber.update(requestData);

  console.log(`Updated number:\n${JSON.stringify(response, null, 2)}`);
};
