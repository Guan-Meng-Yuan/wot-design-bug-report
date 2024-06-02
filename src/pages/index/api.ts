import { callApi } from "@/utils/http";

export default {
  test: () => callApi<string>("/test"),
};
