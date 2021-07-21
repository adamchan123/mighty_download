<template>
  <div id="container">
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
        <div class="btn" @click="downloadLocal">
          <img src="./assets/img/phone@3x.png" alt="" />
          <span>App {{ downloadText[lang] }}</span>
        </div>
        <div class="btn" @click="storeDownload" v-if="device == 'Android'">
          <img src="./assets/img/googlePlay@3x.png" alt="" />
          <span>Google Play</span>
        </div>
        <div class="btn" @click="storeDownload" v-if="device == 'IOS'">
          <img src="./assets/img/apple.png" alt="" />
          <span>App Store</span>
        </div>
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
      lang: "",
      device: "",
      downloadText: {
        zh: "本地下载",
        "zh-tw": "本地下載",
        vi: "Tải về",
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
    downloadLocal() {
      let device = util.checkDevice();
      if (device == "Android") {
        window.location.href =
          "https://download.promen.me/mighty/app/mighty.apk";
      } else if (device == "IOS") {
        window.location.href =
          "itms-services://?action=download-manifest&url=https://apps.appdownload.center/package/zh/mighty.plist";
      }
    },
    storeDownload() {
      let device = util.checkDevice();
      if (device == "Android") {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.chat.app.mightys";
      } else if (device == "IOS") {
        window.location.href =
          "https://apps.apple.com/sg/app/mighty-global/id1544908215";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  line-height: normal;
}
#container {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Microsoft YaHei,
    sans-serif;
  font-size: 16px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
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
    position: fixed;
    bottom: 0;
    left: 0;
    height: 120px;
    width: 100%;
    .wrap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      background: url("./assets/img/foot@3x.png") no-repeat;
      background-size: 100%;
      background-position: bottom;
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
        bottom: -25px;
        img {
          height: 20px;
          margin-right: 12px;
        }
      }
    }
  }
}

</style>
