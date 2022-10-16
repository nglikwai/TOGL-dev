<script>
import { registerQuestions } from "../data";
import Checkbox from "./CheckBox.vue";
import Footer from "./Footer.vue";
import Tag from "./Tag.vue";
import SelectMenu from "./Common/SelectMenu";
import DatePicker from "./Common/DatePicker";

export default {
  data() {
    return {
      registerQuestions,
      tags: [],
    };
  },
  components: { Checkbox, Footer, Tag, SelectMenu, DatePicker },
  methods: {
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
  },
};
</script>

<template>
  <div class="outer-wrapper">
    <div class="heading"></div>
    <div class="lower-wrapper">
      <div class="form-wrapper">
        <div class="form-inner-wrapper">
          <div class="title">Create Your Account</div>
          <div class="session">
            <div class="warning">
              *Fields are required if not otherwise stated.
            </div>
            <div
              v-for="session in registerQuestions"
              :key="session.sessionTitle"
              class="questions-wrapper"
            >
              <div class="session-title">{{ session.sessionTitle }}</div>
              <div
                class="question"
                :style="question.line === 0.5 && 'width:auto;'"
                v-for="question in session.questions"
                :key="question.title"
              >
                <div class="question-title">{{ question.title }}</div>

                <div v-if="question.type === 'file'">
                  <button class="upload-button">
                    {{ question.label }}
                    <img :src="require('../../assets/icon/upload.svg')" />
                    <input
                      type="file"
                      id="file"
                      accept="image/png, image/jpeg, application/pdf"
                      multiple
                      @change="uploadFile"
                    />
                  </button>
                  <div class="tag-wrapper">
                    <div v-for="tag in tags" :key="tag">
                      <Tag :tag="tag" @deleteTag="onDeleteTag" />
                    </div>
                  </div>
                </div>

                <div v-if="question.description">
                  <div
                    class="question-description"
                    v-for="item in question.description"
                    :key="item"
                  >
                    <Checkbox v-if="question.type === 'checkbox'" />{{ item }}
                  </div>
                </div>

                <div v-if="question.instruction" class="question-instruction">
                  {{ question.instruction }}
                </div>

                <input
                  v-if="question.type === 'input'"
                  type="text"
                  :style="question.line === 2 && `width:100%; max-width:1200px`"
                />
                <input
                  v-if="question.line === 2"
                  type="text"
                  style="width: 100%; max-width: 1200px"
                />
                <DatePicker v-if="question.type === 'date'" />
                <SelectMenu v-if="question.type === 'select'" />
              </div>
            </div>
          </div>
          <div class="action-button">
            <button id="back" @click="redirect('/')">Back</button>
            <button id="apply" @click="redirect('/')">Apply</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<style scoped>
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
  padding: 20px;
  width: 100%;
  max-width: 1420px;
}

.lower-wrapper {
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-wrapper {
  width: 100%;
  max-width: 1420px;
  padding-bottom: 160px;
}

.form-inner-wrapper {
  padding: 0 20px;
  background: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  border-radius: 0 0 25px 25px;
}

.title {
  background: #2ca2b9;
  color: white;
  font-size: 40px;
  padding: 4px;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  margin: 10px 0;
}

.warning {
  color: #3b5974;
  font-size: 16px;
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
.session-title {
  font-size: 24px;
  color: #2079a9;
  font-family: Hind Madurai Bold;
  width: 100%;
}

.session input[type="text"] {
  background: #ecf6fb;
  border: #3d9dd1 solid 1px;
  padding: 4px 10px;
  margin: 0 10px;
  border-radius: 8px;
  height: 45px;
  width: 100%;
  max-width: 550px;
  color: #00325c;
  font-size: 20px;
  margin-bottom: 12px;
}

.session input[type="text"]:focus {
  border: #2a79a9 solid 1px;
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

.upload-button {
  background: #2a79a9;
  color: white;
  border: none;
  padding: 10px 16px;
  margin: 0 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  font-size: 24px;
  font-family: Hind Madurai Light;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.question button input[type="file"] {
  position: absolute;
  max-width: 400px;
  opacity: 0;
  cursor: pointer;
  width: 95%;
}

.question-title {
  width: auto;
  color: #2079a9;
  font-size: 24px;
  padding: 2px 0;
  font-family: Hind Madurai Medium;
}

.question-description {
  font-size: 20px;
  color: #00325c;
  padding: 4px 10px;
  display: flex;
  line-height: 30px;
}

.question-instruction {
  font-size: 16px;
  color: #00325c;
  padding: 4px 10px;
}

#apply {
  background: #2ca2b9;
  color: white;
  border: none;
  padding: 4px 30px;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  border-radius: 3rem;
  font-size: 24px;
}

#back {
  background: white;
  color: #2ca2b9;
  border: 3px solid #2ca2b9;
  padding: 4px 30px;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  border-radius: 3rem;
  font-size: 24px;
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
