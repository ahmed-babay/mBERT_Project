
new Vue({
    el: '#app',
    data: {
      userInput: '',
      responseData: "Output will be updated when the computation is done.. ",
      ACCESS_TOKEN:'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'
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
          const entity_group_word=result.map(item => `(entity_group:${item.entity_group} word: ${item.word})`);
          this.responseData= entity_group_word.join();
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
    },
  });