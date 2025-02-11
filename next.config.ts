import type { NextConfig } from "next";

/* eslint-disable @typescript-eslint/no-require-imports */
const withVideos = require("next-videos") as (config: NextConfig) => NextConfig;

const nextConfig: NextConfig = {
  /* config options here */
};

export default withVideos(nextConfig);
