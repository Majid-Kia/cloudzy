import React from "react";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-100">
      {/* <Script
        id="first-unique-id"
        strategy="idle"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "${process.env.GATSBY_GTAG}");
          `,
        }}
      /> */}
      <Navbar />
      {children}
    </div>
  );
}
