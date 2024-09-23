// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const recipientPhoneNumber = 'the_phone_number_to_call';
  const callingNumber = 'the_calling_number';

  /** @type {Voice.TtsCalloutRequestData} */
  const requestData = {
    ttsCalloutRequestBody: {
      method: 'ttsCallout',
      ttsCallout: {
        destination: {
          type: 'number',
          endpoint: recipientPhoneNumber,
        },
        cli: callingNumber,
        locale: 'en-US/male',
        text: 'Hello, this is a call from Sinch.',
      },
    },
  };

  const response = await voiceService.callouts.tts(requestData);

  console.log(`Callout response: \n${JSON.stringify(response, null, 2)}`);
};
