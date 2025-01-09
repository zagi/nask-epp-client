import { client, cookieJar } from '@/client';
import { parseString } from 'xml2js';

export const sendEppRequest = async (xmlCommand: string): Promise<void> => {
  try {
    const response = await client.post(process.env.EPP_SERVER_PATH || '/registry/epp', xmlCommand);
    console.log('Response Headers:', response.headers);
    console.log('Response Data:', response.data);
    console.log('Cookies:', cookieJar.toJSON());

    parseString(response.data, (err, result) => {
      console.log('Response object:', JSON.stringify(result, null, 2));
    });
  } catch (error: any) {
    console.error('Error sending EPP request:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
};
