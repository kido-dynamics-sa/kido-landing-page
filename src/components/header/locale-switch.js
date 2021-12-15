/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Cookies from "js-cookie";
import WorldIcon from "./icons/world";
import MdExpandMore from "./icons/expandmore";

import { useOnClickOutside } from "../../utils/hooks";

const LocaleSwitch = ({ pageContext }) => {
  const isMounted = useRef(false);
  const select = useRef();
  const router = useRouter();
  const [locale, setLocale] = useState();
  const [showing, setShowing] = useState(false);

  const handleLocaleChange = async (selectedLocale) => {
    // Persist the user's language preference
    // https://nextjs.org/docs/advanced-features/i18n-routing#leveraging-the-next_locale-cookie
    Cookies.set("NEXT_LOCALE", selectedLocale);
    setLocale(selectedLocale);
  };

  const handleLocaleChangeRef = useRef(handleLocaleChange);
  useOnClickOutside(select, () => setShowing(false));

  useEffect(() => {
    const localeCookie = Cookies.get("NEXT_LOCALE");
    if (!localeCookie) {
      handleLocaleChangeRef.current(router.locale);
    }

    const checkLocaleMismatch = async () => {
      if (
        !isMounted.current &&
        localeCookie &&
        localeCookie !== pageContext.locale
      ) {
        // Redirect to locale page if locale mismatch
        const localePage = getLocalizedPage(localeCookie, pageContext);

        router.push(
          `${localizePath({ ...pageContext, ...localePage })}`,
          `${localizePath({ ...pageContext, ...localePage })}`,
          { locale: localePage.locale }
        );
      }
      setShowing(false);
    };

    setLocale(localeCookie || router.locale);
    checkLocaleMismatch();

    return () => {
      isMounted.current = true;
    };
  }, [locale, router, pageContext]);

  return (
    <div ref={select} sx={{ position: "relative", mx: 3 }}>
      <button
        type="button"
        onClick={() => setShowing(!showing)}
        sx={{
          p: 2,
          borderRadius: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          width: "5rem",
          height: "100%",
          bg: "transparent",
          border: "0 solid",
          "&:hover": {
            bg: "#d8e5ff",
          },
          "&:focus": {
            bg: "#d8e5ff",
          },
        }}
      >
        <WorldIcon />
        <span
          sx={{
            textTransform: "capitalize",
            fontSize: 1,
            "&:hover": {
              color: "primary",
            },

            "&:focus": {
              bg: "#d8e5ff",
            },
          }}
        >
          {locale}
        </span>
        <MdExpandMore />
      </button>
      <div
        className={`w-full bg-white p-1 mt-1 shadow-lg rounded-md`}
        sx={{
          display: showing ? "block" : "none",
          position: "absolute",
          width: "100%",
          p: 1,
          mt: 1,
          borderRadius: 5,
          bg: "white",
          boxShadow:
            "0 0 transparent,0 0 transparent, 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
        }}
      >
        {pageContext.locales &&
          pageContext.locales.map((locale) => {
            return (
              <Link
                href={`/${locale}`}
                key={locale}
                locale={locale}
                role="option"
                passHref
              >
                <p
                  onClick={() => handleLocaleChange(locale)}
                  sx={{
                    textTransform: "capitalize",
                    fontSize: 1,
                    textAlign: "center",
                    p: 1,
                    borderRadius: 5,
                    cursor: "pointer",
                    m: 0,

                    "&:hover": {
                      bg: "#d8e5ff",
                    },
                    "&:focus": {
                      bg: "#d8e5ff",
                    },
                  }}
                >
                  {locale}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default LocaleSwitch;
