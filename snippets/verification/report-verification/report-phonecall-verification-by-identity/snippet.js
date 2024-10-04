// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const phoneNumber = 'the_phone_number_to_verify';
  const verificationCode = 'the_verification_code_received_by_phone_call';

  /** @type {Verification.ReportPhoneCallVerificationByIdentityRequestData} */
  const requestData = Verification.reportVerificationByIdentityHelper.buildPhoneCallRequest(
    phoneNumber,
    verificationCode,
  );

  const response = await verificationService.verifications.reportPhoneCallByIdentity(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
