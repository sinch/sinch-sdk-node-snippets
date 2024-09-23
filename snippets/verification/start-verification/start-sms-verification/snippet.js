// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const phoneNumber = 'the_phone_number_to_verify';
  const reference = 'the_verification_reference';

  /** @type {Verification.StartSmsVerificationRequestData} */
  const requestData = Verification.startVerificationHelper.buildSmsRequest(
    phoneNumber,
    reference,
    {
      codeType: 'Alphanumeric',
    },
  );

  const response = await verificationService.verifications.startSms(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
