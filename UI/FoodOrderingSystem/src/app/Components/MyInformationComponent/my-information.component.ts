import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CheckoutCartModel } from "../../Models/checkout-cart.model";

@Component({
    selector: 'my-information-component',
    templateUrl: 'my-information.component.html',
    styleUrls:['my-information.component.scss']
})

export class MyInformationComponent{

    constructor(private fb: FormBuilder){}
    myInformationForm!: FormGroup;
    @Input() checkoutCartModel:CheckoutCartModel = new CheckoutCartModel;
    @Output() myInfoIsValid: EventEmitter<boolean> = new EventEmitter<boolean>;
    @Output() myInformation: EventEmitter<CheckoutCartModel> = new EventEmitter<CheckoutCartModel>;

    ngOnInit():void{
        this.createForm();

        this.myInformationForm.valueChanges.subscribe(() => {
            if (this.myInformationForm.valid){
                this.createMyInformation();
                this.myInformation.emit(this.checkoutCartModel);
            }}
        )
    }

    createForm():void{
        this.myInformationForm = this.fb.group({
            firstName:['', Validators.required],
            lastName:['', Validators.required],
            cellphone:['', Validators.required],
            emailAddress:['', Validators.required],
            address:['', Validators.required],
            city:['', Validators.required],
            state:['', Validators.required],
            zipcode:['', Validators.required],
            message:''
        })
    }

    createMyInformation(){
        this.checkoutCartModel.firstName = this.myInformationForm.get('firstName')?.value;
        this.checkoutCartModel.lastName = this.myInformationForm.get('lastName')?.value;
        this.checkoutCartModel.cellphone = this.myInformationForm.get('cellphone')?.value;
        this.checkoutCartModel.emailAddress = this.myInformationForm.get('emailAddress')?.value;
        this.checkoutCartModel.address = {
            addressLine1: this.myInformationForm.get('address')?.value,
            addressLine2: this.myInformationForm.get('address')?.value,
            city: this.myInformationForm.get('city')?.value,
            state: this.myInformationForm.get('state')?.value,
            zipcode: this.myInformationForm.get('zipcode')?.value
        };
        this.checkoutCartModel.message = this.myInformationForm.get('message')?.value;
    }
}