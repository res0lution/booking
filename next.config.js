module.exports = {
  reactStrictMode: true,
  images: { domains: ["a0.muscache.com", "res.cloudinary.com"] },
  env: {
    DB_LOCAL_URI: "",
    DB_URI: "",

    STRIPE_API_KEY: "",
    STRIPE_SECRET_KEY: "",

    STRIPE_WEBHOOK_SECRET: "",

    CLOUDINARY_CLOUD_NAME: "",
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_API_SECRET: "",

    SMTP_HOST: "",
    SMTP_PORT: "",
    SMTP_USER: "",
    SMTP_PASSWORD: "",
    SMTP_FROM_EMAIL: "",
    SMTP_FROM_NAME: "",

    NEXTAUTH_URL: "",
    SMTP_NAME: "Book IT",
  },
};
