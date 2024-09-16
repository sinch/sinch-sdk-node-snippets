// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const applicationKey = 'YOUR_Voice_application_key_from_the_dashboard';

  /** @type {Voice.GetCallbackURLsRequestData} */
  const requestData = {
    applicationkey: applicationKey,
  };

  const response = await voiceService.applications.getCallbackURLs(requestData);

  console.log(`Callback URLs:\n${JSON.stringify(response, null, 2)}`);
};
