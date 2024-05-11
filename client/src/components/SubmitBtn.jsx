/* eslint-disable react/prop-types */
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn btn-error btn-block text-white"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-infinity loading-lg"></span>
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
