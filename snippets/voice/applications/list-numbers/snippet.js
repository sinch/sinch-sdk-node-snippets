// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  /** @type {Voice.GetNumbersRequestData} */
  const requestData = {};

  const response = await voiceService.applications.listNumbers(requestData);

  console.log(`Numbers list:\n${JSON.stringify(response, null, 2)}`);
};
