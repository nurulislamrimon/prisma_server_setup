import nodemailer from "nodemailer";
import { config } from "../../config";

export const sendMail = async ({
  to = "",
  bcc = "",
  subject,
  html,
  platformName,
  newTpr,
  attachments,
}: {
  to?: string;
  bcc?: string;
  subject: string;
  html: string;
  platformName?: string;
  newTpr?: { host: string; port: number; user: string; pass: string };
  attachments?: { filename: string; path: string }[];
}) => {
  try {
    const from = `${platformName} <${newTpr?.user || config.mailUser}>`;
    const transporterConfig = {
      host: newTpr?.host || config.mailHost,
      port: newTpr?.port || Number(config.mailPort) || 465,
      secure:
        (newTpr?.port && newTpr?.port === 465) ||
        config.isMailPortSecure !== "false",
      auth: {
        user: newTpr?.user || config.mailUser,
        pass: newTpr?.pass || config.mailPass,
      },
      // service: "gmail",
      // auth: {
      //   user: config.emailUser,
      //   pass: config.emailPass,
      // },
    };
    if (
      !transporterConfig.host ||
      !transporterConfig.port ||
      !transporterConfig.auth?.user ||
      !transporterConfig.auth?.pass
    ) {
      throw new Error("Mail configuration is missing");
    }

    const transporter = nodemailer.createTransport(transporterConfig);
    const info = await transporter.sendMail({
      from,
      to,
      bcc,
      subject,
      html,
      attachments: attachments || [],
    });
    return info;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
