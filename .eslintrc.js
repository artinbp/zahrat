module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/vue3-recommended',
      // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    env: {
        node: true,
        // The Follow config only works with eslint-plugin-vue v8.0.0+
        "vue/setup-compiler-macros": true,
      },
    globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly",
    },
  }