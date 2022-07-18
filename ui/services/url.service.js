const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

const UrlParamsReplace = (url, params = {}) => {
  let urlWithPrefix = `${ApiUrl}${url}`;
  if (params) {
    Object.keys(params).forEach(
      (key) => (urlWithPrefix = urlWithPrefix.replace(`:${key}`, params[key]))
    );
  }
  return urlWithPrefix;
};

export const GET_PRE_SIGNED_URL = UrlParamsReplace("/aws/get-pre-signed-url");
export const GET_SERVICE_BY_ID = (params) => UrlParamsReplace("/services/:id", params);
