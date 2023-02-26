
export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_DEV || 'development',
    port: Number( process.env.PORT ) || 3000,
    mongodb: process.env.MONGODB,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7,
})