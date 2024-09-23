// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const phoneNumber = 'YOUR_Sinch_phone_number_with_voice_capability';
  const applicationKey = 'YOUR_Voice_application_key_from_the_dashboard';

  /** @type {Voice.AssignNumbersRequestData} */
  const requestData = {
    assignNumbersRequestBody: {
      numbers: [
        phoneNumber,
      ],
      applicationkey: applicationKey,
      capability: 'voice',
    },
  };

  await voiceService.applications.assignNumbers(requestData);

  console.log('The phone numbers have been assigned to the application successfully.');
};
