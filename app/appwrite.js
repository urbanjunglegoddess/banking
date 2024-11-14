import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('673653e5000576ff0c00'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
