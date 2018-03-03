<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="emailAddressGroup"
                    label="Email address:"
                    label-for="emailInput"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="emailAddress1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="nameGroup"
                    label="Your Name:"
                    label-for="nameInput">
        <b-form-input id="nameId"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>

        <b-form-group id="passwordGroup"
                    label="Password:"
                    label-for="passwordInput">
        <b-form-input id="passwordID"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter Password">
        </b-form-input>
      </b-form-group>

        <b-form-group id="zipGroup"
                    label="Your Zip:"
                    label-for="zipInput">
        <b-form-input id="zipID"
                      type="text"
                      v-model="form.zip"
                      required
                      placeholder="Enter zip">
        </b-form-input>
      </b-form-group>

      

      <b-form-group id="partGroup"
                    label="Part:"
                    label-for="partInput">
        <b-form-select id="partInput1"
                      :options="party"
                      required
                      v-model="form.party">
        </b-form-select>
      </b-form-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        pasword:'',
        zip:'',
        party: null,
      },
      party: [
        { text: 'Select One', value: null },
        'Democrat', 'Republican', 'Independent'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>