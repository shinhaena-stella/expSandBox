import {LitElement, html} from 'lit';
import './elite-form';
import '../LitElements/name.js';
import '../LitElements/email.js';
import '../LitElements/password';
import './elite-form-new';


export class Test2 extends LitElement {

  render() {

    return html`
      <div id="main">
        <elite-form-new
          id='test' 
          type='text' 
          label='Test Input:'
          placeholder='type whatever'
          note='type between 5 and 10 letters'
          validationRules: {
            required: true,
            min: 5, 
            max: 10
          },
        ></elite-form-new>
        <button @click=${() => this.checkandget(["test"], this.handleSubmit)}>Check</button>
      </div>
      `;
  }



  checkandget(arr, callback) { // pass the array of ids of fields as the first argument
    const fields = this.shadowRoot.children.main.children;
    // console.log(fields)
    // console.log(fields[0]);
    let formElementsCheck = true;

    const cache = {};

    for (let i = 0; i < arr.length; i++){
      const { value, id } = fields[arr[i]];
      cache[id] = value;
    }

    if (formElementsCheck){
      callback(cache);
    } else console.log('bad form');
  }

  handleSubmit(arg) {
    console.log(arg);
  }

}

window.customElements.define('form-test2', Test2);