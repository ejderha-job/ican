// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config){
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )
        config.module.rules.push(      {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
        },      {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
            use: ['@svgr/webpack'],
        },)
        fileLoaderRule.exclude = /\.svg$/i
        return config
    }
}

module.exports = {...nextConfig, env:{
        API:"http://localhost:3000"
    }}