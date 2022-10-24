<script>
import OptionRadio from "@/src/components/Common/OptionRadio";
import Tag from "@/src/components/Common/Tag";
import RegistrationContent from "./RegistrationContent";
import RegistrationQuestion from "./RegistrationQuestion";
import { initXmSelect, getValue } from "../../utility/xmSelect";
import { mapActions, mapMutations } from "vuex";

import {
  sessionTwoQuestions,
  natureOfOrganization,
  sessionOneQuestions,
  initDatePicker,
} from "./RegisterFormData";

export default {
  components: { OptionRadio, RegistrationContent, RegistrationQuestion, Tag },
  data() {
    return {
      sessionOneQuestions,
      sessionTwoQuestions,
      natureOfOrganization,
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
            <OptionRadio :option="option" :index="index" />
          </div>
        </div>
        <div class="clear"></div>

        <RegistrationContent
          v-for="question in sessionOneQuestions"
          :question="question"
          @onInput="(e) => (answer[question.content[e.index]] = e.answer)"
          :answer="answer"
        />

        <div class="clear"></div>
        <div class="register_txt_title padding_20 title_24">
          <b>Contact information:</b>
        </div>

        <RegistrationContent
          v-for="question in sessionTwoQuestions"
          :key="question.content[0]"
          :question="question"
          @onInput="(e) => (answer[question.content[e.index]] = e.answer)"
          :answer="answer"
        />

        <div class="clear"></div>

        <div class="register_txt_title padding_20 title_24">
          <b>Supporting Documents</b>
        </div>
        <div class="register_li">
          I/We attach the following documents in support of my/our application
          (please see belows Note (1)):<br />
          (a) documentary evidence to prove that the Applicant is a charitable
          institution or trust of apublic character exempt from tax under
          section 88 of the Inland Revenue Ordinance Cap.112 (if applicable);<br />
          (b) documentary evidence to prove that the Applicant is a society
          registered under the Societies Ordinance Cap. 151 (if applicable);
          or<br />
          (C) documentary evidence to prove that the Applicant is a legally
          registered body (please specify).
          <div class="register_centent">
            <div class="register_50 padding_10">
              <input type="text" class="form-input" />
            </div>
          </div>

          <div class="register_Upload">
            <button type="button" class="layui-btn upload-button">
              <input
                type="file"
                id="file"
                accept="image/png, image/jpeg, application/pdf"
                multiple
                @change="onUploadFile"
              />
              Upload New Documents <i class="fa fa-upload"></i>
            </button>
            <div class="register_Upload_table">
              <Tag
                v-for="tag in tags"
                :key="tag"
                :tag="tag"
                @deleteTag="onDeleteTag"
              />
            </div>
          </div>
          I/We acknowledge and agree that failure to submit the required
          documents may lead to rejection of the application. I/We also
          acknowledge and agree that I/we may need to submit other additional
          information or documents as may be required by the Lands Department to
          facilitate the assessment of my/our application. Unless such
          additional information/documents are submitted, my/our application
          cannot be further processed.
          <br />NOTE:<br />
          (1) No documentation proof is required if the application is made by
          incumbent Lego Members/DC Members, Government departments or statutory
          organisations.
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
                  <input
                    type="radio"
                    class="radio_class"
                    name="Agreement"
                    id="Agreement_1"
                  />
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
          <button
            href="index.html"
            @click="redirect('/')"
            class="register_botton_a"
          >
            Back
          </button>

          <input
            type="submit"
            class="register_botton_but"
            value="Apply"
            @click="onApply()"
          />
        </div>
      </form>
    </div>
  </div>
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
