// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const verificationID = 'the_verification_ID';
  const verificationCode = 'the_verification_code_received_by_SMS';

  /** @type {Verification.ReportSmsVerificationByIdRequestData} */
  const requestData = Verification.reportVerificationByIdHelper.buildSmsRequest(
    verificationID,
    verificationCode,
  );

  const response = await verificationService.verifications.reportSmsById(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
