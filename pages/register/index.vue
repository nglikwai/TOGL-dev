<script>
import OptionRadio from "@/src/components/Common/OptionRadio";
import Tag from "@/src/components/Common/Tag";
import RegistrationContent from "./RegistrationContent";
import RegistrationQuestion from "./RegistrationQuestion";
import { initXmSelect, getValue } from "@/src/utility/xmSelect";
import { mapMutations } from "vuex";
import Wrapper from "@/src/components/Common/Wrapper";
import * as R from "ramda";
import * as reg from "@/src/constants/registration";

export default {
  head () {
    return {
        title: "Register"
    }
},



  components: {
    OptionRadio,
    RegistrationContent,
    RegistrationQuestion,
    Tag,
    Wrapper,
  },
  data() {
    return {
      sessionOneQuestions:reg.sessionOneQuestions,
      sessionTwoQuestions:reg.sessionTwoQuestions,
      natureOfOrganization:reg.natureOfOrganization,
      supportingDocument:reg.supportingDocument,
      answer: {
        natureOfOrganization: "",
        agreement: false,
        serviceDistrict: [],
      },
      tags: [],
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
      if (!R.isEmpty(this.answer)) {
        confirm("Are you confirm to abandon the changes?");
        this.$router.push(link);
      } else {
        this.$router.push(link);
      }
    },
    validate() {
      if (this.answer.natureOfOrganization === "") {
        alert("You need to answer nature of organization");
      } else if (getValue()[0] === "") {
        alert("Please choose service district");
      } else if (this.answer.agreement === false) {
        alert("Please agree for privacy policy");
      }
      console.log(this.answer);
      this.updateIsSubmitted();
    },
    onApply() {
      this.$router.push("/complete");
      console.log(this.$store.state.register.isSubmited);
      console.log(getValue());
    },
  },
  mounted() {
    reg.initDatePicker("validityPeriod");
    initXmSelect("serviceDistrict");
  },
};
</script>

<template>
  <Wrapper>
    <div class="container">
      <div class="register_width">
        <div class="register_title"><b>Create Your Account</b></div>
        <form
          action="/"
          @submit.prevent="onApply()"
          method="post"
          class="register_txt"
        >
          *Fields are required if not otherwise stated.
          <div class="register_txt_title title_24">
            <b>Details of Organization :</b>
          </div>
          <div class="register_txt_label title_24">Nature of Organization</div>
          <div class="register_li">
            <div v-for="(option, index) in natureOfOrganization" :key="option">
              <OptionRadio
                :option="option"
                :index="index"
                @onInput="(e) => (answer.natureOfOrganization = index + 1)"
              />
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
            {{ supportingDocument.agreement }}
            <br />NOTE:<br />
            {{ supportingDocument.agreementNote }}
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
                      @input="answer.agreement = true"
                      required
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
              type="submit"
              class="register_botton_but"
              @click="validate()"
            >
              Apply
            </button>
            <button
              href="index.html"
              @click="redirect('/')"
              class="register_botton_a"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  </Wrapper>
</template>

<style lang="scss" scoped>
.upload-button {
  position: relative;
  @media screen and (max-width: 330px) {
    width: 100%;
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    @media screen and (max-width: 330px) {
      width: 100%;
    }
  }
}
</style>
