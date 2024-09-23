// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const conferenceId = 'YOUR_conference_ID';
  const recipientPhoneNumber = 'the_phone_number_to_call';
  const callingNumber = 'the_calling_number';

  /** @type {Voice.ConferenceCalloutRequestData} */
  const requestData = {
    conferenceCalloutRequestBody: {
      method: 'conferenceCallout',
      conferenceCallout: {
        conferenceId,
        destination: {
          type: 'number',
          endpoint: recipientPhoneNumber,
        },
        cli: callingNumber,
      },
    },
  };

  const response = await voiceService.callouts.conference(requestData);

  console.log(`Callout response: \n${JSON.stringify(response, null, 2)}`);
};
