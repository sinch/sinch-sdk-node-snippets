// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const callId = 'the_call_ID';

  /** @type {Voice.GetCallResultRequestData} */
  const requestData = {
    callId,
  };

  const response = await voiceService.calls.get(requestData);

  console.log(`Call information: \n${JSON.stringify(response, null, 2)}`);
};
