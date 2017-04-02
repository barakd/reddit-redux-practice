import React, {Component} from 'react'
import Title from './base/Title';
import Button from './base/Button';

export default class CreateLinkForm extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.formInputs  = {};
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.isFormValid()) {
            this.setState({ invalid: true });
            return;
        }
        this.setState({ invalid: false });
        this.props.onSave(this.getFormValues());
    }

    isFormValid() {
        const inputs = this.formInputs;
        const invalidElements = Object.keys(inputs).filter(key => !inputs[key].value);
        return !invalidElements.length;
    }

    getFormValues() {
        const inputs = this.formInputs;
        return Object.keys(inputs).reduce((values, key) => {
            values[key] = inputs[key].value;
            return values;
        } , {});
    }
    
    render() {
        return (
            <section>
                <Title>Add New Link:</Title>
                {this.state.invalid ? <p style={{ color: 'red' }}>Invalid! all the field are required. </p> : '' }
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Link:</legend>
                        <div>
                            <label htmlFor="clinkTitle">Title</label>
                        </div>
                        <div>
                            <input type="text" id="clinkTitle" ref={ elm => this.formInputs.title = elm }/>
                        </div>
                        <div>
                            <label htmlFor="clinkUrl">Url</label>
                        </div>
                        <div>
                            <input type="text" id="clinkUrl" ref={ elm => this.formInputs.url = elm }/>
                        </div>
                        <div>
                            <label htmlFor="clinkImg">Image Url:</label>
                        </div>
                        <div>
                            <input type="text" id="clinkImg" ref={ elm => this.formInputs.img = elm }/>
                        </div>
                    </fieldset>
                    <Button type="submit">Save</Button>
                    <Button type="button" onClick={this.props.onCancel}>Cancel</Button>
                </form>
            </section>
        )
    }
}
