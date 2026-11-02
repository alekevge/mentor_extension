import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PocketBaseService } from '../../services/auth.provider';


@Component({
    selector: 'registration-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'block p-4' },
    templateUrl: './registrationPage.component.html',
    styleUrls: ['./registrationPage.component.scss'],
    imports: [ReactiveFormsModule]
})
export class RegistrationPage { 
    private http = inject(PocketBaseService);

    form = new FormGroup({
        'login': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required),
        'name': new FormControl(null, Validators.required),
        'surname':  new FormControl(null, Validators.required)
    })

    async onSubmit(event: Event){
        console.log("log", this.form.valid, this.form.value)
        if (!this.form.valid) return;
        
        this.http.createUser(this.form.value.login!, this.form.value.password!).then((data)=>{
            
            console.log("data",data);
            debugger; }).catch((err)=>console.error(err))
        debugger
    }

}  