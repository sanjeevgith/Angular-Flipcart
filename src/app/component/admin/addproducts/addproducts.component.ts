import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddproductsService } from '../addproducts.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {


  adddata!: FormGroup
  constructor(private addproductservice: AddproductsService, private fb: FormBuilder) { }


  compare_list = ["toy", "travel", "twowheeler", "grocery", "fasion", "home", "electronics", "mobile"]

  admin: any
  ngOnInit(): void {
    this.adddata = this.fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      img: ['', [Validators.required]],
      categories: ['', [Validators.required]],
      size: ['', [Validators.required]],
      color: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })

    this.admin = localStorage.getItem("admin")
  }

  get agentcontrols() {
    return this.adddata.controls
  }

  imgFile!: string
  // uploadForm: any
  onImageChange(e: any) {
    const reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgFile = reader.result as string;
        console.log(this.imgFile);
        this.adddata.patchValue({
          img: this.imgFile
        });
      };
    }
  }


  finalresponseList: any
  sumbit() {

    if (this.admin == "true") {
      console.log(this.adddata.value);
      this.addproductservice.addproduct(this.adddata.value).subscribe(responseList => {
        this.finalresponseList = responseList;
        console.log(this.finalresponseList);

      })
    }
    else {
      alert("Unauthorised User");
    }


  }



  // compareChange(event:any){
  //   var data = event.target.value;
  //   console.log(data);
  // }

  reset() {
    this.adddata.reset()
  }





}
