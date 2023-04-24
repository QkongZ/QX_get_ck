/*
云原神获取token，输出格式为ai=4;ci=1;oi=xxxx;ct=xxxx;si=xxxx;bi=xxxx_cn;devId=xxxx-xxxx-xxxx-xxxx-xxxx

*/
const cookieName = '云原神token';
const tokenRegex = /x-rpc-combo_token:\s*(.*?)(;|$)/i;
const deviceIdRegex = /x-rpc-device_id:\s*([^;\n]+)/i;

const headers = $request.headers;
const tokenMatch = tokenRegex.exec(headers['x-rpc-combo_token']);
const deviceIdMatch = deviceIdRegex.exec(headers['x-rpc-device_id']);

if (tokenMatch && deviceIdMatch) {
  const token = tokenMatch[1];
  const deviceId = deviceIdMatch[1];
  console.log(`Token: ${token}, Device ID: ${deviceId}`);
  $notify('匹配到Token和Device ID', '', `Token= ${token};devId=${deviceId}`);
}

$notify('云原神token获取成功！', '', `${cookieName}获取成功！(请去掉前面的Token=)请查看日志或弹窗获取Cookie信息。`);
console.log(`${cookieName}获取成功！`);
console.log(`Cookie：${headers['x-rpc-combo_token']} ${headers['x-rpc-device_id']}`);

$done({});