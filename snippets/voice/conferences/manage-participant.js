// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const conferenceId = 'the_conference_ID';
  const callId = 'the_call_ID_identifying_a_participant';

  /** @type {Voice.ManageParticipantRequestData} */
  const requestData = {
    conferenceId,
    callId,
    manageParticipantRequestBody: {
      command: 'mute',
      moh: 'music1',
    },
  };

  await voiceService.conferences.manageParticipant(requestData);

  console.log('The participant has been managed successfully.');
};
