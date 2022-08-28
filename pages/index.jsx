// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import NextSeo from "next-seo";
import { BrowserView as DesktopView, MobileView } from "react-device-detect";
import ReactPlayer from "react-player";
import Image from "@/components/base/image";
import Slogan from "@/components/slogan";
import Countdown from "@/components/countdown";
import PromotionVideos from "@/components/promotion-videos";
import AsanoRadio from "@/components/asano-radio";
// styles
import styles from "./index.module.scss";

const Top = () => {
  return (
    <div className={styles.top}>
      <div>
        <Image
          src="/souichiro.jpeg"
          alt=""
          layout="fill"
          className={styles["top-image"]}
        />
      </div>
      <DesktopView>
        <ReactPlayer
          url="https://youtu.be/To5jTMIBWeA"
          playing
          loop
          controls={false}
          muted
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                fs: 0,
                iv_load_policy: 3,
                loop: 1,
                modestbranding: 1,
              },
            },
          }}
          className={styles["top-video"]}
        />
      </DesktopView>
      <div className={styles["top-text"]}>
        <div>
          <h1 className={styles.title}>
            第43回
            <wbr />
            打越祭
            <wbr />
            公式サイト
          </h1>
          <p className={styles.description}>
            浅野学園2022年度文化祭
            <br />
            9/18(日)・9/19(月)
            <br />
            スローガン：雲外蒼天
          </p>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <div className={styles["top-container"]}>
        <Top />
      </div>
      <div className={styles["slogan-container"]}>
        <Slogan />
      </div>
      <div className={styles["countdown-container"]}>
        <Countdown />
      </div>
      <div className={styles["pv-container"]}>
        <PromotionVideos />
      </div>
      <div className={styles["asano-radio-container"]}>
        <AsanoRadio />
      </div>
    </>
  );
};

export default Index;
