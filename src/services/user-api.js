const delay = 300;
const user = {
  name: "Mango",
  email: "mango@mail.ru",
  avatar:
    "https://cnet2.cbsistatic.com/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg",
};

const fetchUser = () =>
  new Promise((resolve) => setTimeout(() => resolve(user), delay));

export default { fetchUser };
