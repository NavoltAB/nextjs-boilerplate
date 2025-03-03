"use client";

import Script from "next/script";

export default function Insta() {
    return (
        <section className="lg:px-10 px-4 pt-6">
            <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
            <div className="elfsight-app-b54f4b7e-c04b-41d3-8ee7-1c421abce0ec" data-elfsight-app-lazy></div>
        </section>
    );
}
