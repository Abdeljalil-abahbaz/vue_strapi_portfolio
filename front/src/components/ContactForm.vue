<template>
    <StyledContactForm id='contact_form'>
        <form class="app-form" @submit.prevent="submitForm">
            <div class="app-form-group">
                <input class="app-form-control field" placeholder="Your name" name="name" v-model="formData.name" />
                <label class="label">{{ nameError }}</label>
            </div>
            <div class="app-form-group">
                <input class="app-form-control field" placeholder="Your e-mail" name="email" v-model="formData.email" />
                <label class="label">{{ emailError }}</label>
            </div>
            <div class="app-form-group">
                <input class="app-form-control field" placeholder="+212 6 50 44 81 79" name="phone" v-model="formData.phone" />
                <label class="label">{{ phoneError }}</label>
            </div>
            <div class="app-form-group message">
                <textarea class="app-form-control field" placeholder="Type your message here" name="message" v-model="formData.message"></textarea>
                <label class="label">{{ messageError }}</label>
            </div>
            <div class="app-form-group buttons">
                <button class='send' type="submit">
                    <span class='animated_bg'></span>
                    <span class='contactme'><i class="fa-solid fa-paper-plane"></i> Send</span>
                </button>
            </div>
        </form>
    </StyledContactForm>
</template>

<script>
import StyledContactForm from '../components/StyledComponents/StyledContactForm'
import axios from 'axios'

export default {
    components: {
        StyledContactForm
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            nameError: '',
            emailError: '',
            phoneError: '',
            messageError: ''
        }
    },
    methods: {
        validateForm() {
            this.nameError = !this.formData.name ? 'Name is required' : ''
            this.messageError = !this.formData.message ? 'Message is required' : ''
            return (this.nameError || this.messageError) ? false : true
        },
        async submitForm() {
            if (this.validateForm()) {
                console.log('Form submitted:', this.formData);
                axios.post(`${process.env.VUE_APP_HOST}/api/messages`, {data:this.formData}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept':'application/json'
                    }
                }).then(()=>{
                    alert("sent")
                }).catch((err)=>{

                })
                this.formData = {
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                };
            }
        }
    }
}
</script>
