// eslint-disable-next-line no-unused-vars
import { Voice, VoiceService } from '@sinch/sdk-core';

/** @param {VoiceService} voiceService */
export const execute = async (voiceService) => {

  const recipientPhoneNumber = 'the_phone_number_to_call';
  const callingNumber = 'the_calling_number';
  const callbackUrl= 'the_PIE_callback_URL';

  /** @type {Voice.CustomCalloutRequestData} */
  const requestData = {
    customCalloutRequestBody: {
      method: 'customCallout',
      customCallout: {
        destination: {
          type: 'number',
          endpoint: recipientPhoneNumber,
        },
        cli: callingNumber,
        ice: Voice.customCalloutHelper.formatIceResponse(
          Voice.iceActionHelper.connectPstn({
            number: recipientPhoneNumber,
            cli: callingNumber,
          }),
          Voice.iceInstructionHelper.say('Welcome to Sinch', 'en-US/male'),
        ),
        ace: Voice.customCalloutHelper.formatAceResponse(
          Voice.aceActionHelper.runMenu({
            locale: 'Kimberly',
            enableVoice: true,
            barge: true,
            menus: [
              {
                id: 'main',
                mainPrompt: '#tts[Welcome to the main menu. Press 1 to confirm order or 2 to cancel.',
                repeatPrompt: '#tts[We didn\'t get your input, please try again.]',
                timeoutMills: 5000,
                options: [
                  {
                    dtmf: '1',
                    action: 'menu(confirm)',
                  },
                  {
                    dtmf: '2',
                    action: 'return(cancel)',
                  },
                ],
              },
              {
                id: 'confirm',
                mainPrompt: '#tts[Thank you for confirming your order. Enter your 4-digit PIN.]',
                maxDigits: 4,
              },
            ],
          }),
        ),
        pie: callbackUrl,
      },
    },
  };

  const response = await voiceService.callouts.custom(requestData);

  console.log(`Callout response: \n${JSON.stringify(response, null, 2)}`);
};
