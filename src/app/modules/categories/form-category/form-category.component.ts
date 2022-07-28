import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {

  catForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onSumbit() {
    if (!this.catForm.valid) {
      return;
    }
    this.categoryService.save(this.catForm.value).subscribe(r => {
      
    });
  }

}
