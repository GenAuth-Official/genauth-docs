<template>
  <div v-if="value" class="feedback-toast-container" :style="styles">
    <div class="title">
      <div v-if="type === 'good'">感谢反馈！请问还有其他建议吗？</div>
      <div v-else-if="type === 'bad'">
        <span class="highlight">*</span><span>你是否遇到以下问题？</span>
      </div>
    </div>

    <div class="content">
      <div class="reasons" v-if="type === 'bad'">
        <div class="option" v-for="reason in reasons" :key="reason.value">
          <input
            type="checkbox"
            :id="reason.value"
            :value="reason.desc"
            v-model="selectedReasons"
            class="checkbox"
          />
          <label :for="reason.value">{{ reason.desc }}</label>
        </div>
      </div>

      <textarea
        class="textarea"
        :placeholder="textareaPlaceholder"
        v-model="customReason"
        :class="{ focused: focused }"
        @focus="focused = true"
        @blur="focused = false"
      ></textarea>

      <div style="margin-top: 16px" v-if="type === 'bad'">
        <div class="title" style="margin-bottom: 8px">
          <span class="highlight">*</span>
          手机号/邮箱
        </div>
        <input
          v-model="contactMethod"
          placeholder="我们很重视您的反馈，期待能够和您联系"
          :class="{
            contactMethod: true,
            error: showContactMethodError,
          }"
        />
        <div
          :class="{
            'input-error-msg': true,
            show: showContactMethodError,
          }"
        >
          {{ contactMethodErrorMsg }}
        </div>
      </div>
    </div>

    <div class="feedback-footer">
      <div class="submit" @click="submit">提交</div>
      <div class="tips">
        如果遇到其他问题，立即<a
          href="https://forum.authing.cn/"
          target="_blank"
          >联系我们</a
        >
      </div>
    </div>
  </div>
</template>

<script scoped>
function createReasons() {
  return [
    {
      value: "A",
      desc: "没找到想了解的信息",
    },
    {
      value: "B",
      desc: "步骤说明不清晰/看不懂",
    },
    {
      value: "C",
      desc: "内容有错",
    },
    {
      value: "D",
      desc: "其他",
    },
  ];
}

export default {
  props: {
    type: {
      type: String,
      default() {
        return "good";
      },
      validator(value) {
        return ["good", "bad"].includes(value);
      },
    },
    value: {
      type: Boolean,
      default() {
        return false;
      },
    },
    styles: {
      type: String,
      default() {
        return "";
      },
    },
  },
  watch: {
    value(newVal) {
      newVal && this.resetStates();
    },
    type() {
      this.resetStates();
    },
    contactMethod(v) {
      if (!this.formSubmitted) {
        return;
      }
      if (!v) {
        this.contactMethodErrorMsg = "请输入手机号或邮箱";
        this.showContactMethodError = true;
      } else if (
        !/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(v) &&
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        )
      ) {
        this.contactMethodErrorMsg = "请输入正确的手机号或邮箱";
        this.showContactMethodError = true;
      } else {
        this.showContactMethodError = false;
      }
    },
  },
  data() {
    return {
      reasons: createReasons(),
      selectedReasons: [],
      customReason: "",
      focused: false,
      contactMethod: "",
      showContactMethodError: false,
      contactMethodErrorMsg: "请输入手机号或邮箱",
      formSubmitted: false,
    };
  },
  computed: {
    textareaPlaceholder() {
      const map = {
        good: "你的建议会让我们做的更好...",
        bad: "描述具体问题...",
      };
      return map[this.type] || "";
    },
  },
  methods: {
    submit() {
      this.formSubmitted = true;
      if (
        this.type === "bad" &&
        (!this.contactMethod || this.showContactMethodError)
      ) {
        this.showContactMethodError = true;
        return;
      }

      const params = {
        helpful: this.type === "good",
        docTitle: this.$page.title,
        docUrl: window.location.href,
        customReason: this.xssCheck(this.customReason),
        contactMethod: this.xssCheck(this.contactMethod),
      };

      if (this.type === "bad") {
        params.reasonList = this.selectedReasons;
      }

      this.$emit("success", params);
    },
    resetStates() {
      this.selectedReasons = [];
      this.customReason = "";
      this.contactMethod = "";
      this.showContactMethodError = false;
      this.contactMethodErrorMsg = "请输入手机号或邮箱";
      this.formSubmitted = false;
    },
    xssCheck(str, reg) {
      const map = {
        "<": "&lt;",
        "&": "&amp;",
        '"': "&quot;",
        ">": "&gt;",
        "'": "&#39;",
      };
      return str
        ? str.replace(
            reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g,
            ($0, $1) => {
              return $1 ? $0 : map[$0];
            }
          )
        : "";
    },
  },
};
</script>

<style lang="stylus" scoped>
.feedback-toast-container
  position absolute
  z-index 10
  width 352px
  left 0
  top 0
  background #fff
  border 1px solid #E5E6EB
  box-shadow 0px 16px 32px -10px rgba(4, 24, 115, 0.1)
  border-radius 4px
  padding 24px 16px
  box-sizing border-box
  .title
    margin-bottom 20px
    font-weight 500
    font-size 14px
    line-height 22px
    color #000
    .highlight
      padding-right 10px
      box-sizing border-box
      color #E8353E
  .input-error-msg
    color: #E8353E
    display: none
    font-size: 12px
    margin-top: 2px
    &.show
      display: block
  .content
    margin-bottom 16px
    .reasons
      margin-bottom 16px
      .option
        display flex
        align-items center
        margin-bottom 9px
        line-height 22px
        font-size 14px
        color #1D2129
        input[type="checkbox"]
          position relative
          margin-right 8px
          &:focus
            outline none
            border none
          &::before
            position absolute
            topp 0
            left 0
            width 100%
            height 100%
            content ""
            background #FFFFFF
            border 1px solid #E5E6EB
            border-radius 2px
          &:checked::before
            position absolute
            top 0
            left 0
            content "\2713"
            display flex
            align-items center
            justify-content center
            background-color #fff
            width 100%
            border 1px solid #EFEFEF
            color #fff
            font-size 12px
            background-color #165DFF
    .textarea
      max-width 320px
      width 320px
      height 90px
      left 16px
      top 61px
      padding 5px 12px
      box-sizing border-box
      background #F2F3F5
      border-radius 2px
      border none
      color #1d2129
      resize none
      border 1px solid #F2F3F5
      font-size 14px
      &:focus
        outline none
        border none
      &.focused
        background-color #fff
        border 1px solid #165DFF
    .contactMethod
      border: 1px solid #f2f3f5;
      outline: none;
      font-size: 14px;
      background: #f2f3f5;
      color: #1d2129;
      max-width: 320px;
      width: 320px;
      line-height: 20px;
      box-sizing: border-box;
      padding: 5px 12px;
      &.error {
        border 1px solid #E8353E
      }
      &:focused
        background-color #fff
        border 1px solid #165DFF

  .feedback-footer
    display flex
    flex-direction column
    align-items flex-end
    .submit
      margin-bottom 16px
      width 65px
      height 28px
      text-align center
      line-height 28px
      background #682AE9
      font-size 14px
      color #fff
      border-radius 4px
      cursor pointer
    .tips
      font-size 12px
      line-height 20px
      color #86909C
</style>
