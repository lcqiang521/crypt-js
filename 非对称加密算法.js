router.get('/test', async function (req, res, next) {

    let result = {status: 1, info: 'success', data: []};
    let param = req.query || req.params;

    let pubKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMZUggRQAPo1X8NZTCCDeU4p3r
Nin9UVuMSfQY0F8bTzFxXMMpcB703F90G8+xOwFGhmG+Gh5p6xZCNtKlqWoOoY6L
tbY5lRsv5uQQ1OcnVFmK+m+SgxyxtFpxKYUGCGxRrySYNBLWF7JrIMbDPb2DG7vA
fFr0VznY7J6O3pSMnwIDAQAB
-----END PUBLIC KEY-----`;

    let privKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCMZUggRQAPo1X8NZTCCDeU4p3rNin9UVuMSfQY0F8bTzFxXMMp
cB703F90G8+xOwFGhmG+Gh5p6xZCNtKlqWoOoY6LtbY5lRsv5uQQ1OcnVFmK+m+S
gxyxtFpxKYUGCGxRrySYNBLWF7JrIMbDPb2DG7vAfFr0VznY7J6O3pSMnwIDAQAB
AoGAUR2fe42CSIa9glfO2AB5ZJs+VIzZ29NqynZcAw45NQUfcvj+hW2TZTQCLop3
CFYoGYBA7t4WXmoGVUFpmW91p5yx91I94W6mXxdzcsLReNVraNOxWeHAY0MhAdMx
8A+ye8LRypaE7mS70G0zHGw/TMrCJxVBNemXOVH7npQO6mECQQDM76JncYMJwwCY
XGYxaTOKohI1U+DdzW/IZOztTunVSq3/gJYecMEpFzX91NEAbEfSyqC5H5Tnkx9d
h0fSljFvAkEAr2DFrLIscYF7XGLU+uiKJLrRFGKEToTDS0dSwgKqP3Wj1uyd9ffw
Q27zK7JgXWESb3c038EG8c95IGVQeUJf0QJBALF6Rjc3grgNfJJ2Urov1UcWHJa6
UV9E7q2pWdYaJT9mMVG4Vkl+dInVZBizGV04aOsQOCiaRSZXry4cXgLtt1kCQD9i
VE80Hgfv6ivbtGnyfWsE8efSK0tNhF/CqVBhMjK5S7uzzOtG7tkQUmaqk1VsbgNH
LB7qXp4qg/aHZ2xL5uECQHaLktDuHVxlY1PNyUNU62ecTyfrlGxocD3PEqrfKYgL
7NuvvGEf+03GsrzopnhOCzaty0RwBZLsnjPI6WFpBUE=
-----END RSA PRIVATE KEY-----`;
    const crypto = require('crypto');

    // 加密方法
    let encrypt = (data, key) => {
        // 注意，第二个参数是Buffer类型
        return crypto.publicEncrypt(key, Buffer.from(data));
    };

    let decrypt = (encrypted, key) => {
        // 注意，encrypted是Buffer类型
        return crypto.privateDecrypt(key, encrypted);
    };

    let text = '15963590682';

    let encrypted = encrypt(text,pubKey);//加密
    console.log(decrypt(encrypted,privKey).toString());//解密

    return res.json(result);
});