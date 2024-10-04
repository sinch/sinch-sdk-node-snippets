// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const verificationID = 'the_verification_ID';
  const verificationCode = 'the_verification_code_received_by_phone_call';

  /** @type {Verification.ReportPhoneCallVerificationByIdRequestData} */
  const requestData = Verification.reportVerificationByIdHelper.buildPhoneCallRequest(
    verificationID,
    verificationCode,
  );

  const response = await verificationService.verifications.reportPhoneCallById(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
