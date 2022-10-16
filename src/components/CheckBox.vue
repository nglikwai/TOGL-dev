<template>
<label class="checkbox-container">
  <input  type="checkbox">
  <span class="checkmark"></span>
</label>
</template>

<script>
    export default {
    }
</script>

<style scoped>
/* The checkbox-container */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 45px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  border-radius: 50%;
  border: 3px solid #2079a9;
  top: 2px;
  left: 0;
  height: 30px;
  width: 30px;
}

/* On mouse-over, add a grey background color */


/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: white;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  top:3px;
  left:3px;
  width: 18px;
  height: 18px;
  background: #2079a9;
  border-radius: 50%;
}
</style>