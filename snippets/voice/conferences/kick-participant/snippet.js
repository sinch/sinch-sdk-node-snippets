// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const conferenceId = 'the_conference_ID';
  const callId = 'the_call_ID_identifying_a_participant';

  /** @type {Voice.KickParticipantRequestData} */
  const requestData = {
    conferenceId,
    callId,
  };

  await voiceService.conferences.kickParticipant(requestData);

  console.log('The participant has been successfully kicked from the conference');
};
