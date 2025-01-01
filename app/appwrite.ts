import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6773ac14003baae36367'); // Replace with your project ID

export const account = new Account(client);
export const database = new Databases(client);

export const database_id = '6774f2ca00346949d5b0';
export const collection_id = '6774f5c0002a94cf94ed';

export { ID } from 'appwrite';

