// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const applicationKey = 'YOUR_Voice_application_key_from_the_dashboard';

  /** @type {Voice.UpdateCallbackURLsRequestData} */
  const requestData = {
    applicationkey: applicationKey,
    updateCallbacksRequestBody: {
      url: {
        primary: 'https://new-primary-callback-url.com',
        fallback: 'https://new-fallback-callback-url.com',
      },
    },
  };

  await voiceService.applications.updateCallbackURLs(requestData);

  console.log('The callback URLs have been successfully updated.');
};
