export default {
  getBrowserLang() {
    let langs = ["zh", "zh-tw", "zh-hk", "vi", "en"];
    let lang = navigator.language;
    let res = "en";
    for (let value of langs) {
      let match = new RegExp(`${value}`, "i").test(lang);
      if (match) {
        res = value;
      }
    }
    return res;
  },
  checkDevice() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      return "IOS";
    } else if (/(Android)/i.test(navigator.userAgent)) {
      return "Android";
    } else {
      return "Android";
    }
  },
};
