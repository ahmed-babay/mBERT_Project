new Vue({
  el: '#app',
  data: {
    userInput: '',
    responseData: "Output will be updated when the computation is done.. ",
    ACCESS_TOKEN: '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'
  },
  methods: {
    async fetchData() {
      const data = { "inputs": this.userInput };

      try {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/tomaarsen/span-marker-mbert-base-multinerd",
          {
            headers: { Authorization: `Bearer ${this.ACCESS_TOKEN}` },
            method: "POST",
            body: JSON.stringify(data),
          }
        );

        const result = await response.json();
        this.responseData = result;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  computed: {
    formattedResponseData() {
      if (Array.isArray(this.responseData)) {
        return this.responseData.map(item => `(entity_group:${item.entity_group} word: ${item.word})`).join('<br>');
      } else {
        return "Output will be updated when the computation is done.. ";
      }
    }
  }
});