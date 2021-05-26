import AOS from "aos";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DarkModeToggle from "react-dark-mode-toggle";
import Head from "../components/Head";

const Portofolio = () => {
  const [theme, setTheme] = useState("dark");
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>
      <Head title="Portofolio - Rama Seftiansyah" />
      <div className="container position-relative">
        <div className="toogle-mode position-absolute end-0 mt-3">
          <DarkModeToggle
            onChange={handleChangeTheme}
            checked={theme === "dark" ? true : false}
            size={50}
          />
        </div>
        <div className="content">
          <div className="header fs-1 font-default bold py-5">Lists Project</div>
          <div className="wrapper-porto row">
            <div className="text col-xs-12 col-lg-5 my-5 py-5" data-aos="fade-right">
              <div className="title font-default fs-4">Ticktiz</div>
              <div className="about font-light">
                Tickitz is a movie ticket booking website with many interesting features that make
                ordering cinema tickets comfortable and easy. Built with ReactJS, Redux, ExpressJS,
                and MySQL.
              </div>
              <a href="https://bit.ly/repo-tickitz">
                <button className="btn btn-primary">Visit Repo</button>
              </a>
              <a href="https://bit.ly/tickitz-web">
                <button className="btn btn-primary mx-2">Visit Project</button>
              </a>
            </div>
            <div className="col-xs-12 col-lg-6 row preview ms-lg-3">
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-right">
                <img
                  src="https://raw.githubusercontent.com/therevolt/FE-Tickitz/master/assets/img/signin.PNG"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-left">
                <img
                  src="https://raw.githubusercontent.com/therevolt/FE-Tickitz/master/assets/img/home.PNG"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-right">
                <img
                  src="https://camo.githubusercontent.com/5afb2da0e18fc93f04e154efee754768424d89dc2ac876077dcf50cc192c706d/68747470733a2f2f692e6962622e636f2f304378336b71582f44657461696c732d4d6f7669652d5469636b69747a2d5765622e706e67"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-left">
                <img
                  src="https://camo.githubusercontent.com/d9f9dddfcf19a05c2a3ca76cc8e3686a37a6c655675b19416a78d0ce0314f739/68747470733a2f2f692e6962622e636f2f46384236486d332f5469636b65742d44657461696c732d5469636b69747a2d5765622e706e67"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="wrapper-porto row">
            <div className="col-xs-12 col-lg-6 row preview ms-lg-3">
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-right">
                <img
                  src="https://raw.githubusercontent.com/therevolt/Zwallet-Frontend/master/preview/Home-Pages%20(1).png"
                  alt=""
                  width="280"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-left">
                <img
                  src="https://raw.githubusercontent.com/therevolt/Zwallet-Frontend/master/preview/Transfer-Pages%20(1).png"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-right">
                <img
                  src="https://raw.githubusercontent.com/therevolt/Zwallet-Frontend/master/preview/Transfers.png"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-left">
                <img
                  src="https://raw.githubusercontent.com/therevolt/Zwallet-Frontend/master/preview/Transfer-Status%202.png"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
            </div>
            <div className="text-end col-xs-12 col-lg-5 my-5 my-5 py-3" data-aos="fade-left">
              <div className="title font-default fs-4">ZWallet</div>
              <div className="about font-light">
                ZWallet is a digital wallet website for various transactions with various features
                that make it easier for transactions between users and marketplace payments. This
                website is also responsive so it will be conveniently accessed from both desktop and
                mobile devices. Built with NextJS, ExpressJS, MySQL, and Sequelize.
              </div>
              <a href="https://bit.ly/repo_zwallet">
                <button className="btn btn-primary">Visit Repo</button>
              </a>
              <a href="https://bit.ly/zwallet_web">
                <button className="btn btn-primary mx-2">Visit Project</button>
              </a>
            </div>
          </div>
          <div className="wrapper-porto row">
            <div className="text col-xs-12 col-lg-5 my-5 py-4" data-aos="fade-right">
              <div className="title font-default fs-4">SayHello</div>
              <div className="about font-light">
                SayHello is a chat website with various realtime features, such as send / receive
                messages, notifications, to online / offline status. SayHello also has a responsive
                interface so you can access it via desktop or mobile devices. Built with ReactJS,
                Socket.io, ExpressJS, MySQL, and Sequelize.
              </div>
              <a href="http://bit.ly/shello-repo">
                <button className="btn btn-primary">Visit Repo</button>
              </a>
              <a href="http://bit.ly/shello-apps">
                <button className="btn btn-primary mx-2">Visit Project</button>
              </a>
            </div>
            <div className="col-xs-12 col-lg-6 row preview ms-lg-3">
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-right">
                <img
                  src="https://camo.githubusercontent.com/9d58cc92050dc4a9d890031b8d6e5916c6eee5b7704b08829b980af9e930cc2a/68747470733a2f2f692e6962622e636f2f397354794d73482f5361792d48656c6c6f2d4c6f67696e2e706e67"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-left">
                <img
                  src="https://camo.githubusercontent.com/c623bef3d4b0e418a15e1412188c13a6b1c2b810d4e60558762baafb90a854e3/68747470733a2f2f692e6962622e636f2f3074546e3151332f5361792d48656c6c6f2d436861742d526f6f6d2d322e706e67"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-right">
                <img
                  src="https://camo.githubusercontent.com/5040de5de3279b38ec9fa687e57052f8c0d869b079b70e2df190ba051e745477/68747470733a2f2f692e6962622e636f2f5974674e4d71482f5361792d48656c6c6f2d436861742d526f6f6d2d332e706e67"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-left">
                <img
                  src="https://camo.githubusercontent.com/eef49493c138e759b2f628f26d84b9294c37c9de82a43f261b5346b2eacd6047/68747470733a2f2f692e6962622e636f2f645172346663442f5361792d48656c6c6f2d436861742d526f6f6d2d342e706e67"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
            </div>
          </div>
          <div className="wrapper-porto row">
            <div className="col-xs-12 col-lg-6 row preview ms-lg-3">
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-right">
                <img
                  src="https://user-images.githubusercontent.com/77045083/116245936-b2661e00-a793-11eb-84ca-1401ade1bec4.png"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-left">
                <img
                  src="https://user-images.githubusercontent.com/77045083/116245971-bb56ef80-a793-11eb-9b90-56ce9a273465.png"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-right">
                <img
                  src="https://user-images.githubusercontent.com/77045083/116245953-b6923b80-a793-11eb-9c32-c111584b7fd3.png"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-left">
                <img
                  src="https://user-images.githubusercontent.com/77045083/116245993-bf830d00-a793-11eb-8131-338bb7aa8f9d.png"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
            </div>
            <div className="text-end col-xs-12 col-lg-5 my-5 py-1" data-aos="fade-left">
              <div className="title font-default fs-4">Coffe Shop</div>
              <div className="about font-light">
                Coffee Shop is a food and beverage ordering website created by the InCafe team and
                acts as a Backend. This website has a variety of features that make it easy to
                select menus and the ordering process, and has a responsive display so it will be
                very comfortable to access from your desktop or smartphone. Built with NextJS,
                ExpressJS, MySQL, dan Sequelize.
              </div>
              <a href="https://github.com/therevolt/In-Cafe">
                <button className="btn btn-primary">Visit Repo</button>
              </a>
              <a href="https://incafe.netlify.app/">
                <button className="btn btn-primary mx-2">Visit Project</button>
              </a>
            </div>
          </div>
          <div className="wrapper-porto row">
            <div className="text col-xs-12 col-lg-5 my-5 py-2" data-aos="fade-right">
              <div className="title font-default fs-4">ARVA SHOP</div>
              <div className="about font-light">
                ARVA SHOP is an online shopping website that provides various features for buyers
                and sellers of goods, and is also integrated with a payment gateway which makes
                payments easier and more flexible. Created by the ARVA team and serves as Backend.
                Built with NextJS, ExpressJS, MySQL, and Sequelize.
              </div>
              <a href="http://bit.ly/arva-shop-repo">
                <button className="btn btn-primary">Visit Repo</button>
              </a>
              <a href="http://bit.ly/arva-shop">
                <button className="btn btn-primary mx-2">Visit Project</button>
              </a>
            </div>
            <div className="col-xs-12 col-lg-6 row preview ms-lg-3">
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-right">
                <img
                  src="https://github.com/abudzr/arva-online-shop/raw/upload-image/screencapture-localhost-3000-auth-login-2021-05-10-02_04_06.png"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12" data-aos="fade-down-left">
                <img
                  src="https://camo.githubusercontent.com/61b70afd18d7be483f61707738b4add3dd66ed135d4eb0bd0e091aa78617e328/68747470733a2f2f692e6962622e636f2f4656544b6b334e2f73637265656e636170747572652d6c6f63616c686f73742d333030302d6170702d323032312d30352d31302d30322d30382d30302d706e672d313336362d333739332e706e67"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-right">
                <img
                  src="https://github.com/abudzr/arva-online-shop/raw/upload-image/screencapture-localhost-3000-app-searchProduct-2021-05-10-02_10_44.png"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
              <div className="col-lg-6 col-xs-12 mt-2" data-aos="fade-up-left">
                <img
                  src="https://camo.githubusercontent.com/30775f68a150c38af83460e8c5d557dd2dab5eab05c5bdcc1e3389f1493ed6bc/68747470733a2f2f692e6962622e636f2f673337765763662f73637265656e636170747572652d6c6f63616c686f73742d333030302d6170702d70726f647563742d372d323032312d30352d31302d30322d32352d30362d706e672d313336362d323336372e706e67"
                  alt=""
                  width="310"
                  height="150"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="goback pb-4">
          <button className="btn btn-primary" onClick={() => router.push("/")}>
            Back To Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
