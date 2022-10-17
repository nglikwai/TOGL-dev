<script>
import { registerQuestions } from "../../data";
import Checkbox from "../../components/common/CheckBox";
import Footer from "../../components/common/Footer";
import Tag from "../../components/common/Tag";
import Input from "../../components/common/Input";
import { mapState, mapActions } from "vuex";
import {
  Title,
  Warning,
  sessionTitle,
  UploadButton,
  QuestionTitle,
  QuestionInstruction,
  QuestionDescription,
  ApplyButton,
  BackButton,
} from "./styledComponents";
export default {
  computed: mapState(["pageScale"]),

  data() {
    return {
      registerQuestions,
      answer: {},
      tags: [],
    };
  },
  components: {
    Checkbox,
    Footer,
    Tag,
    Input,
    Title,
    Warning,
    sessionTitle,
    UploadButton,
    QuestionTitle,
    QuestionInstruction,
    QuestionDescription,
    ApplyButton,
    BackButton,
  },
  methods: {
    ...mapActions(["changePageScale"]),
    onSubmit() {
      // this.$emit("loginAction", this.username);
    },
    redirect(link) {
      this.$router.push(link);
    },
    uploadFile(event) {
      for (const file in event.target.files) {
        if (typeof event.target.files[file] === "object") {
          this.tags = [...this.tags, event.target.files[file].name];
        }
      }
    },
    onDeleteTag(tag) {
      this.tags = this.tags.filter((item) => item !== tag);
    },
    onApply() {
      console.log(this.answer);
    },
  },
};
</script>

<template>
  <div class="outer-wrapper">
    <div class="heading" style="z-index: 10; padding: 20px"></div>
    <div class="heading" style="border-radius: 0 0 25px 25px"></div>
    <div class="lower-wrapper">
      <div class="form-wrapper">
        <div class="form-inner-wrapper">
          <Title :scale="pageScale">Create Your Account</Title>
          <div class="session">
            <Warning :scale="pageScale">
              *Fields are required if not otherwise stated.
            </Warning>
            <button></button>
            <div
              v-for="session in registerQuestions"
              :key="session.sessionTitle"
              class="questions-wrapper"
            >
              <sessionTitle :scale="pageScale">{{
                session.sessionTitle
              }}</sessionTitle>
              <div
                class="question"
                :style="question.line === 0.5 && 'width:auto;'"
                v-for="question in session.questions"
                :key="question.title"
              >
                <QuestionTitle :scale="pageScale">{{
                  question.title
                }}</QuestionTitle>
                <div v-if="question.element === 'file'">
                  <UploadButton :scale="pageScale">
                    {{ question.label }}
                    <img :src="require('~/assets/icon/upload.svg')" />
                    <input
                      type="file"
                      id="file"
                      accept="image/png, image/jpeg, application/pdf"
                      multiple
                      @change="uploadFile"
                    />
                  </UploadButton>
                  <div class="tag-wrapper">
                    <div v-for="tag in tags" :key="tag">
                      <Tag :tag="tag" @deleteTag="onDeleteTag" />
                    </div>
                  </div>
                </div>

                <div v-if="question.description">
                  <QuestionDescription
                    :scale="pageScale"
                    v-for="item in question.description"
                    :key="item"
                  >
                    <Checkbox v-if="question.element === 'checkbox'" />{{
                      item
                    }}
                  </QuestionDescription>
                </div>

                <QuestionInstruction
                  :scale="pageScale"
                  v-if="question.instruction"
                >
                  {{ question.instruction }}
                </QuestionInstruction>

                <Input
                  :data="answer[question.code]"
                  @input="(e) => (answer[question.code] = e)"
                  :question="question"
                />
              </div>
            </div>
          </div>
          <div class="action-button">
            <BackButton :scale="pageScale" @click="redirect('/')"
              >Back</BackButton
            >
            <ApplyButton :scale="pageScale" @click="onApply()"
              >Apply</ApplyButton
            >
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outer-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 139px);
}

.heading {
  background: white;
  border-radius: 25px 25px 0px 0px;
  padding: 100px;
  width: 100%;
  max-width: 1420px;
}

.lower-wrapper {
  width: 100%;
  margin-top: 20px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: calc(100vh - 139px);
}

.form-wrapper {
  width: 100%;
  max-width: 1420px;
  padding-bottom: 160px;
}

.form-inner-wrapper {
  padding: 20px 20px 0 20px;
  background: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  border-radius: 25px;
}

.session {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
}

.questions-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}

.question {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  padding-right: 40px;
}

.tag-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.question button input[type="file"] {
  position: absolute;
  max-width: 400px;
  opacity: 0;
  cursor: pointer;
  width: 95%;
}

.action-button {
  padding-top: 50px;
  display: flex;
}

.action-button button {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .session {
    padding: 40px 0px;
    width: 100%;
  }
  .question {
    width: 100%;
    padding: 16px 0;
  }
  .session input[type="text"] {
    margin-left: 0;
  }
  .question-instruction {
    padding-left: 0;
  }
}
</style>
