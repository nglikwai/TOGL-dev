<script>
import OptionRadio from "@/src/components/Common/OptionRadio";
import Tag from "@/src/components/Common/Tag";
import RegistrationContent from "./RegistrationContent";
import RegistrationQuestion from "./RegistrationQuestion";
import { initXmSelect, getValue } from "@/src/utility/xmSelect";
import { mapMutations } from "vuex";
import Wrapper from "@/src/components/Common/Wrapper"


import {
  sessionTwoQuestions,
  natureOfOrganization,
  sessionOneQuestions,
  supportingDocument,
  initDatePicker,
} from "@/src/data/registration";

export default {
  components: { OptionRadio, RegistrationContent, RegistrationQuestion, Tag, Wrapper },
  data() {
    return {
      sessionOneQuestions,
      sessionTwoQuestions,
      natureOfOrganization,
      supportingDocument,
      answer: {},
      tags: ["Document A.pdf", "Document B.pdf"],
    };
  },

  methods: {
    ...mapMutations("register", ["updateIsSubmitted"]),
    onUploadFile(event) {
      for (const file in event.target.files) {
        if (typeof event.target.files[file] === "object") {
          this.tags = [...this.tags, event.target.files[file].name];
        }
      }
    },
    onDeleteTag(tag) {
      this.tags = this.tags.filter((item) => item !== tag);
    },
    onInput(target) {
      answer[target.question] = target.answer;
    },
    redirect(link) {
      this.$router.push(link);
    },
    onApply() {
      this.updateIsSubmitted();
      console.log(getValue());
      console.log(this.answer);
    },
  },
  mounted() {
    initDatePicker("validityPeriod");
    initXmSelect("serviceDistrict");
  },
};
</script>

<template>
  <Wrapper>
    <div class="container">
      <div class="register_bg"></div>
      <div class="register_width">
        <div class="register_title"><b>Create Your Account</b></div>
        <form action="/" method="get" class="register_txt">
          *Fields are required if not otherwise stated.
          <div class="register_txt_title title_24">
            <b>Details of Organization :</b>
          </div>
          <div class="register_txt_label title_24">Nature of Organization</div>
          <div class="register_li">
            <div v-for="(option, index) in natureOfOrganization" :key="option">
              <OptionRadio :option="option" :index="index" :required="true"/>
            </div>
          </div>
          <div class="clear"></div>

          <RegistrationContent v-for="question in sessionOneQuestions" :question="question"
            @onInput="(e) => (answer[question.content[e.index]] = e.answer)" :answer="answer" />

          <div class="clear"></div>
          <div class="register_txt_title padding_20 title_24">
            <b>Contact information:</b>
          </div>

          <RegistrationContent v-for="question in sessionTwoQuestions" :key="question.content[0]" :question="question"
            @onInput="(e) => (answer[question.content[e.index]] = e.answer)" :answer="answer" />

          <div class="clear"></div>

          <div class="register_txt_title padding_20 title_24">
            <b>Supporting Documents</b>
          </div>
          <div class="register_li">
            <div v-for="item in supportingDocument.requirement" :key="item">
              {{ item }}
            </div>
            <div class="register_centent">
              <div class="register_50 padding_10">
                <input type="text" class="form-input" />
              </div>
            </div>

            <div class="register_Upload">
              <button type="button" class="layui-btn upload-button">
                <input type="file" id="file" accept="image/png, image/jpeg, application/pdf" multiple
                  @change="onUploadFile" />
                Upload New Documents <i class="fa fa-upload"></i>
              </button>
              <div class="register_Upload_table">
                <Tag v-for="tag in tags" :key="tag" :tag="tag" @deleteTag="onDeleteTag" />
              </div>
            </div>
            {{supportingDocument.agreement}}
            <br />NOTE:<br />
            {{supportingDocument.agreementNote}}
            <div class="clear"></div>
          </div>

          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_50">
              <div class="register_txt_label title_24">
                Which service district you are for?
              </div>
              <div class="register_li">
                <div class="register_li_input layui-form">
                  <div id="district_select">
                    <div class="div" id="serviceDistrict"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="register_centent">
            <div class="register_100">
              <div class="register_txt_label title_24">
                Agreement for privacy policy
              </div>
              <div class="register_li">
                <div class="register_radio_li">
                  <div class="payment_radio_li title_20">
                    <input  type="radio" class="radio_class" name="Agreement" id="Agreement_1" required />
                    <label for="Agreement_1">
                      I understand and agree to the
                      <a href="#"><b>User Agreement Privacy Policy</b></a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="register_botton padding_10">
            <button href="index.html" @click="redirect('/')" class="register_botton_a">
              Back
            </button>

            <input type="submit" class="register_botton_but" value="Apply" @click="onApply()" />
          </div>
        </form>
      </div>
    </div>
  </Wrapper>
</template>

<style lang="scss" scoped>
.upload-button {
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 100%;
  }
}
</style>
