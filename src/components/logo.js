/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Image from 'next/image'
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo", display: "flex", cursor: "pointer", mr: 15
      }}
      {...rest}
    >
      <Image src={src} alt="landing page kido logo"/>
    </Link>
  );
}
