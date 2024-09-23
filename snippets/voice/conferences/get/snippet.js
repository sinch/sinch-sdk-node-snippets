// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const conferenceId = 'the_conference_ID';

  /** @type {Voice.GetConferenceInfoRequestData} */
  const requestData = {
    conferenceId,
  };

  const response = await voiceService.conferences.get(requestData);

  console.log(`Conference information: \n${JSON.stringify(response, null, 2)}`);
};
