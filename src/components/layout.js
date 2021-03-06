/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment, useState } from "react";
import Sticky from "react-stickynode";
import Header from "./header/header";
import Footer from "./footer/footer";
import BlogNav from "./header/blog-nav";

export default function Layout({
  children,
  footer,
  pageContext,
  onlyLogo,
  isBlog,
  categories = [],
  category = null,
}) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <Fragment>
      {isBlog ? (
        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
          <Header
            className={`${!isSticky ? "sticky" : "unSticky"}`}
            // pageContext={pageContext}
            onlyLogo={onlyLogo}
            sx={{
              // display: isSticky ? "none" : "block",
              opacity: isSticky ? 0 : 1,
              transition: "all 0.4s ease",
            }}
          />
          <BlogNav
            className={`${isSticky ? "sticky" : "unSticky"}`}
            categories={categories}
            category={category}
          />
        </Sticky>
      ) : (
        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
          <Header
            className={`${isSticky ? "sticky" : "unSticky"}`}
            // pageContext={pageContext}
            onlyLogo={onlyLogo}
          />
        </Sticky>
      )}
      <main id="content" sx={{ variant: "layout.main" }}>
        {children}
      </main>
      <Footer footer={footer} />
    </Fragment>
  );
}
