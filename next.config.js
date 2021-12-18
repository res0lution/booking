module.exports = {
  reactStrictMode: true,
  images: { domains: ["a0.muscache.com", "res.cloudinary.com"] },
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/booking",
    CLOUDINARY_CLOUD_NAME: "",
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_SECRET_KEY: "",
    SMTP_HOST: "",
    SMTP_PORT: "",
    SMTP_USER: "",
    SMTP_PASSWORD: "",
    SMTP_NAME: "Book IT"
  },
};
