// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const phoneNumber = 'the_phone_number';

  /** @type {Voice.QueryNumberRequestData} */
  const requestData = {
    number: phoneNumber,
  };

  const response = await voiceService.applications.queryNumber(requestData);

  console.log(`Phone number information:\n${JSON.stringify(response, null, 2)}`);
};
