const url1 = "https://shop-woo.cloudns.cl/wp-json/wc/v3"
const authUrl1 = "https://shop-woo.cloudns.cl/wp-json/jwt-auth/v1/token"
const tokenVerifyUrl1 = "https://shop-woo.cloudns.cl/wp-json/jwt-auth/v1/token/validate"


export const environment = {
    production: true,
    backend_api_url: url1,
    auth_url: authUrl1,
    token_verify_url: tokenVerifyUrl1,
    readOnlyKeys: {
        consumer_key: 'ck_85cdd6bc830c2c942542ac7aec1734b9b88b68f5',
        consumer_secret: 'cs_13b724dc3d6caba718b847589d52131c17f0e41b'
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
