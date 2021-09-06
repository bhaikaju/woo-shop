// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const url1 = "https://opencart-ir.com/wordpress/wp-json/wc/v3"
const authUrl1 = "https://opencart-ir.com/wordpress/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1 = "https://opencart-ir.com/wordpress/wp-json/jwt-auth/v1/token/validate"


// noinspection DuplicatedCode
export const environment = {
    production: false,
    backend_api_url: url1,
    auth_url: authUrl1,
    token_verify_url: tokenVerifyUrl1,
    readOnlyKeys: {
        consumer_key: 'ck_53e792aaa3b09b27611534d2a8a73b3df7f27cf1',
        consumer_secret: 'cs_16e8e858a81ff4ab2af2c2b963a0c10257d33dfb'
    },
    writableKeys: {
        consumer_key: 'ck_7fb9d2318b11ac1927aca42bed732cc872bf02c2',
        consumer_secret: 'cs_27202467a024d2c31693945a358f05aed37e78f8'
    },
    states: [
        {value: 'AN', name: 'Andaman and Nicobar Islands'},
        {value: 'AP', name: 'Andhra Pradesh'},
        {value: 'AR', name: 'Arunachal Pradesh'},
        {value: 'AS', name: 'Assam'},
        {value: 'BR', name: 'Bihar'},
        {value: 'CG', name: 'Chandigarh'},
        {value: 'CH', name: 'Chhattisgarh'},
        {value: 'DH', name: 'Dadra and Nagar Haveli'},
        {value: 'DD', name: 'Daman and Diu'},
        {value: 'DL', name: 'Delhi'},
        {value: 'GA', name: 'Goa'},
        {value: 'GJ', name: 'Gujarat'},
        {value: 'HR', name: 'Haryana'},
        {value: 'HP', name: 'Himachal Pradesh'},
        {value: 'JK', name: 'Jammu and Kashmir'},
        {value: 'JH', name: 'Jharkhand'},
        {value: 'KA', name: 'Karnataka'},
        {value: 'KL', name: 'Kerala'},
        {value: 'LD', name: 'Lakshadweep'},
        {value: 'MP', name: 'Madhya Pradesh'},
        {value: 'MH', name: 'Maharashtra'},
        {value: 'MN', name: 'Manipur'},
        {value: 'ML', name: 'Meghalaya'},
        {value: 'MZ', name: 'Mizoram'},
        {value: 'NL', name: 'Nagaland'},
        {value: 'OR', name: 'Odisha'},
        {value: 'PY', name: 'Puducherry'},
        {value: 'PB', name: 'Punjab'},
        {value: 'RJ', name: 'Rajasthan'},
        {value: 'SK', name: 'Sikkim'},
        {value: 'TN', name: 'Tamil Nadu'},
        {value: 'TS', name: 'Telangana'},
        {value: 'TR', name: 'Tripura'},
        {value: 'UK', name: 'Uttarakhand'},
        {value: 'UP', name: 'Uttar Pradesh'},
        {value: 'WB', name: 'West Bengal'}]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
