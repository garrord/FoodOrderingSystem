import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Form, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CheckoutCartModel } from "src/app/Models/checkout-cart.model";

@Component({
    selector: 'my-information-component',
    templateUrl: 'my-information.component.html'
})

export class MyInformationComponent{

    constructor(private fb: FormBuilder){}
    myInformationForm!: FormGroup;
    @Output() myInfoIsValid: EventEmitter<boolean> = new EventEmitter<boolean>;

    ngOnInit():void{
        this.createForm();

        this.myInformationForm.valueChanges.subscribe(() => {
            if (this.myInformationForm.valid){
                this.myInfoIsValid.emit(true);
            }}
        )
    }

    createForm():void{
        this.myInformationForm = this.fb.group({
            firstName:['', Validators.required],
            lastName:['', Validators.required],
            cellphone:['', Validators.required],
            address:['', Validators.required],
            city:['', Validators.required],
            state:['', Validators.required],
            zipCode:['', Validators.required],
            message:''
        })
    }
}