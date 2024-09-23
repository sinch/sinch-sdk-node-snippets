// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const callId = 'the_call_ID';

  /** @type {Voice.ManageWithCallLegRequestData} */
  const requestData = {
    callId,
    callLeg: 'callee',
    manageWithCallLegRequestBody: {
      action: {
        name: 'hangup',
      },
      instructions: [
        {
          name: 'say',
          locale: 'Matthew',
          text: 'Hello, the call is over, hanging up now. Goodbye.',
        },
      ],
    },
  };

  await voiceService.calls.manageWithCallLeg(requestData);

  console.log('Call managed with a call leg successfully.');
};
