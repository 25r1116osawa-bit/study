fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiTdszqC3oMVs6yHbL_Crc6pjgn0xW4HqO64XbaSfnpS4w0CRJqz1MiO0vUVAl0mlXH6pzcKYsI_2EiMnX0xFEJnULP2kgAD7tA5CG4acUv6WR-N3_24tyD0LP31qzvDVWFbT2hp-qUGigEDoEaqT_OymT3bXvT54KomIJ5qQRiImRctgwGVgLdVPvdTmxvYnkLA4VU_ln9yxPHiD6C0X_x75xFL689_tl3WuT62-s93JMX7YQM1kapj_xLVn2Iwh6llQcBV6LwK2jn5NybBoa7qxnKO9Gtgkx5IUyQ&lib=MPT5PSWAvXyvHuIQmMlOJ7ahLQ5Yc8jYk")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });