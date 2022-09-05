import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent implements OnInit {
  favoriteColor = '#26ab3c';
  registerForm: any;
  submitted = false;
  images : any = [];
  constructor(public fb: FormBuilder,private toastr: ToastrService) {
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      address: ['',Validators.required],
      description: ['',Validators.required],
      file: ['',Validators.required],
      fileSource : ['']
    })
  }
  
  get f() {
    return this.registerForm.controls;
  }

  onFileChange(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                  // console.log(event.target.result);
                   this.images.push(event.target.result); 
                   this.registerForm.patchValue({
                      fileSource: this.images
                   });
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.submitted = false;
      this.toastr.success('Add Details Successfull');
    }
  }
}
