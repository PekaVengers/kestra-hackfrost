export const getGoal = async (goal, timeframe) => {
  try {
    let data = JSON.stringify({
      token: token,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_URI}/auth/decode-token`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        localStorage.setItem("_id", response.data.userId);
        localStorage.setItem("user@first", response.data.firstName);
      })
      .catch((error) => {
        console.error("Error decoding token:", error);
        return null;
      });
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
