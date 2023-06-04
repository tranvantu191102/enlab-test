import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = ({ loading }) => {
  return (
    <SyncLoader
      color={"#ffffff"}
      loading={loading}
      cssOverride={override}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loading;
