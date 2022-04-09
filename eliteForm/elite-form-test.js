import {LitElement, html} from 'lit';
import './elite-form'
import '../LitElements/name.js';
import '../LitElements/email.js';
import '../LitElements/password';

export class Test extends LitElement {

  render() {

    return html`
      <div>
        <elite-form 
          type='email' 
          label='Email:'
          placeholder='email'
          fieldId='email',
          validationRules: {
            required: true,
            email: true, 
            min: 10, 
            max: 20
          },
        ></elite-form>
        <button @click=${() => this.ourFunc(this.handleSubmit)} type='submit'>submit</button>
      </div>



      <div id="main">
      <name- id="fname" required="true" placeholder="first name"></name->
      <name- id="lname" required="true" placeholder="last name"></name->
      <!-- <input id="custom" type="text"> -->
      <!-- <email- required="true"></email->
      <password- required="true"></password-> -->
      <button @click=${() => this.checkandget(["fname", "lname"], this.handleSubmit)}>Check</button>
    </div>
    `;
  }

  checkandget(arr, callback) { // pass the array of ids of fields as the first argument
    const fields = this.shadowRoot.children.main.children;
    console.log(fields)
    // console.log(fields[0].val);
    let formElementsCheck = true;

    const cache = {};

    for (let i = 0; i < arr.length; i++){
      const { val, id } = fields[arr[i]];
      cache[id] = val;
    }

    if (formElementsCheck){
      callback(cache);
    } else console.log('bad form');
  }

  handleSubmit(arg) {
    console.log(arg);
  }

}

window.customElements.define('form-test', Test)