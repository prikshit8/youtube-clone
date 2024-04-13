import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return <div>{searchParam.get("v")}</div>;
};

export default WatchPage;
