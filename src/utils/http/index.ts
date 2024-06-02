let baseUrl: string;
// #ifdef H5
baseUrl = import.meta.env.VITE_API_PREFIX;
// #endif
// #ifndef H5
baseUrl = import.meta.env.VITE_TARGET_DOMAIN;
// #endif
const callApi = <T>(
  url: string,
  method:
    | "OPTIONS"
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "TRACE"
    | "CONNECT" = "GET",
  needLoading: boolean = false,
  data?: any
) =>
  new Promise<T>((resolve, reject) => {
    uni.request({
      url: `${baseUrl}${url}`,
      method,
      data,
      header: {
        Authorization: uni.getStorageSync("TOKEN") || "",
      },
      success: (res) => {
        let data = res.data as Res<T>;
        if (typeof data === "string") {
          data = JSON.parse(data);
        }
        if (res.statusCode != 200 || !data.success) {
          if (needLoading) {
            uni.hideLoading();
          }
          uni.showToast({
            title: data.tips || "网络异常",
            icon: "error",
            mask: true,
          });
          return;
        }
        if (needLoading) {
          uni.hideLoading();
        }
        resolve(data.result as T);
      },
      fail: (error) => {
        if (needLoading) {
          uni.hideLoading();
        }
        uni.showToast({
          title: "网络异常",
          mask: true,
          icon: "error",
        });
        reject(error);
      },
    });
  });
export { callApi };
