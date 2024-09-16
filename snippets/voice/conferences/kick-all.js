// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const conferenceId = 'the_conference_ID';

  /** @type {Voice.KickAllRequestData} */
  const requestData = {
    conferenceId,
  };

  await voiceService.conferences.kickAll(requestData);

  console.log('All the participants have been successfully kicked from the conference');
};
