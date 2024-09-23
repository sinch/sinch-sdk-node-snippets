// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const callId = 'the_call_ID';

  /** @type {Voice.UpdateCallRequestData} */
  const requestData = {
    callId,
    updateCallRequestBody: {
      instructions: [
        {
          name: 'startRecording',
          options: {
            destinationUrl: 's3://sinch-storage/voice-recordings/my-recording.mp3',
            credentials: '(AwsAccessKey):(AwsSecretKey):(AwsRegion)',
            notificationEvents: true,
            transcriptionOptions: {
              enabled: true,
              locale: 'en-US',
            },
          },
        },
      ],
      action: {
        name: 'hangup',
      },
    },
  };

  await voiceService.calls.update(requestData);

  console.log('Call updated successfully.');
};
