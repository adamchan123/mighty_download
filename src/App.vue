<template>
  <div id="container">
    <!-- <p>语言：{{lang1}}</p> -->
    <div class="logo">
      <img src="./assets/img/logo@3x.png" alt="" />
    </div>
    <div class="title">
      <img src="./assets/img/Mighty@3x.png" alt="" />
    </div>
    <div class="text">
      <img :src="require(`./assets/img/text_${lang}.png`)" alt="" />
    </div>
    <div class="main">
      <img src="./assets/img/main@3x.png" alt="" />
    </div>
    <div class="foot">
      <div class="wrap">
        <template v-if="device == 'Android'">
          <a
            href="https://download.promen.me/mighty/app/mighty.apk"
            download="mighty.apk"
          >
            <div class="btn">
              <img src="./assets/img/phone@3x.png" alt="" />
              <span>App {{ downloadText[lang] }}</span>
            </div>
          </a>
          <div class="btn" @click="storeDownload">
            <img src="./assets/img/googlePlay@3x.png" alt="" />
            <span>Google Play</span>
          </div>
        </template>

        <template v-if="device == 'IOS'">
          <div class="btn" @click="storeDownload">
            <img src="./assets/img/apple.png" alt="" />
            <span>App {{ downloadText[lang] }}</span>
          </div>
          <div class="btn" @click="storeDownload">
            <img src="./assets/img/googlePlay@3x.png" alt="" />
            <span>Google Play</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import util from "./util";
export default {
  name: "App",
  data() {
    return {
      lang1: navigator.language,
      lang: "",
      device: "",
      downloadText: {
        zh: "下载",
        "zh-tw": "下載",
        "zh-hk": "下載",
        vi: "Tải",
        en: "Download",
      },
    };
  },
  components: {},
  created() {
    this.lang = util.getBrowserLang();
    this.device = util.checkDevice();
  },
  methods: {
    storeDownload() {
      let device = util.checkDevice();
      if (device == "Android") {
        window.open(
          "https://play.google.com/store/apps/details?id=com.chat.app.mightys",
          "_self"
        );
      } else if (device == "IOS") {
        window.open(
          "https://apps.apple.com/sg/app/mighty-global/id1544908215",
          "_self"
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  font-size: 16px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url("./assets/img/bg@3x.png") no-repeat;
  background-size: cover;
  .logo {
    text-align: center;
    margin-top: 28px;
    margin-bottom: 16px;
    img {
      width: 70px;
      height: 70px;
    }
  }
  .title {
    text-align: center;
    img {
      width: 104px;
    }
  }
  .text {
    text-align: center;
    img {
      height: 54px;
    }
  }
  .main {
    text-align: center;
    img {
      width: 85%;
      position: relative;
      top: -120px;
    }
  }
  .foot {
    text-align: center;
    height: 120px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    .wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      background: url("./assets/img/foot@3x.png") no-repeat;
      background-size: 100%;
      background-position: bottom;
      a {
        display: inline-block;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;
        text-decoration: none;
        width: 37%;
        .btn {
          width: 100%;
        }
      }
      .btn {
        display: flex;
        align-items: center;
        width: 37%;
        height: 46px;
        background-color: #000;
        color: #fff;
        font-size: 16px;
        border-radius: 13px;
        padding-left: 15px;
        position: relative;
        bottom: -20px;
        img {
          height: 20px;
          margin-right: 12px;
        }
      }
    }
  }
}

@media screen and (min-width: 415px) {
  #container {
    overflow: auto;
  }
}
</style>
