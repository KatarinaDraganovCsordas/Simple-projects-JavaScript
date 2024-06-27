      const scriptURL = 'https://script.google.com/macros/s/AKfycbwwjhLDe7fqvb5uloyfV53Jzmu4bWj_OCukCl7mbWJF7W5VSNl0xXUGA5Iu6_zZGeGj/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg");
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = "Thank you for subscribing!"
            setTimeout(() => {
              msg.innerHTML = ""
            }, 5000);
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })
