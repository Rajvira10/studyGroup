import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Image from "next/image";
import Style from "../styles/Body.module.css";

const Body: NextPage = () => {
  return (
    <Box>
      <Image
        className={Style.body}
        src="/1.jpg"
        layout="fill"
        objectFit="cover"
        alt=""
      />
    </Box>
  );
};

export default Body;
