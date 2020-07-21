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
    }
};
