/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Fragment } from "react";
import Link from "next/link";

export default function BlogNav({ categories, className, category }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <div sx={styles.container}>
        <Flex as="nav" sx={styles.nav}>
          <a sx={{ alignSelf: "center" }} target="" alt="" href="/blog">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 24"
              alt="blog"
              sx={{ width: "56px", mr: 0 }}
            >
              <rect width="56" height="24" rx="2" fill="#3976EF"></rect>
              <path
                d="M15.822 11.555c.92.53 1.38 1.33 1.38 2.4 0 .89-.315 1.62-.945 2.19-.63.57-1.405.855-2.325.855H9.477V6.5h4.14c.9 0 1.655.28 2.265.84.62.55.93 1.255.93 2.115 0 .87-.33 1.57-.99 2.1zm-2.205-3.12h-2.07v2.31h2.07c.32 0 .585-.11.795-.33.22-.22.33-.495.33-.825 0-.33-.105-.605-.315-.825a1.07 1.07 0 00-.81-.33zm.315 6.63c.35 0 .64-.115.87-.345.23-.24.345-.54.345-.9 0-.35-.115-.64-.345-.87-.23-.24-.52-.36-.87-.36h-2.385v2.475h2.385zm6.914-.045h4.005V17h-6.075V6.5h2.07v8.52zm13.588.615c-1.06 1.05-2.35 1.575-3.87 1.575s-2.81-.525-3.87-1.575c-1.05-1.06-1.575-2.355-1.575-3.885 0-1.53.525-2.82 1.575-3.87 1.06-1.06 2.35-1.59 3.87-1.59s2.81.53 3.87 1.59c1.06 1.05 1.59 2.34 1.59 3.87 0 1.53-.53 2.825-1.59 3.885zm-6.285-1.41c.65.64 1.455.96 2.415.96s1.765-.32 2.415-.96c.65-.65.975-1.475.975-2.475s-.325-1.825-.975-2.475c-.65-.65-1.455-.975-2.415-.975s-1.765.325-2.415.975c-.65.65-.975 1.475-.975 2.475s.325 1.825.975 2.475zm19.852-2.865v.81c0 1.5-.48 2.715-1.44 3.645-.96.93-2.2 1.395-3.72 1.395-1.62 0-2.965-.525-4.035-1.575-1.06-1.06-1.59-2.35-1.59-3.87 0-1.53.525-2.825 1.575-3.885 1.06-1.06 2.37-1.59 3.93-1.59.98 0 1.875.225 2.685.675.81.44 1.44 1.03 1.89 1.77l-1.77 1.02c-.25-.43-.63-.78-1.14-1.05-.5-.27-1.06-.405-1.68-.405-1 0-1.825.33-2.475.99-.64.65-.96 1.475-.96 2.475 0 .99.325 1.81.975 2.46.66.64 1.53.96 2.61.96.8 0 1.46-.175 1.98-.525.53-.36.89-.85 1.08-1.47h-3.18v-1.83H48z"
                fill="#fff"
              ></path>
            </svg>
          </a>
          <ul
            sx={{
              display: "flex",
              position: "relative",
              overflow: "hidden",
              overflowX: "auto",
              listStyle: "none",
              alignSelf: "center",
            }}
          >
            <li>
              <Link href={"/blog"}>
                <a
                  sx={{
                    color: !category && "#3976EF !important",
                    fontWeight: !category && "600 !important",
                  }}
                >
                  LATEST ARTICLES
                </a>
              </Link>
            </li>
            {categories.map((item) => {
              return (
                <li key={item.id} >
                  <Link href={`/category/${item["Slug"]}`}>
                    <a 
                sx={{
                  color: category && item["Slug"] === category["Slug"] && "#3976EF !important",
                  fontWeight: category && item["Slug"] === category["Slug"] && "600 !important",
                }}>{item["Name"]}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Flex>
        {/* <MobileDrawer /> */}
      </div>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    width: "100%",
    position: "absolute",
    top: "57px",
    left: 0,
    backgroundColor: "#d8e5ff",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    "&.sticky": {
      top: 0,
      position: "fixed",
      backgroundColor: "#d8e5ff",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    width: "100%",
    height: "78px",
    backgroundColor: "#d8e5ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    borderTop: "1px solid #c7d7f7",
    borderBottom: "1px solid #c7d7f7",
  },
  nav: {
    mx: "auto",
    width: "83.3333333%",
    maxWidth: "1200px",
    alignItems: "start",
    a: {
      color: "#5e709d",
      whiteSpace: "nowrap",
      textDecoration: "none",
      transition: "color .15s linear",
      textTransform: "uppercase",
      fontSize: 0,
      letterSpacing: "1px",
      fontWeight: "500",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
        fontWeight: "600",
      },
    },
  },
};
