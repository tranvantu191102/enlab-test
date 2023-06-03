import axiosClient from "../axios";

export const getApiQuestion = async (amount) => {
  try {
    const data = await axiosClient({
      method: "get",
      url: "api.php",
      params: { amount },
    });

    return data;
  } catch (error) {}
};
