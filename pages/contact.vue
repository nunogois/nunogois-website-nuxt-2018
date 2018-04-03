<template>
  <div>
    <h1 class="page_title">// CONTACT</h1>
    <div class="container" v-show="!email">        
        <div class="columns is-multiline col-center animated fadeIn" v-show="loaded">                
            <div class="column is-4"><a href="javascript:;" @click="toggleEmail()"><font-awesome-icon class="contact-icon" style="font-size:200px;color: #bd880c" :icon="['far', 'envelope']"/></a></div>
            <div class="column is-4"><a href="https://github.com/yokiharo" target="_blank"><font-awesome-icon class="contact-icon" style="font-size:200px;color: #573b76" :icon="['fab', 'github-alt']"/></a></div>
            <div class="column is-4"><a href="https://www.linkedin.com/in/nuno-gois" target="_blank"><font-awesome-icon class="contact-icon" style="font-size:200px;color: #337ab7" :icon="['fab', 'linkedin']"/></a></div>
        </div>
    </div>
    <div class="container animated fadeIn" v-show="email">
        <input class="input" type="text" id="name" name="name" v-model="name" placeholder="Name" style="display:none;">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" v-model="contact_name" placeholder="How should I address you?">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="text" v-model="contact_email" placeholder="How should I reply?">
            </div>
        </div>
        <div class="field">
            <label class="label">Subject</label>
            <div class="control">
                <input class="input" type="text" v-model="contact_subject" placeholder="What is your message about?">
            </div>
        </div>
        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" v-model="contact_message" placeholder="What is your message?"></textarea>
            </div>
        </div>

        <div class="field is-grouped is-pulled-right">
            <div class="control">
                <button class="button is-danger is-outlined" @click="toggleEmail()">Close</button>
            </div>
            <div class="control">
                <button class="button is-primary is-outlined" ref="send" :class="{'is-loading': loading}" @click="sendEmail()" :disabled="email_sent">Send</button>
            </div>
        </div>
    </div>
    <h1 class="animated slideInUp" style="text-align:center;margin-top:50px;">© {{year}} - Nuno Góis</h1>
  </div>
</template>

<script>
import item from '~/components/item.vue'

  export default {
    data () {
        return {
            loaded: false,
            email: false,
            email_sent: false,
            loading: false,
            name: '',
            contact_name: '',
            contact_email: '',
            contact_subject: '',
            contact_message: ''
        }
    },
    components: {
      item
    },
    methods: {
        toggleEmail() {
            this.email = !this.email;
        },
        sendEmail() {
            this.$refs.send.blur();
            if (this.name !== "" || this.contact_name === "" || this.contact_email === "" || this.contact_subject === "" || this.contact_message === "")
                this.$toast.error("Please fill all the fields.").goAway(2000);
            else
            {
                var el = this;
                this.loading = true;
                this.$axios.post('https://nunogois-api.herokuapp.com/send_email', {
                    contact_name: this.contact_name,
                    contact_email: this.contact_email,
                    contact_subject: this.contact_subject,
                    contact_message: this.contact_message
                }).then(function() {
                    el.loading = false;
                    el.$toast.success('Thank you for your message!').goAway(2000);
                    el.email_sent = true;
                    el.email = false;
                }).catch(function() {
                    el.loading = false;
                    el.$toast.error("There was an error and your message couldn't be sent.").goAway(2000);
                });
            }            
        }
    },
    computed: {
        year() {
            return new Date().getFullYear();
        }
    },
    mounted: function () {
        this.loaded = true;

        var tx = document.getElementsByTagName('textarea');
        for (var i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;resize:none;');
        tx[i].addEventListener("input", OnInput, false);
        }

        function OnInput() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
        }
    }
  }
</script>

<style>
.contact-icon:hover {
    -webkit-animation: pulse 1s;
    animation: pulse 1s;
}

.label {
    color: white;
    font-weight:300;
}
.col-center {
    text-align:center;
}
.input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder {
    color:rgb(122, 122, 122);
}
.input:-moz-placeholder, .textarea:-moz-placeholder {
   color:rgb(122, 122, 122);
   opacity:  1;
}
.input::-moz-placeholder, .textarea::-moz-placeholder {
   color:rgb(122, 122, 122);
   opacity:  1;
}
.input:-ms-input-placeholder, .textarea:-ms-input-placeholder { 
   color:rgb(122, 122, 122);
}
.input::-ms-input-placeholder, .textarea::-ms-input-placeholder {
   color:rgb(122, 122, 122);
}

.input::placeholder, .textarea::placeholder {
   color:rgb(122, 122, 122);
}
</style>