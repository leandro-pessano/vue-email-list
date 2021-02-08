var app = new Vue ({
  el: '#root',
  data: {
    mailList: []
  },
  mounted() {
    for (var i = 0; i < 10; i++) {
      axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((result) => {
        this.mailList.push(result.data.response)
      });
    }
  }
});
