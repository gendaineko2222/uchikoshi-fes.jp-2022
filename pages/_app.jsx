/*
 * © 2022 uchikoshi-fes
 * This file is licensed under the MIT License, see /LICENSE file.
 */

// next
import { useRouter } from "next/router";
// components
import { DefaultSeo } from "next-seo";
// styles
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/assets.css";
import "sanitize.css/typography.css";
import "sanitize.css/system-ui.css";
import "sanitize.css/ui-monospace.css";
import "../styles/globals.scss";
// config
import SEO from "../next-seo.config";

const UchikoshiFesApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <DefaultSeo {...SEO(router)} />
      <Component {...pageProps} />
    </>
  );
};

export default UchikoshiFesApp;
