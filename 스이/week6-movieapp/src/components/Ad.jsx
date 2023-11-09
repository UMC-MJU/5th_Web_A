import React from "react";
import { ReactComponent as AdImg } from "../img/Ad.svg";

export default function Ad({ displayAd }) {
  //AdPage에서 displayAd를 받아 광고 표시 여부 결정
  return <>{displayAd ? <AdImg /> : null}</>;
}
